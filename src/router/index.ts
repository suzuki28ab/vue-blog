import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import BlogShow from "../views/BlogShow.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: NotFound
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/blog/:id",
    name: "BlogShow",
    component: BlogShow
  },
  {
    path: "/admin/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
