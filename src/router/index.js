import { createRouter, createWebHistory } from 'vue-router'
// import type { RouteRecordRaw } from 'vue-router'
// 首页
const Home = () => import( /* webpackChunkName: "home" */ '../pages/home.vue')
// 博客
const Blog = () => import( /* webpackChunkName: "blog" */ '../pages/blog.vue')

const routes = [
    { path: '/', name: 'Home', component: Home, title: '首页' },
    { path: '/Blog', name: 'Blog', component: Blog, title: '博客' },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
