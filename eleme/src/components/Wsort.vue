<template>
    <div class="w-sort">
        <h2>
            推荐商家
        </h2>
        <div class="sort-w-box">
            <ul>
                <li>
                    <a>综合排序</a>
                    <span></span>
                </li>
                <li>
                    距离最近
                </li>
                <li>品质联盟</li>
                <li>
                    <b>筛选</b>
                      <i class="iconfont icon-shaixuan"></i>
                </li>
            </ul>
        </div>
        <div class="login-w-m" v-if="cookie_name">
            <img src="https://fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png" alt="">
            <h3>没有结果</h3>
            <p>登录后查看更多商家</p>
            <input type="button" value="登录">
        </div>

        <div class="list_e_w">
          <div class="item_w clearfix" v-for="(k,ind) in sort_item_w" :key="ind">
            <img class="item_img1_w fl" :src="`https://fuss10.elemecdn.com/${insertStr(insertStr(k.restaurant.image_path,1,'/'),4,'/').slice(-3) =='png'?insertStr(insertStr(k.restaurant.image_path,1,'/'),4,'/')+'.png':insertStr(insertStr(k.restaurant.image_path,1,'/'),4,'/') + '.jpeg'}`" alt="">
            <div class="item_w_lt fr">
              <section class="content_1_w clearfix">
                <h3 class="fl" v-text="k.restaurant.name">
              </h3>
               <span class="fr">···</span>
              </section>
              <section class="content_2_w">
                 <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt="">
                 <span v-text="k.restaurant.rating"></span>
                 <span>月售680单</span>
                 <i class="fr"></i>
              </section>
              <section class="clearfix content_3_w">
                <div class="fl">     
                    <span>￥15起送</span>
                     <span class="peisong">配送费￥1.5</span>
                </div>
                <div class="fr">
                  <span>17km</span>
                  <span>34分钟</span>
                </div>
              </section>
              <section class="content_4_w">
              <span v-for="(ks,inds) in k.restaurant.support_tags" :key="inds" v-text="ks.text" :style="{'color':ks.color}"></span>
              </section>
              <section class="content_5_w clearfix">
                <div class="c5_box fl">             
                   <div class="c5_le">   
                   <span class="jian_red">减</span>
                    <span class="jian_p">满23减21，满45减31，满68减40，满99减60</span>
                </div>
                <div class="c5_le">
                    <span class="jian_red">特</span>
                    <span>特价商品8.8元</span>
                 </div>
                 </div>
                 <div class="fr huodong">
                   <span>4个活动</span>
                   <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt="">
                 </div>
              </section>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      arr: "",
      cookie_name: "",
      sort_item_w: ""
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
    // console.log(sorts);
    this.arr = data.outside.outside_sort_filter;
    this.cookie_name = this.getCookie(name);
    console.log(this.cookie_name);
    let item_data = await this.$axios.get(
      "https://www.easy-mock.com/mock/5cfa2149b68e235523092660/example/item",
      {
        params: {
          ID: 12345
        }
      }
    );
    console.log(item_data.data.items);
    this.sort_item_w = item_data.data.items;
  },
  methods: {
    getCookie: function(c_name) {
      if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
          c_start = c_start + c_name.length + 1;
          var c_end = document.cookie.indexOf(";", c_start);
          if (c_end == -1) c_end = document.cookie.length;
          return unescape(document.cookie.substring(c_start, c_end));
        }
      }
      return "";
    },
    insertStr: function(soure, start, newStr) {
      return soure.slice(0, start) + newStr + soure.slice(start);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/iconfont/iconfont.css";
@import "../assets/iconfont/demo.css";
.w-sort {
  // padding-bottom: 0.266667rem;
  h2 {
    line-height: 0.96rem;
    font-size: 0.4rem;
    color: #000;
    justify-content: center;
    display: flex;
    position: relative;
  }
  h2::before {
    display: block;
    content: "";
    width: 0.533333rem;
    width: 5.333333vw;
    height: 0.026667rem;
    height: 0.266667vw;
    background-color: #999;
    position: absolute;
    top: 50%;
    left: 35%;
  }
  h2::after {
    display: block;
    content: "";
    width: 0.533333rem;
    width: 5.333333vw;
    height: 0.026667rem;
    height: 0.266667vw;
    background-color: #999;
    position: absolute;
    top: 50%;
    right: 35%;
  }
  .sort-w-box {
    width: 100%;
    ul {
      width: 100%;
      display: flex;
      //  justify-content: center;
      li {
        width: 25%;
        text-align: center;
        color: #666;
        font-size: 0.373333rem;
        a {
          color: #666;
          font-size: 0.373333rem;
        }
        span {
          border-style: solid;
          border-width: 0.106667rem;
          display: inline-block;
          border-color: #333 transparent transparent transparent;
        }
        b {
          font-weight: normal;
        }
        i {
          font-size: 0.32rem;
          margin-left: 2px;
        }
      }
    }
  }
  section {
    margin-top: 0.133333rem;
  }
  .login-w-m {
    text-align: center;
    img {
      width: 5.333333rem;
      height: 5.333333rem;
    }
    h3 {
      margin: 0.333333rem 0 0.266667rem;
      margin: 3.333333vw 0 2.666667vw;
      color: #6a6a6a;
      font-weight: 400;
      font-size: 0.453333rem;
    }
    p {
      margin: 0 0 0.333333rem;
      margin: 0 0 3.333333vw;
      color: #999;
      font-size: 0.306667rem;
    }
    input {
      padding: 0.266667rem;
      padding: 2.666667vw;
      min-width: 3.2rem;
      min-width: 32vw;
      border: none;
      border-radius: 0.053333rem;
      border-radius: 0.533333vw;
      background-color: #56d176;
      color: #fff;
      text-align: center;
      font-size: 1.2em;
      font-family: inherit;
    }
  }
  .list_e_w {
    border-bottom: 0.013333rem solid #eee;
    background-color: #fff;
    color: #666;
    padding: 0.4rem 0;
    list-style: none;
    // font-size: 0.293333rem;
    line-height: normal;
    .item_w {
      padding: 0.4rem 0.266667rem;
      .item_img1_w {
        width: 1.733333rem;
        height: 1.733333rem;
      }
      span {
        margin-right: 0.106667rem;
        font-size: 0.093333rem;
      }
      .jian_red {
        background-color: rgb(240, 115, 115);
        color: #fff;
        padding: 0.053333rem;
        font-size: 0.093333rem;
      }
      .item_w_lt .content_1_w {
        h3 {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 700;
          font-size: 0.4rem;
          color: #333;
          overflow: hidden;
        }
        span {
          float: right;
        }
      }
      .content_2_w {
        img {
          margin-right: 0.106667rem;
        }
      }
      .peisong::before {
        margin: 0 0.017067rem;
        margin: 0 0.08rem;
        color: #ddd;
        content: "|";
      }
      .content_5_w {
        // display: flex;
        width: 7.466667rem;

        .c5_box {
          width: 5.803333rem;
          padding-right: 0.266667rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          vertical-align: middle;
          // flex: 1;
          .c5_le {
            width: 5.803333rem;
            .jian_p {
              display: inline-block;
              width: 4.893333rem;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
              vertical-align: middle;
            }
          }
        }
        .huodong {
          span {
            font-size: 0.066667rem;
          }
          img {
            width: 0.133333rem;
            height: 0.133333rem;
          }
        }
      }
    }
  }
}
</style>
