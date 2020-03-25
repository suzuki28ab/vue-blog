import Vue from "vue";
import VueRouter from "vue-router";
import { auth } from "@/plugins/firebase";
import NotFound from "../views/NotFound.vue";
import Home from "../views/Home.vue";
import Blog from "../views/blog/Blog.vue";
import BlogShow from "../views/blog/Show.vue";
import BlogIndex from "../views/blog/Index.vue";
import Admin from "../views/admin/Admin.vue";
import AdminTop from "../views/admin/Top.vue";
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
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/blog",
    component: Blog,
    children: [
      {
        path: '',
        name: "BlogIndex",
        component: BlogIndex
      },
      {
        path: ":id",
        name: "BlogShow",
        component: BlogShow
      }
    ]
  },
  {
    path: "/admin",
    component: Admin,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: "AdminTop",
        component: AdminTop
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    auth.onAuthStateChanged((user) => {
      if (user) {
        next()
      } else {
        next({ path: '/login' })
      }
    })
  } else {
    next()
  }
});

export default router;
