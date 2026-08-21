import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ResultView from "../views/ResultView.vue";
import WordView from "../views/WordView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/result", name: "result", component: ResultView },
    { path: "/word/:word", name: "word", component: WordView }
  ],
  scrollBehavior: () => ({ top: 0 })
});

export default router;
