<template>
  <div>
    <div style="min-width: 320px" aria-labelledby="triggerId">
      <div v-for="item in cart" :key="item.product.id">
        <div class="px-2 d-flex justify-content-between">
          <div>
            <strong>{{ item.product.title }}</strong>
            <br />{{ item.quantity }} x $ {{ item.product.price }}
          </div>
          <div>
            <button
              class="btn btn-secondary"
              @click.prevent="removeProductFromCart(item.product)"
            >
              remove
            </button>
          </div>
        </div>
      </div>

      <hr />

      <div class="d-flex justify-content-between">
        <span>Total: $ {{ cartTotalPrice }}</span>
        <a href="#" @click.prevent="clearCartItems()">Clear Cart</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "mini-cart",

  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["cartTotalPrice"]),
  },
  methods: {
    removeProductFromCart(product) {
      this.$store.dispatch("removeProductFromCart", product);
    },
    clearCartItems() {
      this.$store.dispatch("clearCartItems");
    },
  },
};
</script>

<style></style>
