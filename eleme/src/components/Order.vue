<template>
    <!-- 未登录隐藏 -->
    <div>
      <orderList/>
    </div>
</template>
<script>

import wheader from "@/components/Wheader.vue"; // @ is an alias to /src
import orderList from "@/components/orderList.vue"; // @ is an alias to /src

export default {
  components: {
    // "orderList":resolve=>(['./order'],resolve)
    orderList
  },
  created() {
    this.$store.state.isFooter = 1;
  }

};
</script>

<style>
@import "../assets/css/orderTwo.css";
</style>
