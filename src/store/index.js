import { createStore } from "vuex";

export default createStore({
  state: {
    isDarkMode: false,
  },
  getters: {},
  mutations: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
      // Save to localStorage to persist the setting
      localStorage.setItem("darkMode", state.isDarkMode);
    },
    initializeDarkMode(state) {
      // Check localStorage on app start
      const darkMode = localStorage.getItem("darkMode");
      if (darkMode) {
        state.isDarkMode = darkMode === "true";
      }
    },
  },
  actions: {
    toggleDarkMode({ commit }) {
      commit("toggleDarkMode");
    },
    initializeDarkMode({ commit }) {
      commit("initializeDarkMode");
    },
  },
  modules: {},
});
