<template>
  <div class="row mt-5">
    <div class="col-4">
      <img alt="sampple" class="w-100" />
    </div>
    <div class="col-8">
      <h1>Product title</h1>
      <h3>$34</h3>

      <input type="text" class="text-center col-1 mr-2 p-1" />
      <button class="btn btn-primary">Add to Cart</button>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia
        voluptates cumque reprehenderit eaque, saepe quos placeat, vitae,
        consequatur fuga nobis excepturi tempore perferendis nisi iste. Itaque,
        minima! Natus, necessitatibus facere?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-page",
  props: ["id"],
  mounted() {
    console.log("ssssssssssss", this.id);
    this.$store.dispatch("getProduct", this.id);
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  created() {
    this.getProdData;
  },
  methods: {
    getProdData() {
      this.product;
      console.log("getProdData", this.product);
    },
  },
};
</script>

<style></style>
