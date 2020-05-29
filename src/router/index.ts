import Vue from "vue";
import VueRouter from "vue-router";
import { auth } from "@/plugins/firebase";
import NotFound from "../views/NotFound.vue";
import Home from "../views/Home.vue";
import Blog from "../views/blog/Blog.vue";
import BlogIndex from "../views/blog/Index.vue";

Vue.use(VueRouter);

function loadView(view: string) {
  return () => import(`@/views/${view}.vue`);
}

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
    component: loadView('Login')
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
        path: 'result',
        name: "BlogResult",
        component: loadView('blog/Result')
      },
      {
        path: ":id",
        name: "BlogShow",
        component: loadView('blog/Show')
      }
    ]
  },
  {
    path: "/admin",
    component: loadView('admin/Admin'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: "AdminTop",
        component: loadView('admin/Top')
      },
      {
        path: 'post',
        name: "AdminPost",
        component: loadView('admin/Post')
      },
      {
        path: 'post_new',
        name: "AdminPostNew",
        component: loadView('admin/PostNew')
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
