// Initial state
const initialState = {
  items: [],
};

const getters = {};

const actions = {
  addToCart({ state, commit }, product) {
    state.items.find(cartProduct => cartProduct.id === product.id)
      ? commit('increaseCount', { amount: 1, productId: product.id })
      : commit('addToCart', product);
  },
  clearCart({ commit }) {
    commit('clearCart')
  }
};

const mutations = {
  increaseCount(state, { amount, productId }) {
    const index = state.items.findIndex(
      cartProduct => cartProduct.id === productId
    );
    state.items[index].amount += amount;
  },
  addToCart(state, product) {
    state.items = [...state.items, { ...product, amount: 1 }];
  },
  clearCart(state) {
    state.items = []
  }
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
