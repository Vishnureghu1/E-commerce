<template>
  <div class="card card-gape" style="width: 18rem">
    <img :src="image" class="card-img-top" alt="sample" />
    <div class="card-body">
      <h5 class="card-title">
        <router-link :to="{ name: 'product', params: { id: productId } }">{{
          productTitle
        }}</router-link>
      </h5>
      <strong>${{ producPrice }}</strong>
      <p class="card-text">
        {{ productDescription }}
      </p>
      <a href="#" class="btn btn-primary">Add to Cart</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-card",
  props: ["products"],
  data() {
    return {
      image: "",
      productId: null,
      productTitle: "",
      producPrice: "",
      productDescription: "",
    };
  },
  created() {
    this.getProductsRelatedData();
  },
  methods: {
    getProductsRelatedData() {
      let getData = this.products.products;
      getData.forEach((element) => {
        this.image = element.images[1];
        this.productId = element.id;
        this.productTitle = element.title;
        this.producPrice = element.price;
        this.productDescription = element.description;
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
