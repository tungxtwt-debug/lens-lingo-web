<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import backgroundImage from "../assets/home-bg.jpg";
import { LANGUAGES } from "../config/app.js";
import { appState, setImage, setLanguage } from "../state/appState.js";
import { prepareImage } from "../services/imageService.js";

const router = useRouter();
const albumInput = ref(null);
const cameraInput = ref(null);
const preparing = ref(false);
const errorMessage = ref("");
const selectedLanguage = computed(() => LANGUAGES.find((item) => item.code === appState.language) || LANGUAGES[0]);

async function chooseFile(event) {
  const file = event.target.files?.[0];
  event.target.value = "";
  if (!file) return;
  preparing.value = true;
  errorMessage.value = "";
  try {
    setImage(await prepareImage(file));
    await router.push("/result");
  } catch (error) {
    errorMessage.value = error.message || "无法读取这张图片。";
  } finally {
    preparing.value = false;
  }
}
</script>

<template>
  <main class="home-page page content-shell" :style="{ '--home-image': `url(${backgroundImage})` }">
    <div class="overlay"></div>
    <header class="brand-block">
      <div class="brand-mark"><span></span></div>
      <div>
        <div class="brand-title-row"><strong>看见单词</strong><span>LENS LINGO</span></div>
        <p>拍下身边物品，学习它的外语表达</p>
      </div>
    </header>

    <section class="hero">
      <div class="hero-copy">
        <span>今日小发现</span>
        <h1>今天背单词了吗？</h1>
        <p>看到生活里的东西，顺手学一个词。</p>
      </div>
      <div class="hero-actions">
        <button class="camera-button" :disabled="preparing" @click="cameraInput.click()">
          <span class="camera-icon"><i></i></span>
          <strong>{{ preparing ? '正在准备图片…' : '拍照学单词' }}</strong><b>›</b>
        </button>
        <button class="album-button" :disabled="preparing" @click="albumInput.click()"><span>▧</span>从相册或电脑选择</button>
        <input ref="cameraInput" class="sr-only" type="file" accept="image/*" capture="environment" @change="chooseFile" />
        <input ref="albumInput" class="sr-only" type="file" accept="image/jpeg,image/png,image/webp" @change="chooseFile" />
        <p v-if="errorMessage" class="error-note" role="alert">{{ errorMessage }}</p>
      </div>
    </section>

    <section class="language-section">
      <label for="language">正在学习</label>
      <div class="language-card">
        <span class="flag">{{ selectedLanguage.flag }}</span>
        <div><strong>{{ selectedLanguage.name }}</strong><small>点击切换学习语言</small></div>
        <select id="language" :value="appState.language" @change="setLanguage($event.target.value)">
          <option v-for="language in LANGUAGES" :key="language.code" :value="language.code">{{ language.name }}</option>
        </select>
        <span class="switch-copy">切换</span>
      </div>
    </section>
    <footer><i></i><span>网页版会直接在当前浏览器中识别图片。图片不会上传到服务器，也不会发送给第三方 AI API。</span></footer>
  </main>
</template>

