import { createRouter, createWebHashHistory } from "vue-router";
import Cart from "../components/Cart.vue";

const routes = [
  {
    path: "/cart",
    component: Cart,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
