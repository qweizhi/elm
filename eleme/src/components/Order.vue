<template>
    <!-- 未登录隐藏 -->
    <div data-v-1ec2d114>
      <section data-v-1ec2d114 class="nodatatipWrap NoDataTip-wrapper_1Gwf0tm" style="display:none">
        <img src="//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png">
        <h3>登录后查看外卖订单</h3>
        <!---->
        <button>立即登录</button>
      </section>

      <!-- 登录显示 -->
        <section
          data-v-1ec2d114
          class="nodatatipWrap NoDataTip-wrapper_1Gwf0tm"
          style="display: none;"
        >
          <img src="//fuss10.elemecdn.com/6/87/4efda8c6bf4734d39faf86fe190c3gif.gif">
          <h3>没有结果</h3>
          <!---->
          <!---->
        </section>
        <div data-v-1ec2d114 infinite-scroll-distance="20" class="orderbody">
          <!---->
          <a
            data-v-54bf175d
            data-v-1ec2d114
            v-for="(i,idx) in lis"
            :key="idx"
            href="javascript:;"
            wxmplink="/pages/order/detail/order-detail?id=3043647167083949163"
            class="ordercard"
          >
            <div data-v-54bf175d class="ordercard-body">
              <a
                data-v-54bf175d
                href="javascript:;"
                wxmplink="/pages/shop/shop/index?id=E5964925007562857797"
                class="ordercard-avatar"
              >
                <img
                  data-v-54bf175d
                  class="ordercard-logo"
                  src="https://fuss10.elemecdn.com/3/c8/e7e2f4f527a2cbfff095582158ce0jpeg.jpeg"
                >
                <!---->
              </a>
              <div data-v-54bf175d class="ordercard-content">
                <div data-v-54bf175d class="ordercard-head">
                  <div data-v-54bf175d class="title">
                    <a
                      data-v-54bf175d
                      href="javascript:;"
                      wxmplink="/pages/shop/shop/index?id=E5964925007562857797"
                      class="name"
                    >
                      <span data-v-54bf175d class="content" v-text="i.restaurant_name"></span>
                      <svg data-v-54bf175d>
                        <use data-v-54bf175d xlink:href="#arrow-right"></use>
                      </svg>
                    </a>
                    <p data-v-54bf175d class="status clearfix" v-text="i.status_bar.title"></p>
                  </div>
                  <p data-v-54bf175d class="datetime clearfix" v-text="i.formatted_created_at"></p>
                </div>
                <div data-v-54bf175d class="ordercard-detail">
                  <p data-v-54bf175d class="detail">
                    <span data-v-54bf175d class="productname" >油豆腐拆骨肉饭</span>
                    <span data-v-54bf175d></span>
                  </p>
                  <p data-v-54bf175d class="price" v-text="i.total_amount">¥16.00</p>
                </div>
              </div>
            </div>
            <div data-v-54bf175d class="ordercard-bottom">
              <!---->
              <!---->
              <button data-v-54bf175d ubt-click="101194" class="cardbutton">再来一单</button>
              <!---->
              <!---->
            </div>
          </a>
        
            <!---->
          <div data-v-1ec2d114 class="orderbody-bottom">
            <p data-v-1ec2d114 class="loading" style="display: none;">
              <svg data-v-1ec2d114 class="loading-svg">
                <use data-v-1ec2d114 xlink:href="#loading"></use>
              </svg>
            </p>
            <!---->
            <!---->
          </div>
        </div>
     
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    data() {
        return{
            lis : [],
        };
    },
    // 生命周期第二阶段拿数据ajax
    created() {
        this.getLis(() => {
        });
    },
    methods : {
        // 获取列表数据
        async getLis() {
            const data = await this.$axios(
            'https://www.easy-mock.com/mock/5cf66494c51c246c3655bfca/example/orderList',
            );
            const datatwo = await this.$axios(
            'https://www.easy-mock.com/mock/5cf66494c51c246c3655bfca/example/orderListTwo',
            );
            this.lis = data.data;
            console.log(this.lis);

        },
    },
});
</script>

<style>
@import "../assets/css/orderTwo.css";

</style>
