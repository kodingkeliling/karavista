// src/store/sheet.module.js
import axios from 'axios';
import config from "@/ConfigProvider"; 

const API_URL = `${config.value("API_URL")}`;
export const GET_SHEETS = 'GET_SHEETS';

export default {
  namespaced: true,
  state: {
    dataSheets: [],
  },
  mutations: {
    SET_DATA_SHEETS(state, data) {
      state.dataSheets = data;
    },
  },
  actions: {
    async [GET_SHEETS]({ commit }) {
      try {
        const response = await axios.get(`${API_URL}/echo?user_content_key=AehSKLi-vcTFwx7hAEXsKGKG9Y7RRww1Ct4WI0D4Ya7ipvB4xIYXOvO9GU4t_52GqTgvOe5k35_CLCLt6SJjsB6VkVsmIyWookMd517w_dmO5xOen7GAsFE-bX4mUwhfAutW_dZVMVlpaCfn6QlSVM73zVmvCWh-s9sO4Cu-NSFMv7BTyqpPbMNkQBmqpFtKSJETbCb45P-878OpPQdsejvxGfcvmQTPrGw7F4YiYYYHcJ8oCG4pXVov8BZ_WcVV4ultbAJ-NR_NfYchPKqk5ga8mgyh58f2HQ&lib=MzteKLVRv9wLloBP3uqW6VKazoYYcLJhR`);
        commit('SET_DATA_SHEETS', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
  getters: {
    dataSheets: (state) => state.dataSheets,
  },
};