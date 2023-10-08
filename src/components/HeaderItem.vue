<template>
  <div class="header">
    <div class="menu">
      <div class="logo">
        <h2>DENI</h2>
      </div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/productList">Product</router-link></li>

        <li><a>About</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    Product() {
      this.$router.push("/productList");
    },
    Home() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  box-sizing: border-box;
}
.header {
  /* position: relative; */
  background: white;
  padding: 10px;
}
.header .logo img {
  width: 100px;
}
.header .menu {
  max-width: 1200px;
  /* margin: auto; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 20px;
}
.menu ul {
  display: flex;
}
.menu ul li {
  list-style: none;
  margin-left: 7px;
}
.menu ul li a {
  text-decoration: none;
  color: black;
  font-size: 18px;
  /* font-weight: 600px; */
  padding: 10px 20px;
}
.menu ul li a:hover {
  /* background: yellow; */
  color: rgb(228, 67, 67);
  padding: 1rem;
}
</style>
