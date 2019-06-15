import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 决定头部是否出现
    isShop : true,
    onl: 0,
    isshopTab : true,
    // 决定loading是否出现
    loading: 0,
    // 1.建立空数组
    orderList : [],
    qty : 0,

  },
  mutations: {
    addItem(state, value) {
      state.orderList.push(value);
    },
    addqty(state, value) {
      state.qty;
    },
  },
  actions: {

  },
});
