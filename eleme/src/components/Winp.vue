<template>
    <div class="head_inp">
        <a href="###">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索饿了么商家、商品名称</span></a>
    </div>
</template>
<style lang="scss" scoped>
@import "../assets/iconfont/iconfont.css";
@import "../assets/iconfont/demo.css";
.head_inp {
  position: -webkit-sticky;
  position: sticky;
  z-index: 999;
  top: 0;
  padding: 0.2rem 0.373333rem;
  margin: -0.013333rem 0;
  background-image: -webkit-gradient(
    linear,
    left top,
    right top,
    from(#0af),
    to(#0085ff)
  );
  background-image: -webkit-linear-gradient(left, #0af, #0085ff);
  background-image: linear-gradient(90deg, #0af, #0085ff);
  a {
    background: #fff;
    color: #999;
    font-size: 0.373333rem;
    border-radius: 0.026667rem;
    align-items: center;
    display: flex;
    width: 100%;
    justify-content: center;
    height: 0.96rem;
    text-decoration-line: none;
    i {
      margin-right: 0.08rem;
    }
  }
}
</style>
