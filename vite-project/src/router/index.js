import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/homeview.vue";

const routes = [
  {
    path: '/',
    component:Home,
  },
  {
    path: '/Login',
    component:Login,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;