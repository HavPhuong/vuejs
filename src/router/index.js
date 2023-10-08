import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home";
import ProductList from "../components/ProductList";

Vue.use(VueRouter);

const routes = [
  {
    path: "/productList",
    name: "ProductList",
    component: ProductList,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/productList",
  //   name: "ProductList",
  //   component: ProductList,
  // },
];

const router = new VueRouter({
  routes,
  mode: "history",
});
// router.replace({ name: "ProductList" });
export default router;
