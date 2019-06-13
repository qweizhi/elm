<template>
  <div class="home">
   <wheader/>
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

export default {
  components: {
    wheader,
    winp,
    wclassify,
    wcombo,
    wsort
  }
};
</script>
<style lang="scss" scoped>
.home {
  margin-bottom: 1.6rem;
}
</style>


