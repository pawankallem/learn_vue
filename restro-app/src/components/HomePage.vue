<template>
  <div>
    <app-header />
    <h1>Hello {{ userName }} welcome this is Home Page</h1>
  </div>
</template>

<script>
import NavHeader from "./NavHeader.vue";

export default {
  data() {
    return {
      userName: "",
    };
  },
  components: {
    "app-header": NavHeader,
  },
  mounted() {
    let user = localStorage.getItem("user");
    this.userName = JSON.parse(user)[0].userName;
    if (!user) {
      this.$router.push({ name: "SignIn" });
    }
  },
};
</script>

<style></style>
