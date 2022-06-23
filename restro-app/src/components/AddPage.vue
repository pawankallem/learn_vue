
<template>
  <div>
    <app-header/>
    <h1> Add Restarent Page </h1>
  </div>
</template>

<script>
import NavHeader from "./NavHeader.vue"

export default {
    data() {

    },
    components: {
      "app-header":NavHeader,
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