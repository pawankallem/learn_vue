<template>
  <div>
    <h1> Home Page </h1>
    <button class="submit" @click="logout"> Logout </button>
  </div>
</template>

<script>
export default {
    data() {

    },
    methods: {
      logout: function () {
        localStorage.removeItem("user");
        this.$router.push({ name: "SignIn" });
      }
    },
    mounted() {
      let user = localStorage.getItem( "user" );
      if ( !user ) {
        this.$router.push({ name: "SignIn" })
      }
    }
    
}
</script>

<style>

</style>