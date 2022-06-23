
<template>
  <div>
    <app-header/>
    <h1> Add Restarent </h1>
    <form class="form" @submit.prevent="restarent">
    <input type="text" placeholder="Name of Restarent" v-model="name"  />
    <input type="text" placeholder="Address of Restarent" v-model="address"  />
    <input type="text" placeholder="Contact of Restarent" v-model="contact"  />
    <input class="submit" type="submit" placeholder="Add Restarent"/>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import NavHeader from "./NavHeader.vue"

export default {
    data() {
      return {
        name: "",
        address: "",
        contact: ""
      }
    },
    components: {
      "app-header":NavHeader,
    },
    methods: {
      restarent: async function () {
        let result = await axios.post( "http://localhost:3000/restarents", {
          name: this.name,
          address: this.address,
          contact: this.contact
        })
        if( result.status == 201 ){
          console.log( result )
          this.$router.push({ name: "HomePage" })
        }
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