
<template>
  <div>
    <app-header/>
    <h1> Update restarent Page </h1>
    <form class="form" @submit.prevent="updateRestro">
    <input type="text" placeholder="Name of Restarent" v-model="name"  />
    <input type="text" placeholder="Address of Restarent" v-model="address"  />
    <input type="text" placeholder="Contact of Restarent" v-model="contact"  />
    <input class="submit" type="submit" placeholder="Add Restarent"/>
    </form>
  </div>
</template>

<script>
import NavHeader from "./NavHeader.vue"
import axios from "axios"

export default {
    data() {

      return {
        name: "",
        address: "",
        contact: "",
      }

    },
    components: {
      "app-header":NavHeader,
    },
    async mounted() {
      let user = localStorage.getItem( "user" );
      if ( !user ) {
        this.$router.push({ name: "SignIn" })
      }
      let result = await axios.get( "http://localhost:3000/restarents/"+this.$route.params.id)
      this.name = result.data.name
      this.address = result.data.address
      this.contact = result.data.contact
    },
    methods: {
      updateRestro: async function () {
          let result = await axios.put( "http://localhost:3000/restarents/"+this.$route.params.id, {
            name: this.name,
            address: this.address,
            contact: this.contact
          } )
          if( result.status == 200 ){

            this.$router.push({ name: "HomePage" })
          }
      }
    }
    
}
</script>

<style>

</style>