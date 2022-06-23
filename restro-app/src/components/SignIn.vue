<template>
  <div>
    <img alt="Vue logo" src="../assets/blue-phoenix.png" />
    <h1>Sign In</h1>
    <form class="signin-form" action="" @submit.prevent="signin">
      <input type="text" placeholder="Email" v-model="email" />
      <input type="text" placeholder="Password" v-model="password" />
      <input class="submit" type="submit" />
    </form>
    <p>
      <router-link to="/signup"> Signup </router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signin: function () {
      console.log( this.email, this.password );
    }
  }
};
</script>

<style scoped>
.signin-form{
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: auto;
    gap: 5px;
}
input{
    height: 40px;
    text-align: center;
    border: 1px solid skyblue;
    border-radius: 10px;
}
.submit{
    background: skyblue;
    color: white;
    font-size: 120%;
    border-radius: 2px;
}

</style>
