<script setup>
import { computed, onBeforeUnmount, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { appState, getSelectedObject } from "../state/appState.js";
import { buildWordDetail } from "../services/wordService.js";
import { createObjectCrop } from "../services/imageService.js";
import { speak, stopSpeaking } from "../services/ttsService.js";

const route = useRoute();
const router = useRouter();
const cropImage = ref("");
const pronunciationState = ref("idle");
const pronunciationError = ref("");
const detectedObject = computed(() => getSelectedObject());
const detail = computed(() => buildWordDetail(route.params.word, appState.language, detectedObject.value));
const stateAvailable = computed(() => Boolean(appState.imageUrl && detail.value));

async function refreshCrop() {
  cropImage.value = "";
  if (!appState.imageUrl || !detail.value?.boundingBox) return;
  try { cropImage.value = await createObjectCrop(appState.imageUrl, detail.value.boundingBox); } catch { cropImage.value = ""; }
}
async function play() {
  pronunciationError.value = "";
  try { await speak(detail.value.displayName, detail.value.language, (state) => { pronunciationState.value = state; }); }
  catch (error) { pronunciationError.value = error.message || "发音失败，请重试。"; }
}
watch(
  () => route.params.word,
  async () => {
    stopSpeaking();
    pronunciationState.value = "idle";
    pronunciationError.value = "";
    await refreshCrop();
    window.scrollTo({ top: 0, behavior: "instant" });
  },
  { immediate: true },
);
onBeforeUnmount(stopSpeaking);
</script>

<template>
  <main class="detail-page page content-shell">
    <div class="detail-topbar"><button class="back-button" aria-label="返回识别结果" @click="router.back()">‹</button><span>单词详情</span></div>
    <section v-if="!stateAvailable" class="lost-card"><span>◌</span><h1>学习内容已失效</h1><p>刷新页面会清除本地图片和识别状态，请重新选择一张图片。</p><button class="primary-button" @click="router.replace('/')">返回首页</button></section>
    <template v-else>
      <section class="hero-card" :class="{'with-image':cropImage}"><img v-if="cropImage" :src="cropImage" :alt="detail.displayName"/><div class="hero-copy"><span class="language-mark">{{ detail.language }}</span><h1>{{ detail.displayName }}</h1><p v-if="detail.pronunciation" class="pronunciation">{{ detail.pronunciation }}</p><button class="speak-button" @click="play">🔊 {{ pronunciationState==='preparing'?'准备发音…':pronunciationState==='playing'?'播放中…':'听发音' }}</button><small v-if="pronunciationError" class="tts-error">{{ pronunciationError }}</small></div></section>
      <section class="info-card"><div><span>词性</span><strong>{{ detail.partOfSpeech }}</strong></div><hr/><div><span>释义</span><b>{{ detail.definitionZh }}</b><small>{{ detail.helperLabel }} · {{ detail.helperWord }}</small></div></section>
      <section v-if="detail.examples.length" class="examples-section"><h2>例句</h2><p>{{ detail.exampleHint }}</p><article v-for="(example,index) in detail.examples.slice(0,2)" :key="example.sentence" class="example-card"><span>{{ index+1 }}</span><div><strong>{{ example.sentence }}</strong><p>{{ example.translation }}</p></div></article></section>
      <section v-if="detail.knowledge" class="knowledge-card">
        <header><h2>学习相关词</h2><span>本地词库</span></header>
        <div v-if="detail.knowledge.relatedLearningWords.length" class="related-list"><button v-for="item in detail.knowledge.relatedLearningWords" :key="item.word" @click="router.push(`/word/${encodeURIComponent(item.word)}`)"><span><strong>{{ item.word }}</strong><small>{{ item.meaning }}</small></span><b>›</b></button></div>
        <hr v-if="detail.knowledge.relatedLearningWords.length"/><h3>WordNet 词汇知识</h3>
        <div v-if="detail.knowledge.synonyms.length" class="knowledge-block"><span>近义词</span><p>{{ detail.knowledge.synonyms.join(' · ') }}</p></div>
        <div v-if="detail.knowledge.hypernyms.length" class="knowledge-block"><span>属于</span><p>{{ detail.knowledge.hypernyms.join(' · ') }}</p></div>
        <div v-if="detail.knowledge.hyponyms.length" class="knowledge-block"><span>具体包括</span><p>{{ detail.knowledge.hyponyms.join(' · ') }}</p></div>
        <hr/><div class="knowledge-block"><span>WordNet 英文解释</span><p class="definition-en">{{ detail.knowledge.definition }}</p></div>
      </section>
    </template>
  </main>
</template>

<style scoped>
.detail-page{padding:14px 18px calc(48px + env(safe-area-inset-bottom));background:#f7f8fc}.detail-topbar{display:flex;align-items:center;gap:14px;margin-bottom:14px;font-weight:850}.detail-topbar span{font-size:18px}.hero-card{position:relative;overflow:hidden;padding:36px 27px 28px;border-radius:30px;background:linear-gradient(145deg,#6857f5,#7567ed 58%,#5e55dc);box-shadow:0 18px 46px rgba(91,76,218,.23);color:#fff}.hero-card.with-image{height:310px;padding:0;background:#39374a}.hero-card>img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.hero-copy{position:relative;z-index:1}.with-image .hero-copy{display:flex;height:100%;padding:27px;flex-direction:column;align-items:flex-start;justify-content:flex-end;background:linear-gradient(180deg,rgba(23,24,35,.06) 12%,rgba(24,22,40,.82))}.language-mark{padding:6px 10px;border-radius:11px;background:rgba(255,255,255,.16);color:#e8e5ff;font-size:12px;font-weight:850;text-transform:uppercase}.hero-card h1{max-width:100%;margin:18px 0 0;font-size:46px;line-height:1.15;overflow-wrap:anywhere}.pronunciation{margin:7px 0 0;color:#e0dcff;font-size:18px}.speak-button{min-width:146px;height:54px;margin-top:23px;padding:0 15px;border-radius:18px;background:#fff;color:#5143cf;font-weight:850}.tts-error{display:block;margin-top:9px;color:#fff2c4;line-height:1.4}.info-card,.knowledge-card{margin-top:18px;padding:23px;border:1px solid #e9ecf3;border-radius:24px;background:#fff;box-shadow:0 9px 28px rgba(36,54,87,.05)}.info-card div{display:flex;flex-direction:column;align-items:flex-start}.info-card span,.knowledge-block>span{color:#969faf;font-size:14px;font-weight:700}.info-card strong{margin-top:6px;color:#6253e6;font-size:19px}.info-card b{margin-top:6px;color:#273249;font-size:21px;line-height:1.5}.info-card small{margin-top:11px;padding:6px 9px;border-radius:10px;background:#f1effd;color:#695ae6;font-weight:700}.info-card hr,.knowledge-card hr{height:1px;margin:18px 0;border:0;background:#eef0f5}.examples-section{margin-top:28px}.examples-section h2{margin:0 0 5px;font-size:25px}.examples-section>p{margin:0 0 15px;color:#98a1b2;font-size:14px}.example-card{display:flex;margin-bottom:12px;padding:20px 18px;border:1px solid #e9ecf3;border-radius:21px;background:#fff}.example-card>span{display:grid;width:35px;height:35px;margin-right:14px;flex:none;place-items:center;border-radius:11px;background:#efecff;color:#6657ed;font-weight:850}.example-card strong{color:#263149;font-size:18px;line-height:1.55}.example-card p{margin:7px 0 0;color:#858e9e;line-height:1.55}.knowledge-card header{display:flex;align-items:center;justify-content:space-between;margin-bottom:17px}.knowledge-card h2{margin:0;font-size:20px}.knowledge-card header>span{padding:5px 9px;border-radius:9px;background:#f1effd;color:#695ae6;font-size:12px;font-weight:800}.related-list{display:flex;flex-direction:column;gap:9px}.related-list button{display:flex;min-height:60px;padding:11px 13px;align-items:center;justify-content:space-between;border-radius:15px;background:#f7f6fe;text-align:left}.related-list button>span{display:flex;flex-direction:column}.related-list strong{color:#4f43bb;font-size:18px}.related-list small{margin-top:2px;color:#858e9e}.related-list button>b{color:#a59ee8;font-size:29px}.knowledge-card h3{margin:0 0 16px;color:#616b7d;font-size:16px}.knowledge-block+.knowledge-block{margin-top:15px}.knowledge-block p{margin:6px 0 0;color:#6657d8;font-weight:650;line-height:1.55}.knowledge-block .definition-en{color:#39445b;font-weight:400}.lost-card{margin-top:12vh;padding:36px 24px;border-radius:26px;background:#fff;text-align:center;box-shadow:0 12px 36px rgba(36,54,87,.07)}.lost-card>span{font-size:38px;color:#7567ed}.lost-card h1{font-size:23px}.lost-card p{color:#858e9e;line-height:1.6}@media(max-width:340px){.detail-page{padding-inline:13px}.hero-card{padding-inline:22px}.hero-card h1{font-size:39px}.with-image .hero-copy{padding:22px}.example-card{padding-inline:14px}}@media(min-width:800px){.detail-page{padding:24px 30px 60px}.hero-card.with-image{height:390px}.hero-card h1{font-size:58px}}
</style>
