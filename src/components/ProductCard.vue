<template>
  <div class="demo">
    <div v-for="product in products" :key="product.id">
      <div class="card" style="width: 18rem">
        <img
          class="card-img-top"
          :src="product.images[1]"
          alt="Card image cap"
        />
        <div class="card-body">
          <h5 class="card-title">{{ product.title }}</h5>
          <p class="card-text">
            {{ product.description }}
          </p>
          <a href="#" class="btn btn-primary">Add to Cart</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-card",
  props: ["products"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.demo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100vh;
}
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
