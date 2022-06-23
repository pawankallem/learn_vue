<template>
  <header>
    <router-link to="#"> Home </router-link>
    <router-link to="#"> Add Item </router-link>
    <router-link to="#"> Updata Item </router-link>
    <router-link to="#"> Logout </router-link>
  </header>
</template>

<script>
export default {
  data() {},
};
</script>

<style scoped>
header {
  display: flex;
  background: black;
  height: 40px;
  padding: 10px;
  font-size: 120%;
}

a {
  text-decoration: none;
  color: skyblue;
  cursor: pointer;
  margin: auto;
  padding: 10px;
}

a:hover {
  background: rgb(127, 197, 208);
  color: rgba(0, 0, 0, 0.801);
  border-radius: 2px;
}
</style>
