<template>
  <div>
    <h1> Home Page </h1>
  </div>
</template>

<script>
export default {
    data() {

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