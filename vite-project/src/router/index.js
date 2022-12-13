import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/homeview.vue";
import Movie from "../views/movie.vue";

const routes = [
  {
    path: '/',
    component:Home,
  },
  {
    path: '/Login',
    component:Login,
  },
  {
    path: '/Movie',
    component: Movie,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;