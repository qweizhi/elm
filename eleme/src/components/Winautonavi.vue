<template>
     <div class="autonavi_ding_w" v-show="!inauto_isok">
    <div class="dw_w_lt">
      <span class="dw_name" @click="inauto_is_isok">
        广州
      </span>
      <i></i>
    </div>
    <div class="dw_inp_box">
        <div class="dw_w_inp">
      <i class="iconfont icon-sousuo"></i>
      <input type="text" placeholder="请输入地址">
    </div>
    </div>
  
  </div>
</template>
<script>
export default {
  computed: {
    inauto_isok() {
      return this.$store.state.inauto_isok;
    }
  },
  methods: {
    inauto_is_isok() {
      this.$store.commit("inauto_isok");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/iconfont/iconfont.css";
@import "../assets/iconfont/demo.css";
.autonavi_ding_w {
  align-items: center;
  padding-left: 0.4rem;
  background: #fff;
  height: 1.493333rem;
  font-size: 0.15rem;
  display: flex;
  .dw_w_lt {
    .dw_name {
      width: 1.066667rem;
      color: #333;
      margin-right: 0.133333rem;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-align: center;
    }
    i {
      border-style: solid;
      border-color: #333 transparent transparent transparent;
      width: 0.08rem;
      line-height: 0.08rem;
      display: inline-block;
    }
  }
  .dw_inp_box {
    padding: 0.266667rem 0.4rem;
    width: 78%;
    .dw_w_inp {
      background: #f2f2f2;
      height: 0.96rem;
      width: 100%;
      position: relative;
      input {
        background: #f2f2f2;
        position: absolute;
        left: 0.666667rem;
        top: 0.266667rem;
      }
      i {
        position: absolute;
        left: 0.173333rem;
        top: 0.296667rem;
        font-size: 0.2rem;
      }
    }
  }
}
</style>
