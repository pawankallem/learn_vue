<template>
  <div>
    <img alt="Vue logo" src="../assets/blue-phoenix.png" />
    <h1>Sign In</h1>
    <form class="form" action="" @submit.prevent="signin">
      <input type="text" placeholder="Email" v-model="email" required/>
      <input type="text" placeholder="Password" v-model="password" required/>
      <input class="submit" type="submit" />
    </form>
    <p>
      <router-link to="/signup"> Signup </router-link>
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signin: async function () {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user", JSON.stringify(result.data));
        this.$router.push({name:"HomePage"});
      }else{
        alert("Check your Email and Password!")
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user");
    if( user ) {
      this.$router.push({ name: "HomePage" })
    }

  }
};
</script>

<style scoped>
/* .signin-form {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: auto;
  gap: 5px;
}
input {
  height: 40px;
  text-align: center;
  border: 1px solid skyblue;
  border-radius: 10px;
}
.submit {
  background: skyblue;
  color: white;
  font-size: 120%;
  border-radius: 2px;
} */
</style>
