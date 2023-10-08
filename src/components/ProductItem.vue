<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col><img src="../assets/img-2.png" /></b-col>
        <div class="w-100"></div>
        <b-col
          ><h3>{{ product.name }}</h3>
          <p>Price: {{ product.price }} USD</p></b-col
        >
      </b-row>
    </b-container>
  </div>
  <!-- <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
    <div class="featured__item">
      <div>
        <img src="./logo.png" alt="" />
      </div>
      <div class="featured__item__text">
        <h6><a href="#">Crab Pool Security</a></h6>
        <h5>$30.00</h5>
      </div>
    </div>
  </div> -->
  <!-- <div class="product-item">
    <h3>{{ product.name }}</h3>
    <p>Price: {{ product.price }} USD</p>
  </div> -->
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.product-item {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px;
}
</style>
