<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container">
        <div class="nav navbar-nav">
          <router-link to="/" class="nav-tem nav-link active">Home</router-link>
          <router-link to="/productlist" class="nav-tem nav-link active"
            >Product</router-link
          >
        </div>

        <div>
          <div class="dropdown open">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="triggerId"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Cart
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navbar-page",
};
</script>

<style></style>
