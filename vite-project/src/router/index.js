import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Header from "../components/Header.vue";
const routes = [
  {
    path: '/',
    component: Header,
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