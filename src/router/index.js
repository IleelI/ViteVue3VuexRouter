import { createRouter, createWebHistory } from "vue-router";

const getHome = () => import('views/Home.vue');
const getAbout = () => import('views/About.vue');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: getHome
    },
    {
        path: '/about',
        name: 'About',
        component: getAbout,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;