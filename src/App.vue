<template>
  <div id="app">
    <header-item></header-item>
    <router-view></router-view>

    <!-- <product-list></product-list> -->
    <!-- <router-link to="/"></router-link> -->
  </div>
</template>

//
<script>
// import HeaderItemVue from './components/HeaderItem.vue';
// import ProductList from "./components/ProductList.vue";
import HeaderItem from "./components/HeaderItem.vue";

export default {
  components: {
    // "product-list": ProductList,
    HeaderItem: HeaderItem,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
