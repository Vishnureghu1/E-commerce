<template>
  <div>
    <product-card :products="getProducts" />
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
export default {
  components: { ProductCard },
  name: "product-list",
  computed: {
    getProducts() {
      return this.$store.state.products;
    },
  },
};
</script>

<style></style>
