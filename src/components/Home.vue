<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <div class="content">
      <div class="section pt-0" id="about">
        <div class="container text-center">
          <div class="about">
            <div class="carousel-item active">
              <div class="taital_main">
                <div class="taital_left">
                  <h1 class="banner_taital">Deni Product For Skin</h1>
                </div>
                <div class="taital_right">
                  <div class="product_img">
                    <img src="../assets/product-img.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import Headers from "./HeaderItem.vue";
export default {
  components: {
    // "header-header": Headers,
  },
};
</script>
<style scoped>
.content {
  position: relative;
  background: url(../assets/banner-bg.png) no-repeat;
  height: 100vh;
  background-size: cover;
  background-position: center;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-bottom: 4rem;
}
.product_img img {
  width: 700px;
  padding-top: 3rem;
}
h1.banner_taital {
  padding-top: 3rem;
}
</style>
