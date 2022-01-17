import { createRouter, createWebHistory } from "vue-router";

const getHome = () => import("views/HomeView.vue");
const getAbout = () => import("views/AboutView.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: getHome,
  },
  {
    path: "/about",
    name: "About",
    component: getAbout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
