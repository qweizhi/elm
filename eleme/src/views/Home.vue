<template>
  <div class="home">
     <div class="ranking_mark" v-show="count"></div>
   <wheader/>
   <wlocation/>
   <winp/>
   <wclassify/>
   <wcombo/>
   <wsort/>
  </div>
</template>

<script>
import wheader from "@/components/Wheader.vue"; // @ is an alias to /src
import winp from "@/components/Winp.vue"; // @ is an alias to /src
import wclassify from "@/components/Wclassify.vue";
import wcombo from "@/components/Wcombo.vue";
import wsort from "@/components/Wsort.vue";
import wlocation from "./Wlocation.vue";

export default {
  components: {
    wheader,
    winp,
    wclassify,
    wcombo,
    wsort,
    wlocation
  },
  computed: {
    count() {
      return this.$store.state.mark_isok;
    }
  }
};
</script>
<style lang="scss" scoped>
.home {
  margin-bottom: 1.6rem;
  .ranking_mark {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 3;
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>


