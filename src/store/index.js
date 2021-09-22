import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [],
  },
  getters: {
    totalItems: (state) => state?.cart?.length,
    isItemInCart: (state) => (id) => {
      return state.cart.find((item) => item.id === id);
    },
  },
  mutations: {
    addItem(state, item) {
      state.cart.push(item);
    },
    removeItem(state, removedItemId) {
      const filteredCart = state.cart.filter(
        (item) => item.id !== removedItemId
      );
      state.cart = filteredCart;
    },
  },
  actions: {
    addItem({ commit }, item) {
      commit("addItem", item);
    },
    removeItem({ commit }, id) {
      commit("removeItem", id);
    },
  },
});
