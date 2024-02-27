import { createStore } from "vuex";
import contact from './modules/contact.js';
import taskmanager from './modules/taskmanager.js';

const store = createStore({
  state: {
    mainName: "Osman Sivrikaya",
  },
  modules: {
    musteri : contact,
    taskmanager : taskmanager
  }
});

export default store; 