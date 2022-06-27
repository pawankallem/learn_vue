import  { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {
        id: 1,
        title: "todo 1"
      },
      {
        id: 2,
        title: "todo 2"
      },
      {
        id: 3,
        title: "todo 3"
      },
      {
        id: 4,
        title: "todo 4"
      }
    ],
    count: 0,
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  mutations: {
    add_todo (state, todo) {
      state.todos.push( todo )
    },
    delete_todo (state, id) {
      state.todos = state.todos.filter( (todo) => todo.id != id )
    }
  },
  actions: {
    addTodo ({commit}, todo ) {
      commit( "add_todo", todo)
    },
    deleteTodo ( {commit}, id) {
      commit( "delete_todo", id);
    }
  },
  modules: {
  }
})
