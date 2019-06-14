<template>
<nav>
<a class="foot_item" v-for="(t,index) in footlist" :key="index" :class="{'cur':cur_num==index}" @click="cur_click(index)">
    <i class="iconfont" :class="t.icon"></i>
    <span v-text="t.title"></span>
</a>
</nav>
</template>
<script>
export default {
  data() {
    return {
      footlist: [
        {
          title: "首页",
          icon: "icon-shouye"
        },
        {
          title: "发现",
          icon: "icon-faxian"
        },
        {
          title: "订单",
          icon: "icon-tianchongxing-"
        },
        {
          title: "我的",
          icon: "icon-weibiaoti-_huabanfuben"
        }
      ],
      cur_num: 0
    };
  },
  methods: {
    cur_click(index) {
      this.cur_num = index;
    } //获取cookie
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/iconfont/iconfont.css";
@import "../assets/iconfont/demo.css";
nav {
  z-index: 1001;
  width: 100%;
  height: 1.2rem;
  padding-top: 0.4rem;
  position: fixed;
  left: 0px;
  bottom: 0px;
  display: flex;
  z-index: 999px;
  background: #fff;
  box-shadow: 0 -0.026667rem 0.053333rem rgba(0, 0, 0, 0.1);
  .foot_item {
    display: flex;
    flex-direction: column;
    width: 25%;
    color: #8e8e93;
    align-items: center;
  }
  .cur {
    color: #0085ff;
  }
}
</style>
