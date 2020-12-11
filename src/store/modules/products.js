const products = [
  { id: '1', name: 'Cactus', image: require('../../assets/cactus.jpg'), price: 15 },
  { id: '2', name: 'Lemon tree', image: require('../../assets/lemon-tree.jpg'), price: 23 },
  { id: '3', name: 'Orchid', image: require('../../assets/orchidee.jpg'), price: 9 }
]

// Initial state
const initialState = {
  all: [],
};

const getters = {};

const actions = {
  // fetching all products, normally this would be from an external API
  fetchAllProducts({ commit }) {
    commit('setProducts', products);
  }
};

const mutations = {
  setProducts(state, products) {
    state.all = products;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
