<template>
    <div>
        <winautonavi/>
        <wcitySelection/>
    </div>
</template>
<script>
import winautonavi from "@/components/Winautonavi.vue";
import wcitySelection from "@/components/WcitySelection.vue";

export default {
  components: {
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
