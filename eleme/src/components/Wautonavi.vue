<template>
  <div class="autonavi_w">
    <div class="autonavi_w_header">
      <i @click="city_dw">&lt;</i>
      <h2>选择收货地址</h2>
    </div>
  </div>
</template>
<script>
import getCurrentCityName from "../getUserLocation.js"; //高德地图地理位置
export default {
  methods: {
    /**获取地图定位*/
    getCurrentCity() {
      console.log(getCurrentCityName());
      this.$store.state.city ||
        getCurrentCityName().then(city => {
          console.log(city);
          city = city.slice(0, city.length - 1);
          this.$store.commit("getCity", city);
        });
    },
    city_dw() {
      this.$store.commit("load_left");
      this.$store.state.inauto_isok = false;
    }
  }
  // mounted() {
  //   // this.getCurrentCity(); // 调用获取地理位置
  // }
};
</script>
<style lang="scss" scoped>
.autonavi_w {
  position: sticky;
  left: 0px;
  top: 0px;
  .autonavi_w_header {
    position: relative;
    width: 100%;
    color: #fff;
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#0af),
      to(#0085ff)
    );
    background-image: -webkit-linear-gradient(left, #0af, #0085ff);
    background-image: linear-gradient(90deg, #0af, #0085ff);
    text-align: center;

    i {
      font-size: 0.866667rem;
      position: absolute;
      left: 0.533333rem;
    }
    h2 {
      text-align: center;
      font-size: 0.533333rem;
      line-height: 1.173333rem;
    }
  }
}
</style>

