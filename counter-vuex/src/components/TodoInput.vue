<template>
  <div>
    <h1> Todo Input </h1>
    <input type="text" v-model="inputText" />
    <button @click="addTodo(inputText)"> Add </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data() {
        return{
            inputText: "",
        }
    },
    methods: {
        ...mapActions(["addTodo"]),

    }
}
</script>

<style>

</style>