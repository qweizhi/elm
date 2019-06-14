<template>
  <footer class="cartview-cartview_m8q55">
    <div class="cartview-cartmask_39Pun" style="z-index: 10; display: none;"></div>
    <div class="cartview-cartbody_3QIXw" style="z-index: 11;">
      <section class="discount-tip-discountTip_3QgtV_0">
        <span style="color: #333333;">满15减3元，满25减4元，满48减6元，满55减7元</span>
      </section>
      <div style="opacity: 0;">
        <div class="cartview-cartheader_1Wk12">
          <div class="cartview-headerText_1pEZG">
            <span>已选商品</span>
            <!---->
            <!---->
          </div>
          <a href="javascript:" ubt-click="101179" class="cartview-cartheaderRemove_1Xg8n">
            <svg>
              <use xlink:href="#cart-remove"></use>
            </svg>
            <span>清空</span>
          </a>
        </div>
        <div class="entityList-cartbodyScroller_nZp54_0">
          <!---->
          <ul class="entityList-cartlist_1hnWi_0"></ul>
          <!---->
        </div>
      </div>
    </div>
    <div class="bottomNav-cartfooter_1Xb8t_0" style="z-index: 11;">
      <span
        role="button"
        aria-label="购物车"
        attr-quantity="0"
        class="bottomNav-carticon_E1nII_0 "
        :class="{'bottomNav-carticon_E1nII_0_color' : iscolor}"
      >
        <!---->
      </span>
      <div role="button" aria-label="购物车有商品0件，共0元，另需配送费2元。" class="bottomNav-cartInfo_3l5zP_0">
        <p class="bottomNav-carttotal_1DJt5_0">
          <span class="bottomNav-carttotalOriginal_2tu8R_0">未选购商品</span>
          <!---->
        </p>
        <p class="bottomNav-cartdelivery_1TjrT_0">另需配送费2元</p>
      </div>
      <a
        role="button"
        href="javascript:;"
        class="submit-btn-submitbutton_3t114_0"
        :class="{'submit-btn-submitbutton_3t114_0_color' : isbackground}"
      >
        <span>¥12起送</span>
      </a>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return{
      iscolor : false,
      isbackground : false,
    };
  },
});
</script>


<style>
@import '../assets/css/shop.css';
</style>

