import MainView from "@/views/MainView.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'MainView',
      path: '/',
      component: MainView
    }
  ]
})

export default router;