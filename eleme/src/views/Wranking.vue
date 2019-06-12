<template>
     <div class="ranking">
   <div>
       <h2>2134</h2>
              <ul>
                <li v-for="(s,i) in arr.inside_sort_filter" :key="i" v-text="s.name"></li>
              </ul>
              
    </div>
    </div>
    
</template>
<script>
export default {
  data() {
    return {
      arr: "" //排序头部点击数据
    };
  },
  async created() {
    let { data } = await this.$axios.get(
      "https://www.easy-mock.com/mock/5cfa2149b68e235523092660/example/sort",
      {
        params: {
          ID: 12345
        }
      }
    );
    console.log(data.outside);
    this.arr = data.outside.outside_sort_filter;
  }
};
</script>
<style lang="scss" scoped>
.ranking {
  position: absolute;
}
</style>
