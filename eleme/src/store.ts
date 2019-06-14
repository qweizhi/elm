import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 决定头部是否出现
    isShop: true,
    isFooter: true,
    onl: 0,
    isshopTab: true,
    mark_isok: false, //遮罩
    city: "", //接受城市值
    load_left: "100%",
    inauto_isok: false
  },
  mutations: {
    getCity(state, citynum) {
      state.city = citynum; //突变赋值给city
    },
    load_left(state) {
      if (state.load_left == "100%") state.load_left = "0";
      else if (state.load_left == "0") state.load_left = "100%";
    },
    inauto_isok(state) {
      console.log(31);
      state.inauto_isok = !state.inauto_isok;
    }
  },
  actions: {}
});
