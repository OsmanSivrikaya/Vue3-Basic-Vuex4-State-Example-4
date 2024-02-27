export default {
  namespaced:true,
  state : {
    contactName: "puresol",
    contactAddress: "Istanbul",
  },
  mutations: {
    setItem(state, name){
      state.contactName = name;
    }
  },
  getters:{
    _contactName : state => state.contactName
  }
};