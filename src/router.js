import { createRouter, createWebHistory } from "vue-router";
import NavBarLayout from "./layouts/NavBarLayout.vue";
import HomePage from "./views/HomePage.vue";

const routes = [
  {
    path: "/",
    redirect: "home",
    component: NavBarLayout,
    children: [
      {
        path: "home",
        name: "home",
        component: HomePage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
