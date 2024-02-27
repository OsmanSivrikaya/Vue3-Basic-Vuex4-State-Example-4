export default {
  namespaced:true,
  state : {
    itemList: [],
    userList: [],
  },
  mutations: {
    setItem(state, name){
      state.itemList.push(name);
    }
  },
  getters: {
    _itemList: state => state.itemList,
  }
};