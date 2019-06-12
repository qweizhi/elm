<template>
  <div id="app">
   <router-view></router-view>    
   <wfooter/>
  </div>
</template>
<<<<<<< HEAD
<script> 
export default {
  
=======
<script>
import wfooter from "@/components/Wfooter.vue";
export default {
  components: {
    wfooter
  }
>>>>>>> 8645b636066ba667f813f3be531cff9734523136
};
</script>

<style lang="scss">
@import "./assets/css/base.css";
<<<<<<< HEAD
=======
* {
  padding: 0px;
  margin: 0px;
}
// #app {
//   width: 100%;
// }
>>>>>>> 8645b636066ba667f813f3be531cff9734523136
</style>
