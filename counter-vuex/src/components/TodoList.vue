<template>
  <div>
    <h1 > Todo List </h1>
    <table>
      <thead>
        <tr>
          <th> S.no </th>
          <th> Title </th>
          <th> Update </th>
          <th> Romove </th>
        </tr>
      </thead>
      <tbody>

        <tr v-for="todo in allTodos" :key="todo.id" >
            <td>{{todo.id}}</td>
            <td> {{todo.title}} </td>
            <td> Edit </td>
            <td @click="deleteTodo(todo.id)"> Delete </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
export default {
    data () {
      return {
        todoData: [],
      }
    },
    computed: {
      ...mapGetters(["allTodos"]),
      
    },
    methods: {
      ...mapActions([ 'deleteTodo' ])
    }
}
</script>

<style>

</style>