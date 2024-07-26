import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("../pages/home/Home.vue")
    },
    {
        path: "/productos",
        component: () => import("../pages/productos/Productos.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;