<template>
  <div>
    <h1> Todo's app using VUEX </h1>
    <TodoInput/>
    <TodoList/>
  </div>
</template>

<script>
import TodoInput from "./components/TodoInput.vue"
import TodoList from "./components/TodoList.vue"
export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
