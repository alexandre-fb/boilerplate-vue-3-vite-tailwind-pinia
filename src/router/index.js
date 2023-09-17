import { createRouter, createWebHistory } from 'vue-router'

const Example = () => import('../views/ExampleView/index.vue')
const Home = () => import('../views/Home/index.vue')

export const routes = [
    {
        path: '/exemplo',
        name: 'example',
        component: Example,
    },
    {
        path: '/',
        name: 'home',
        component: Home,
        redirect: '/exemplo'
    }
]

const router = createRouter({
    history: createWebHistory('/'),
    routes
})

export default router

