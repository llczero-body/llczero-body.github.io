import { createRouter, createWebHistory } from "vue-router";
// 首页
const Home = () => import(/* webpackChunkName: "home" */ "../pages/home/home.vue");
// 博客
const Blog = () => import(/* webpackChunkName: "blog" */ "../pages/blog/blog.vue");
// 博客详情
const blogDetails = () => import(/* webpackChunkName: "blog" */ "../pages/blog/blogDetails.vue");
const routes = [
    { path: "/", name: "Home", component: Home, title: "首页" },
    { path: "/Blog", name: "Blog", component: Blog, title: "博客" },
    { path: "/blog-details/:id", name: "blogDetails", component: blogDetails, title: "博客详情" },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
