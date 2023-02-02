<template>
  <div class="home">
    <product-list />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {
    ProductList,
  },
};
</script>
