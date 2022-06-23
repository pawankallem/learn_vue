<template>
  <div>
    <app-header />
    <h3 >Hello {{ userName }} welcome this is Restorent app</h3>
    <table>
      <thead>
        <tr>
          <th> S.No: </th>
          <th> Name </th>
          <th> Address </th>
          <th> Contact </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="list in restarentData" :key="list.id">
            <td> {{list.id}}</td>
            <td> {{list.name}}</td>
            <td> {{list.address}}</td>
            <td> {{list.contact}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import NavHeader from "./NavHeader.vue";

export default {
  data() {
    return {
      userName: "",
      restarentData: [],
    };
  },
  components: {
    "app-header": NavHeader,
  },
  async mounted() {
    let user = localStorage.getItem("user");
    this.userName = JSON.parse(user)[0].userName;
    if (!user) {
      this.$router.push({ name: "SignIn" });
    }
    let response = await axios.get("http://localhost:3000/restarents");
    if( response.status == 200) {
      this.restarentData = response.data;
      // console.warn(this.restarentData)
    }
  },
};
</script>

<style scoped>
  h3{
    color: skyblue;
  }
  table,td,th{
      border: 1px solid gray;
  }
  table{
    margin: auto;
  }
  td,th{
    padding: 10px;
  }

</style>