<style scoped>
.home-page { position: relative; overflow: hidden; display: flex; padding: calc(18px + env(safe-area-inset-top)) 22px calc(14px + env(safe-area-inset-bottom)); flex-direction: column; background: #29231f var(--home-image) center/cover; color: #fff; }
.overlay { position: absolute; inset: 0; background: linear-gradient(180deg,rgba(24,19,17,.5),rgba(28,22,19,.16) 38%,rgba(20,17,16,.78)); }
.brand-block,.hero,.language-section,footer { position: relative; z-index: 1; }
.brand-block { display:flex; align-items:center; gap:12px; }
.brand-mark { position:relative; width:48px; height:48px; flex:none; border-radius:16px; background:linear-gradient(145deg,#7769ee,#554bc8); box-shadow:0 8px 20px rgba(82,72,191,.25); }
.brand-mark span { position:absolute; width:21px; height:21px; left:13px; top:12px; border:4px solid #fff; border-radius:50%; }
.brand-mark span::after { content:""; position:absolute; width:9px; height:4px; right:-7px; bottom:-4px; transform:rotate(45deg); border-radius:5px; background:#fff; }
.brand-title-row { display:flex; align-items:baseline; gap:10px; flex-wrap:wrap; }
.brand-title-row strong { font-size:25px; font-weight:900; }
.brand-title-row span { color:rgba(255,255,255,.72); font-size:11px; font-weight:850; letter-spacing:1.5px; }
.brand-block p { margin:3px 0 0; color:rgba(255,255,255,.72); font-size:14px; }
.hero { display:flex; min-height:430px; flex:1; flex-direction:column; }
.hero-copy { padding:58px 6px 0; text-shadow:0 2px 12px rgba(21,29,35,.25); }
.hero-copy>span { font-size:13px; font-weight:800; letter-spacing:1.5px; }
.hero-copy h1 { margin:10px 0 0; font-size:34px; line-height:1.22; letter-spacing:-1px; }
.hero-copy p { margin:10px 0 0; color:rgba(255,255,255,.88); font-size:16px; }
.hero-actions { margin-top:auto; padding-bottom:12px; }
.camera-button,.album-button { display:flex; width:100%; align-items:center; transition:.14s ease; }
.camera-button { height:78px; padding:0 16px; border-radius:23px; background:rgba(255,255,255,.97); color:#293241; box-shadow:0 10px 26px rgba(13,23,30,.22); }
.camera-button:active,.album-button:active { transform:scale(.98); }
.camera-icon { position:relative; width:44px; height:38px; margin-right:14px; border-radius:12px; background:#f2bf50; }
.camera-icon::before { content:""; position:absolute; width:20px; height:6px; left:12px; top:-5px; border-radius:5px 5px 0 0; background:#f2bf50; }
.camera-icon i { position:absolute; width:19px; height:19px; left:12px; top:10px; border:4px solid #fff; border-radius:50%; }
.camera-button strong { flex:1; font-size:22px; text-align:left; }
.camera-button b { color:#6c60d6; font-size:38px; font-weight:300; }
.album-button { justify-content:center; height:54px; margin-top:10px; border:1px solid rgba(255,255,255,.35); border-radius:18px; background:rgba(20,28,34,.3); color:#fff; font-size:15px; font-weight:800; }
.album-button span { margin-right:9px; font-size:21px; }
.error-note { margin:10px 4px 0; padding:10px 12px; border-radius:12px; background:rgba(124,36,48,.72); font-size:13px; line-height:1.4; }
.language-section>label { display:block; margin:0 4px 8px; color:rgba(255,255,255,.74); font-size:14px; font-weight:800; }
.language-card { position:relative; display:flex; min-height:82px; padding:11px 15px; align-items:center; border:1px solid rgba(255,255,255,.25); border-radius:23px; background:rgba(255,255,255,.9); color:#252d3d; box-shadow:0 9px 28px rgba(15,12,11,.16); }
.flag { width:52px; margin-right:12px; font-size:31px; text-align:center; }
.language-card div { display:flex; min-width:0; flex:1; flex-direction:column; }
.language-card strong { font-size:20px; }.language-card small { margin-top:3px; color:#999fa9; font-size:13px; }
.language-card select { position:absolute; inset:0; width:100%; opacity:0; cursor:pointer; }
.switch-copy { padding:6px 10px; border-radius:11px; background:#f0edfc; color:#685cd0; font-size:13px; font-weight:800; }
footer { display:flex; justify-content:center; align-items:center; gap:8px; margin-top:13px; color:rgba(255,255,255,.67); font-size:12px; }
footer i { width:7px; height:7px; border-radius:50%; background:#55c89f; box-shadow:0 0 0 4px rgba(225,245,237,.9); }
@media (max-width:340px) { .home-page{padding-inline:16px}.hero{min-height:380px}.hero-copy{padding-top:38px}.hero-copy h1{font-size:30px}.camera-button{height:72px} }
@media (min-width:600px) { .home-page{padding-inline:34px}.hero-copy{padding-top:80px}.hero-copy h1{font-size:42px}.hero{min-height:500px} }
</style>
