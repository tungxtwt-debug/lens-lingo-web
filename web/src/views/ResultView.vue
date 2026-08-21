<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { appState, selectObject, setImage } from "../state/appState.js";
import { analyzeImage } from "../services/visionService.js";
import { translateAndLayout } from "../services/labelService.js";
import { prepareImage } from "../services/imageService.js";

const router = useRouter();
const fileInput = ref(null);
const loadingMessage = ref("正在加载本地识别模型…");
const loadingProgress = ref(null);
const showTip = ref(false);
let controller = null;
let timers = [];
const hasImage = computed(() => Boolean(appState.imageUrl && appState.imageBlob));
const status = computed(() => appState.analysisStatus);

function clearTimers() { timers.forEach(clearTimeout); timers = []; }

async function startAnalysis() {
  if (!hasImage.value) return;
  controller?.abort();
  controller = new AbortController();
  clearTimers();
  appState.analysisStatus = "loading";
  appState.analysisError = "";
  appState.objects = [];
  loadingMessage.value = "正在加载本地识别模型…";
  loadingProgress.value = null;
  try {
    const objects = await analyzeImage(appState.imageBlob, appState.imageName, controller.signal, {
      onProgress(progress) {
        if (progress.phase === "model") {
          loadingProgress.value = Math.round((progress.ratio || 0) * 100);
          loadingMessage.value = progress.fromCache ? "正在从浏览器缓存读取模型…" : "正在下载本地识别模型…";
        } else if (progress.phase === "initializing") {
          loadingMessage.value = "正在初始化本地识别…";
        } else if (progress.phase === "fallback") {
          loadingMessage.value = "正在切换兼容识别模式…";
        } else if (progress.phase === "analyzing") {
          loadingProgress.value = null;
          loadingMessage.value = "正在识别图片…";
        } else if (progress.phase === "generating") {
          loadingMessage.value = "正在生成单词";
        }
      }
    });
    appState.objects = translateAndLayout(objects, appState.language);
    appState.analysisStatus = appState.objects.length ? "success" : "empty";
    if (appState.objects.length) {
      showTip.value = true;
      timers.push(setTimeout(() => { showTip.value = false; }, 2600));
    }
  } catch (error) {
    if (error.name === "AbortError") appState.analysisStatus = "canceled";
    else {
      appState.analysisStatus = "error";
      appState.analysisError = error.message || "图片识别暂时不可用，请稍后再试。";
    }
  } finally {
    controller = null;
    clearTimers();
  }
}

function openWord(item) {
  selectObject(item.id);
  router.push(`/word/${encodeURIComponent(item.objectName)}`);
}

async function replaceImage(event) {
  const file = event.target.files?.[0];
  event.target.value = "";
  if (!file) return;
  try { setImage(await prepareImage(file)); await startAnalysis(); }
  catch (error) { appState.analysisStatus = "error"; appState.analysisError = error.message; }
}

onMounted(() => { if (hasImage.value && appState.analysisStatus === "idle") startAnalysis(); });
onBeforeUnmount(() => { controller?.abort(); clearTimers(); });
</script>

