<template>
  <div>
    <!-- <button @click="Home()">back to hom</button> -->
    <product-item
      v-for="sanpham in sanphams"
      :key="sanpham.id"
      :product="sanpham"
    ></product-item>
  </div>
</template>

<script>
import ProductItems from "./ProductItem.vue";

export default {
  components: {
    "product-item": ProductItems,
  },
  data() {
    return {
      sanphams: [
        { id: 1, name: "Product 1", price: 20 },
        { id: 2, name: "Product 2", price: 30 },
        { id: 3, name: "Product 3", price: 25 },
        // Thêm các sản phẩm khác ở đây
      ],
    };
  },
  methods: {
    Home() {
      this.$router.push("/");
    },
  },
};
</script>
