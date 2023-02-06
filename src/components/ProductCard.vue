<template>
  <div class="row">
    <div
      v-for="product in products"
      :key="product.id"
      class="card col-3 mt-5"
      style="width: 18rem; margin-left: 85px"
    >
      <img class="card-img-top" :src="product.images[0]" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">
          <router-link :to="{ name: 'product', params: { id: product.id } }">{{
            product.title
          }}</router-link>
        </h5>
        <strong>${{ product.price }}</strong>
        <p class="card-text">
          {{ product.description }}
        </p>
        <div>
          <button class="btn btn-primary mb-0" @click="addToCart(product.id)">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-card",
  props: ["products"],

  methods: {
    addToCart(productId) {
      this.$store.dispatch("addProductToCart", {
        product: productId,
        quantity: 1,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card-gape {
  margin: 10px;
}
</style>
