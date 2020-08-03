import { createStore } from "vuex";
import  a  from "./a";

export default createStore({
  state: {
    count: 10
  },
  mutations: {
    setCount(state, value) {
      state.count = value;
    }
  },
  actions: {
    setCount({ commit }, value) {
      return new Promise((resolve, reject) => {
        if (typeof (value) !== "number") reject(new Error('value 必须为数字'))
        setTimeout(() => {
          commit('setCount', value)
          resolve()
        }, 1000)
      })
    },
  },
  modules: {
    a
  }
});
