<template>
  <div>
    <h1 > Todo List </h1>
    <table style="margin:auto">
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
            <td v-show="edit"> <input type="text" v-bind:value="editedText"></td>
            <td @click="changeTitle (todo)"> {{ edit ? "Update" : "Edit"}} </td>
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
        editedText: "",
        edit: false,
      }
    },
    computed: {
      ...mapGetters(["allTodos"]),
      
    },
    methods: {
      ...mapActions([ 'deleteTodo', 'updateTodo' ]),
      changeTitle ( todo ) {
        this.edit = !this.edit
        if ( !this.edit && todo.title != this.editedText ) {
          console.log ( todo.title , this.editedText )
        }
      }
    }
}
</script>

<style>

</style>