<template>
    <div class="city_sel_box" v-show="inauto_isok">
    <div class="city_sel_w">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="gou_w">
      <h3  class="cur_c">
        当前定位城市
      </h3>
      <p  class="cur_f" style="margin-left:0px;text-indent:1em;">酒泉</p>
      <dl class="" v-for="(item,index) in arr" :key="index">
      <dt v-text="item.initial"  class="cur_c"></dt>
      <dd v-for="(t,ind) in item.list" :key="ind"  class="cur_f">{{t.name}}</dd>
      </dl>
    </div>
    <div class="city-2_cDS_0"  v-show="inauto_isok">
      <span v-for="(ts,is) in arr" :key="is" v-text="ts.initial"></span>
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      arr: ""
    };
  },
  computed: {
    inauto_isok() {
      return this.$store.state.inauto_isok;
    }
  },
  async created() {
    let { data } = await this.$axios.get(
      "https://www.easy-mock.com/mock/5cfa2149b68e235523092660/example/city",
      {
        params: {
          ID: 12345
        }
      }
    );
    console.log(data);
    this.arr = data.city;
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/iconfont/iconfont.css";
@import "../assets/iconfont/demo.css";

.city_sel_box {
  position: relative;
  .city_sel_w {
    position: sticky;
    left: 0;
    top: 1.163333rem;
    height: 1.173333rem;
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
      position: absolute;
      left: 0.6rem;
      top: 0.403333rem;
      font-size: 0.2rem;
    }
    input {
      width: 8.666667rem;
      height: 0.8rem;
      line-height: 0.8rem;
      margin-top: 0.186667rem;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      border-radius: 0.4rem;
      padding-left: 0.8rem;
    }
  }
  .gou_w {
    background: #fff;
    margin-bottom: -1px;
    .cur_f {
      height: 1.333333rem;
      margin-left: 0.4rem;
      line-height: 1.333333rem;
      font-size: 0.37rem;
      // border-bottom: 0.5px solid #ddd;
      background: linear-gradient(#ddd, #ddd 100%, transparent 100%) bottom /
        100% 1px no-repeat;
    }
    .cur_c {
      font-size: 0.37rem;
      background: linear-gradient(#ddd, #ddd 100%, transparent 100%) bottom /
        100% 1px no-repeat;
      color: #666;
      background: #f5f5f5;
      padding: 0.373333rem 0 0.186667rem 0.4rem;
    }
  }
  .city-2_cDS_0 {
    display: flex;
    position: fixed;
    right: 0.266667rem;
    top: 4rem;
    z-index: 1001;
    flex-direction: column;
    span {
      width: 0.533333rem;
      line-height: 0.533333rem;
      color: #999;
      text-align: center;
    }
  }
}
</style>
