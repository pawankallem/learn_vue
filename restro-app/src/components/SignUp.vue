<template>
  <div>
    <h1> Sign Up </h1>
    <img alt="Vue logo" src="../assets/blue-phoenix.png" />
    <form class="signupForm" action="" @submit.prevent="signup">
        <input type="text" placeholder="User Name" v-model="userName" />
        <input type="text" placeholder="Email" v-model="email" />
        <input type="text" placeholder="Password" v-model="password" />
        <input class="submit" type="submit">
    </form>
  </div>
</template>

<script>
import axios from "axios"

export default {
    name: "SignUp",
    data() {
        return {
            userName: "",
            email: "",
            password: "",
        }
    },
    methods: {
        async signup () {
            // console.log( this.userName,this.email,this.password )
            let result = await axios.post("http://localhost:3000/users",{
                email: this.email,
                password: this.password,
                userName: this.userName
            })
            if( result.status == 201 ) {
                localStorage.setItem( "users" ,JSON.stringify( result.data ));
                alert( "user singned up ");
                this.$router.push({name:"SignIn"})
            }
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