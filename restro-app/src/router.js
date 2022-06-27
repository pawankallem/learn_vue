import SignUp from "./components/SignUp.vue";
import SignIn from "./components/SignIn.vue";
import HomePage from "./components/HomePage.vue";
import { createRouter, createWebHistory } from "vue-router";
import AddPage from "./components/AddPage.vue";
import UpdatePage from "./components/UpdatePage.vue";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: HomePage,
  },
  {
    name: "SignUp",
    path: "/signup",
    component: SignUp,
  },
  {
    name: "SignIn",
    path: "/signin",
    component: SignIn,
  },
  {
    name: "Add",
    path: "/add",
    component: AddPage,
  },
  {
    name: "Update",
    path: "/update/:id",
    component: UpdatePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