<template>
  <main class="result-page page content-shell">
    <header class="topbar">
      <button class="back-button" aria-label="返回首页" @click="router.push('/')">‹</button>
      <strong>看见单词</strong>
      <button class="replace-button" @click="fileInput.click()">换一张</button>
      <input ref="fileInput" class="sr-only" type="file" accept="image/*" capture="environment" @change="replaceImage" />
    </header>
    <section v-if="!hasImage" class="lost-card">
      <span>◌</span><h1>图片已经失效</h1><p>浏览器刷新后不会保留本地图片，请回到首页重新选择。</p>
      <button class="primary-button" @click="router.replace('/')">返回首页</button>
    </section>
    <section v-else class="image-card">
      <div class="image-stage">
        <img class="selected-image" :src="appState.imageUrl" alt="待识别图片" />
        <div v-if="status === 'success'" class="annotation-layer">
          <button v-for="(item,index) in appState.objects" :key="item.id" class="word-label" :class="{ long:item.isLongLabel }" :style="{left:`${item.labelX*100}%`,top:`${item.labelY*100}%`,animationDelay:`${index*55}ms`}" @click="openWord(item)">{{ item.displayName }}</button>
        </div>
        <div v-if="showTip" class="learning-tip">☝️ 点击单词学习</div>
        <div v-if="['idle','loading'].includes(status)" class="image-state">
          <span class="spinner"></span><strong>{{ loadingMessage }}</strong><small v-if="loadingProgress !== null">模型加载 {{ loadingProgress }}%</small><small>所有识别都在本机浏览器内完成，请保持页面打开。</small><button class="ghost-button" @click="controller?.abort()">取消</button>
        </div>
        <div v-else-if="status === 'empty'" class="image-state"><span class="state-icon">◌</span><strong>没有找到物品</strong><small>靠近一点、增加光线，通常会更容易识别。</small><button class="ghost-button solid" @click="fileInput.click()">重新选择</button></div>
        <div v-else-if="status === 'error'" class="image-state"><span class="state-icon">!</span><strong>这次没有识别成功</strong><small>{{ appState.analysisError }}</small><button class="ghost-button solid" @click="startAnalysis">再试一次</button></div>
        <div v-else-if="status === 'canceled'" class="image-state"><span class="state-icon">×</span><strong>识别已取消</strong><small>图片仍保留在当前页面，你可以随时重新开始。</small><button class="ghost-button solid" @click="startAnalysis">重新识别</button></div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.result-page{padding:14px 14px calc(36px + env(safe-area-inset-bottom));background:#f7f8fc}.topbar{display:grid;grid-template-columns:44px 1fr auto;align-items:center;gap:10px;margin-bottom:14px}.topbar strong{text-align:center;font-size:18px}.replace-button{padding:10px 12px;border-radius:14px;background:#ece9ff;color:#5f51dc;font-weight:800}.image-card{overflow:hidden;width:100%;border-radius:26px;background:#e9ebf1;box-shadow:0 13px 38px rgba(36,54,87,.1)}.image-stage{position:relative;width:100%;line-height:0}.selected-image{display:block;width:100%;min-height:280px;max-height:calc(100dvh - 110px);object-fit:contain;background:#e9ebf1}.annotation-layer{position:absolute;z-index:2;inset:0;overflow:hidden;pointer-events:none}.word-label{position:absolute;z-index:3;overflow:hidden;max-width:180px;padding:8px 13px;transform:translate(-50%,-50%);border:1px solid rgba(255,255,255,.52);border-radius:999px;background:rgba(26,29,40,.76);box-shadow:0 3px 10px rgba(0,0,0,.18);color:#fff;font-size:18px;font-weight:800;line-height:1.25;text-overflow:ellipsis;white-space:nowrap;pointer-events:auto;animation:label-in .3s ease-out both}.word-label.long{max-width:190px;font-size:15px}.word-label:active{background:rgba(104,87,245,.94);transform:translate(-50%,-50%) scale(.95)}.learning-tip{position:absolute;z-index:5;top:15px;left:50%;padding:10px 14px;transform:translateX(-50%);border:1px solid rgba(255,255,255,.62);border-radius:999px;background:rgba(255,255,255,.92);box-shadow:0 6px 20px rgba(24,28,43,.16);color:#3a4160;font-size:14px;font-weight:800;line-height:1;white-space:nowrap}.image-state{position:absolute;z-index:4;top:50%;left:50%;display:flex;width:min(82%,340px);padding:22px 24px;transform:translate(-50%,-50%);flex-direction:column;align-items:center;border:1px solid rgba(255,255,255,.55);border-radius:20px;background:rgba(25,29,42,.8);box-shadow:0 8px 24px rgba(0,0,0,.2);color:#fff;line-height:1.45;text-align:center}.image-state strong{font-size:18px;line-height:1.35}.image-state small{margin-top:7px;color:rgba(255,255,255,.73);font-size:13px;line-height:1.5}.spinner{width:31px;height:31px;margin-bottom:12px;border:4px solid rgba(255,255,255,.28);border-top-color:#fff;border-radius:50%;animation:spin .8s linear infinite}.state-icon{display:grid;width:39px;height:39px;margin-bottom:10px;place-items:center;border:2px solid rgba(255,255,255,.72);border-radius:50%;font-size:20px;line-height:1}.ghost-button{margin-top:15px;padding:9px 18px;border:1px solid rgba(255,255,255,.42);border-radius:14px;background:transparent;color:#fff;font-weight:800;line-height:1.2}.ghost-button.solid{background:#fff;color:#5f51dc}.lost-card{margin-top:15vh;padding:36px 26px;border-radius:26px;background:#fff;text-align:center;box-shadow:0 12px 36px rgba(36,54,87,.07)}.lost-card>span{font-size:38px;color:#7567ed}.lost-card h1{font-size:24px}.lost-card p{color:#858e9e;line-height:1.6}@keyframes spin{to{transform:rotate(360deg)}}@keyframes label-in{from{opacity:0}to{opacity:1}}@media(max-width:340px){.result-page{padding-inline:9px}.word-label{max-width:150px;font-size:16px}.word-label.long{max-width:158px;font-size:13px}.image-state{padding:18px}}@media(min-width:800px){.result-page{padding:22px}.selected-image{max-height:calc(100dvh - 130px)}}
</style>
