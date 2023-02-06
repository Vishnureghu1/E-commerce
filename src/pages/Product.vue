<template>
  <div>
    <div
      v-if="procuct"
      class="card-10"
      style="width: 510px; height: auto; margin-left: 40px"
    >
      <div class="row" style="background-color: aliceblue; border-radius: 1rem">
        <div class="col-sm-6">
          <img class="card-img" :src="procuct.images[0]" alt="Card image" />
        </div>
        <div class="col-sm-6">
          <div class="card-body-right">
            <h4 class="card-title">{{ procuct.title }}</h4>
            <h1>$ {{ procuct.price }}</h1>
            <input
              type="text"
              class="text-center col-3 mr-2 p-2"
              v-model.number="quantity"
            />
            <button
              class="btn btn-primary"
              style="margin-left: 9px"
              @click="addToCart(procuct.id)"
            >
              Add to Cart
            </button>
            <p class="mt-2">
              {{ procuct.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-list",
  props: ["id"],
  data() {
    return {
      quantity: 1,
    };
  },
  computed: {
    procuct() {
      return this.$store.state.product;
    },
  },
  created() {
    this.$store.dispatch("getProduct", this.id);
  },
  mounted() {
    this.procuct;
  },
  methods: {
    addToCart(productId) {
      this.$store.dispatch("addProductToCart", {
        product: productId,
        quantity: this.quantity,
      });
    },
  },
};
</script>

<style></style>
