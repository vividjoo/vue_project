import { createWebHistory, createRouter } from "vue-router";

import FirstVue from "../views/FirstVue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // path별 component를 추가한다.
    { path: "/first", name: "first", component: FirstVue },
  ],
});

export default router;
