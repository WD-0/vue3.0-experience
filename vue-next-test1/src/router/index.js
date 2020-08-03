import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/test",
    name: "Test",
    redirect: { name: 'BidirectionalBinding' },
    component: () => import("../views/Test.vue"),
    children: [
      {
        path: "bidirectional-binding",
        name: "BidirectionalBinding",
        component: () => import("../views/BidirectionalBinding.vue"),
      },
      {
        path: "computing-monitoring",
        name: "ComputingMonitoring",
        component: () => import("../views/ComputingMonitoring.vue"),
      },
      {
        path: "vuex",
        name: "Vuex",
        component: () => import("../views/Vuex.vue"),
      },
      {
        path: "cycle",
        name: "Cycle",
        component: () => import("../views/Cycle.vue"),
      },
      {
        path: "Component-value-transfer",
        name: "ComponentValueTransfer",
        component: () => import("../views/FarentComponent.vue"),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
