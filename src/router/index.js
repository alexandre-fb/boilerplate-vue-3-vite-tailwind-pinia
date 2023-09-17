import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('../views/Home/index.vue')

export const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router

