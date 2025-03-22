// src/store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import sheet from './sheet.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    sheet,
  },
});