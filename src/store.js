/* const store = createStore({
  state: {
    user: {
      name: "osman",
      surname: "sivrikaya",
      age: "22",
      address: "Istanbul",
      phone: "05321234567",
    },
    fullName: "Medine Gül Mercan",
    userList: ["Gökhan", "Osman", "Cemil", "Medine", "Gül", "Mercan"],
    itemList: [
      { id: 1, title: "Masa", type: "Mobilya" },
      { id: 2, title: "Sandalye", type: "Mobilya" },
      { id: 3, title: "TV", type: "elektronik" },
      { id: 4, title: "Monitor", type: "elektronik" },
      { id: 5, title: "Bardak", type: "plastik" },
      { id: 6, title: "Tabak", type: "plastik" },
    ]
  },
  // async değildir
  mutations: {
    updateItemList(state, payload) {
      state.itemList.push(payload);
    }
  },
  actions: {
    async updateItemList({ commit }, payload) {
      await setTimeout(() => {
        commit("updateItemList", payload)
      }, 2000);
    }
  },
  getters: {
    _woodItems: state => state.itemList.filter(item => item.type === "Mobilya"),
    _activeUser(state) {
      const user = { ...state.user };
      delete user.phone;
      return user;
    }
  }
});

export default store; */

