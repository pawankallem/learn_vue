<template>
  <div>
    <h1> Todo Input </h1>
    <input type="text" v-model="inputText" />
    <button @click="addTodoObj"> Add </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 as uuid } from "uuid"
export default {
    data() {
        return{
            inputText: "",
        }
    },
    methods: {
        ...mapActions(["addTodo"]),
      addTodoObj () {
        this.addTodo({
          id: uuid(),
          title: this.inputText,
        })
      }

    },
    computed: {
    }
}
</script>

<style>

</style>