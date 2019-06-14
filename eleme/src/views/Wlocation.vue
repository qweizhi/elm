<template>
    <div class="location" :style="{'right':'-'+load_left,'left':load_left}">
        <wautonavi/>
        <winautonavi/>
        <wcitySelection/>
    </div>
</template>
<script>
import wautonavi from "@/components/Wautonavi.vue";
import winautonavi from "@/components/Winautonavi.vue";
import wcitySelection from "@/components/WcitySelection.vue";

export default {
  components: {
    wautonavi,
    winautonavi,
    wcitySelection
  },
  computed: {
    load_left: function() {
      return this.$store.state.load_left;
    }
  }
};
</script>
<style lang="scss" scoped>
.location {
  transition: all 0.3s;
  position: fixed;
  top: 0;
  //   left: 100%;
  //   right: 0;
  bottom: 0;
  z-index: 1000;
  overflow: auto;
  background-color: #f4f4f4;
  -webkit-animation: index-1dF3G_0 0.3s;
  animation: index-1dF3G_0 0.3s;
  -webkit-overflow-scrolling: touch;
}
</style>
