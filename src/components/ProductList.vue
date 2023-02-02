<template>
  <div class="d-flex align-items-stretch flex-wrap justify-content-center">
    <product-card
      v-for="products in getProducts.products"
      :key="products.id"
      :products="getProducts"
    />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  components: { ProductCard },
  name: "product-list",
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    getProducts() {
      return this.$store.state.products;
    },
  },
};
</script>

<style></style>
