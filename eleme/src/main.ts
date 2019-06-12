import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "lib-flexible/flexible";
import axios from "axios";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
// import VueScroller from "vue-scroller";
// Vue.use(VueScroller);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
