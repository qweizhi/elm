<template>
  <div id="app">
    <!-- 没登录显示部分 -->

    
    <router-view/>
    <wfooter/>

  </div>
</template>
<script>
import wfooter from "@/components/Wfooter.vue";
export default {
  components: {
    wfooter
  }
};
</script>

<style lang="scss">
@import "./assets/css/base.css";
</style>
