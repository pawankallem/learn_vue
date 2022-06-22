<template>
  <div>
    <h1> Sign Up </h1>
    <form class="signupForm" action="" @submit.prevent="register">
        <input type="text" placeholder="User Name" v-model="userName" />
        <input type="text" placeholder="Email" v-model="email" />
        <input type="text" placeholder="Password" v-model="password" />
        <input class="submit" type="submit">
    </form>
  </div>
</template>

<script>
export default {

    data() {
        return {
            userName: "",
            email: "",
            password: "",
        }
    },
    methods: {
        register: function () {
            console.log( this.userName,this.email,this.password )
        }
    }

}
</script>

<style scoped>
.signupForm {
    display: flex;
    flex-direction: column;
    width: 30%;
    gap: 5px;
    margin: auto;
}
input {
    height: 40px;
    text-align: center;
    border: 1px solid skyblue;
    border-radius: 10px;
}
.submit {
    background: skyblue;
    color: #fff;
    font-size: 120%;
}

</style>