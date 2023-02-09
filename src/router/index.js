import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import HomePage from "../components/HomePage";
import Product from "../pages/Product.vue";
import PaymentPage from "../components/PaymentPage.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/productlist",
    name: "productlist",
    component: HomeView,
  },
  {
    path: "/",
    name: "homepage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: HomePage,
  },
  {
    path: "/product/:id",
    component: Product,
    name: "product",
    props: true,
  },
  {
    path: "/payment",
    name: "payment",
    component: PaymentPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
