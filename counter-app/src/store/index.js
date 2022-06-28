import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
  },
  getters: {
    totalCount: (state) => state.count,
  },
  mutations: {
    increment_count(state, num) {
      state.count += num;
    },
    decrement_count(state, num) {
      if( state.count>=1 ){
        state.count -= num;
      }else {
        alert( "You cann't Decrese Count lessthan 0 ")
      }
    },
  },
  actions: {
    increseCount({ commit }, num) {
      commit("increment_count", num);
    },
    decrementCount({ commit }, num) {
      commit("decrement_count", num);
    },
  },
  modules: {},
});
