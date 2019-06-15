<template>
  <div class="autonavi_w">
    <div class="autonavi_w_header">
      <i @click="city_dw">&lt;</i>
      <h2>{{autonaviHeader}}</h2>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    autonaviHeader() {
      return this.$store.state.autonaviHeader;
    }
  },
  methods: {
    city_dw() {
      this.$store.commit("load_left");
      this.$store.state.inauto_isok = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.autonavi_w {
  position: sticky;
  left: 0px;
  top: 0px;
  z-index: 1000;
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

