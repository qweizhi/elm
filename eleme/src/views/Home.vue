<template>
  <div class="home">
   <wheader/>
   <winp/>
   <wclassify/>
  </div>
</template>

<script>
import wheader from "@/components/Wheader.vue"; // @ is an alias to /src
import winp from "@/components/Winp.vue"; // @ is an alias to /src
import wclassify from "@/components/Wclassify.vue";
export default {
  components: {
    wheader,
    winp,
    wclassify
  }
};
</script>

