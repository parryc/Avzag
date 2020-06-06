import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    root: process.env.BASE_URL + "languages/",
    catalogue: undefined,
    language: undefined,
    phonology: undefined,
    sample: undefined,
    converters: undefined
  },
  getters: {
    languageRoot: state => {
      return state.root + state.language + "/"
    }
  },
  mutations: {
    setCatalogue(state, json) {
      state.catalogue = json;
    },
    setLanguage(state, language) {
      state.language = language;
    },
    setPhonology(state, json) {
      json.sort((a, b) => a.ipa.localeCompare(b.ipa));
      json.forEach((p, i) => {
        p.i = i;
        p.lects.sort((a, b) => a.name.localeCompare(b.name));
      });
      state.phonology = json;
    },
    setSample(state, text) {
      state.sample = text;
    },
    setConverters(state, json) {
      state.converters = json;
    }
  },
  actions: {
    async loadCatalogue({ dispatch, commit }) {
      commit("setCatalogue", await dispatch("loadJson", "../catalogue.json"));
    },
    async loadLanguage({ dispatch, commit }, language) {
      commit("setLanguage", language);
      commit("setPhonology", await dispatch("loadJson", "phonology.json"));
      commit("setSample", await dispatch("loadText", "sample.txt"));
      commit("setConverters", await dispatch("loadJson", "converters.json"));
    },
    async loadJson({ getters }, file) {
      return await fetch(getters.languageRoot + file).then(r => r.json());
    },
    async loadText({ getters }, file) {
      return await fetch(getters.languageRoot + file).then(r => r.text());
    }
  },
  modules: {
  }
})