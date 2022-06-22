import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router"
import SignUp from "./components/SignUp.vue";
import SignIn from "./components/SignIn.vue";
import HomePage from "./components/HomePage.vue";

const routes = [
    { path: "/", component: HomePage },
    { path: "/signup", component: SignUp },
    { path: "/signin", component: SignIn },
]

const router = createRouter({
    history: createWebHistory() ,
    routes: routes
})

const app = createApp(App)
app.use( router )
app.mount('#app')
