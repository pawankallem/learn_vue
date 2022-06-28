<template>
  <div>
    <div>
      <h2 v-if="!edit">{{ todo.title }}</h2>
      <input
        type="text"
        v-else
        v-bind:value="editedText"
        @change="inputHandler"
      />
      <div>
        <button @click="changeTitle(todo)">
          {{ edit ? "Update" : "Edit" }}
        </button>
        <button @click="deleteTodo(todo.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    todo: {},
  },
  data() {
    return {
      editedText: "",
      edit: false,
    };
  },
  methods: {
    ...mapActions(["deleteTodo", "updateTodo"]),
    inputHandler(e) {
      this.editedText = e.target.value;
    },
    changeTitle(todo) {
      this.edit = !this.edit;
      if (this.edit) {
        this.editedText = todo.title;
      } else {
          todo.title = this.editedText;
          this.updateTodo(todo);
      }
    },
  },
};
</script>

<style></style>
