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
    mark_isok: false, // 遮罩
    city: "选择城市", // 接受城市值
    load_left: "100%",
    inauto_isok: false, //城市选项开关
    autonaviHeader: "选择收货地址",
    item_city_isok: false,
    get_city: "",
    cur_num: 0 //底部选项卡高亮
  },
  mutations: {
    getCity(state, citynum) {
      state.get_city = citynum; // 突变赋值给city
    },
    load_left(state) {
      if (state.autonaviHeader == "选择收货地址") {
        if (state.load_left == "100%") {
          state.load_left = "0";
        } else if (state.load_left == "0") {
          state.load_left = "100%";
        }
      } else if (state.autonaviHeader == "城市选择") {
        state.autonaviHeader = "选择收货地址";
      }
    },
    inauto_isok(state) {
      state.inauto_isok = !state.inauto_isok;
    },
    item_city_isok(state) {
      if (state.city == "选择城市") {
        state.item_city_isok = false;
      } else {
        state.item_city_isok = true;
      }
    },
    city_num_g(state, val) {
      state.city = val;
    }
  },
  actions: {}
});
