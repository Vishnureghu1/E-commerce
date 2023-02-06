<template>
  <div id="app">
    <div class="sticky-top">
      <nav-bar />
      <notification-list />
    </div>
    <nav>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </nav>
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/Nav-bar.vue";
import NotificationList from "./components/NotificationList.vue";
export default {
  components: {
    NavBar,
    NotificationList,
  },
  created() {
    this.$store.dispatch("getProducts");
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url("../src/assets/shop-online-buying-concept-mobile-app-shopping-cart-with-shopping-bag-floating-purple-pastel-background-discount-promotion-sale-banner-buy-sell-website-3d-render-illustration_598821-1262.avif");
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: cadetblue;
}
</style>
