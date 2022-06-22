
import SignUp from "./components/SignUp.vue";
import SignIn from "./components/SignIn.vue";
import HomePage from "./components/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name: "HomePage",
        path: "/",
        component: HomePage
    },
    {
        name: "SignUp",
        path: "/signup",
        component: SignUp
    },
    {
        name: "SignIn",
        path: "/signin",
        component: SignIn
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;