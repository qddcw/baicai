<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: DCW
 * @Date: 2021-02-02 11:37:19
 * @LastEditors: DCW
 * @LastEditTime: 2021-02-05 15:58:44
-->
<template>
  <div class="home">
    <!-- 头部固定栏 start -->
    <div class="header">
      <div class="content">
        <!-- logo+des -->
        <div style="float:left;">
          <a class="figure a-logo">
            <img
              id="logo_index"
              src="../../assets/mmm.liudutech.cn.login.jpg"
            />
          </a>
          <span class="des">
            让天下没有难做的电商
          </span>
        </div>
        <!-- nav+登录button -->
        <div style="float:right;width:760px;">
          <div style="float:left;width:670px;">
            <div
              class="nav"
              style="display:inline-block;"
              v-for="(item, index) in nav"
              :key="index"
            >
              <a
                :href="'#' + item.value"
                :class="item.active ? 'active' : ''"
                @click="changeNav(item.value)"
                >{{ item.title }}</a
              >
            </div>
          </div>
          <el-button type="primary" round plain>登录</el-button>
        </div>
      </div>
    </div>
    <!-- 头部固定栏 end -->

    <!-- index start -->
    <div class="banner" id="index">
      <el-carousel
        height="600px"
        indicator-position="none"
        ref="carousel"
        :interval="5000"
      >
        <el-carousel-item
          v-for="item in banner"
          :key="item.name"
          :name="item.name"
        >
          <div
            :style="{ backgroundImage: `url(${item.img})` }"
            class="bannerImg"
          ></div>
          <!-- <div class="bannerImg" style="width:100%;height:100%;"></div> -->
        </el-carousel-item>
      </el-carousel>
      <div class="indicator">
        <el-row>
          <el-col
            @click.native="indicatorChange(item.name)"
            :span="6"
            v-for="item in banner"
            :key="item.name"
            :style="
              item.name == 'first'
                ? {
                    borderLeft: '1px solid',
                    borderColor: 'rgba(255, 255, 255, 0.1)',
                  }
                : {}
            "
          >
            <span class="des1">{{ item.des1 }}</span
            ><br />
            <span class="des2">{{ item.des2 }}</span>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- index end -->
    <!-- safe start -->
    <div class="safe" id="safe">
      <div style="width: 1300px;margin: 0 auto;">
        <div class="title">五大安全保障措施</div>
        <div class="cardList">
          <el-card shadow="hover" v-for="item in safe" :key="item.background">
            <div class="icon" :style="{ background: item.background }">
              <el-image
                style="width: 82px; height: 82px"
                :src="item.imgurl"
                :fit="fit"
              ></el-image>
            </div>
            <div>
              <div class="des1">{{ item.des1 }}</div>
              <div class="des2">{{ item.des2 }}</div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
    <!-- safe end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        { title: "首页", value: "index", active: true },
        { title: "五大安全", value: "safe", active: false },
        { title: "超级验号", value: "verification", active: false },
        { title: "功能解析", value: "analysis", active: false },
        { title: "超级权重任务", value: "weight", active: false },
      ],
      banner: [
        {
          name: "first",
          img: require("../../assets/banner/banner5.png"),
          des1: "搜索入池飚升神器",
          des2: "助力商家快速突破运营瓶颈",
        },
        {
          name: "second",
          img: require("../../assets/banner/banner1.png"),
          des1: "告别没权重补单难",
          des2: "多维度精细化干预解决方案",
        },
        {
          name: "third",
          img: require("../../assets/banner/banner2.png"),
          des1: "解决资金顾虑",
          des2: "打破信任痛点,提升成交安全",
        },
        {
          name: "forth",
          img: require("../../assets/banner/banner3.png"),
          des1: "拒绝同地址管理难",
          des2: "大数据赋能，创新地址库验证",
        },
      ],
      safe: [
        {
          imgurl: require("../../assets/safe/bz-1.png"),
          background: "#09c152",
          des1: "类目限制",
          des2:
            "全网独家类目限制派单，自动抓取商家宝贝类目属性，匹配最佳人群，精确到3级子类目，确保买手不会重复下单同类目产品；严格控制商家产品关联度，根据淘宝内部类目复购比列，指定买手不同类目的接单数量限制，达到全网领先。",
        },
        {
          imgurl: require("../../assets/safe/bz-2.png"),
          background: "#22cbc4",
          des1: "运营团队",
          des2: "真实团队运营，操刀单品每日计划，严控流量来源转化。",
        },
        {
          imgurl: require("../../assets/safe/bz-3.png"),
          background: "#f95d60",
          des1: "账号限制",
          des2: "多样化的安全措施，系统与人工的多重把控，严守买号安全",
        },
        {
          imgurl: require("../../assets/safe/bz-4.png"),
          background: "#3b95f6",
          des1: "流程安全",
          des2: "通过多样化活动类型和活动流程的把控等，确保流程安全",
        },
        {
          imgurl: require("../../assets/safe/bz-5.png"),
          background: "#fc6b3f",
          des1: "资金安全",
          des2: "平台提供双重保障，让您的资金高枕无忧",
        },
      ],
    };
  },

  created() {},
  methods: {
    changeNav(val) {
      this.nav.forEach((item) => {
        item.value == val ? (item.active = true) : (item.active = false);
      });
    },
    indicatorChange(name) {
      this.$refs.carousel.setActiveItem(name);
    },
  },

  filters: {},
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  .header {
    height: 99px;
    line-height: 99px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #ededed;
    .content {
      margin: 0 auto;
      width: 1200px;
      .a-logo {
        position: relative;
        padding-right: 15px;
        display: inline-block;
      }
      .a-logo > img {
        vertical-align: middle;
      }
      .a-logo::after {
        display: block;
        content: "";
        width: 1px;
        height: 25px;
        position: absolute;
        top: 37px;
        right: 0;
        background-color: #e2e2e2;
      }
      .des {
        padding-left: 15px;
        color: #999;
        font-size: 13px;
      }

      .nav {
        a.active {
          color: #106acf;
          position: relative;
          border-bottom: 2px solid #106acf;
        }
        a {
          padding-bottom: 5px;
          margin: 0 20px;
          color: #333;
          text-decoration: none;
        }
      }
    }
  }
  .banner {
    min-width: 1200px;
    height: 608px;
    position: relative;
    padding-top: 100px;
    .bannerImg {
      width: 100%;
      height: 100%;
      -moz-background-size: 100% 100%;
      background-size: 100% 100%;
    }
    .indicator {
      position: absolute;
      width: 100%;
      bottom: 0;
      z-index: 9;
      background-color: rgba(255, 255, 255, 0.1);
      ::v-deep .el-row {
        margin: 0 auto;
        width: 1200px;
        .el-col {
          cursor: pointer;
          border-right: 1px solid;
          border-color: rgba(255, 255, 255, 0.1);
          padding: 30px 20px;
          color: #fff;
          text-align: center;
          .des1 {
            line-height: 30px;
          }
          .des2 {
            font-size: 14px;
            line-height: 30px;
          }
        }
      }
    }
  }
  .safe {
    background: #f7faff;
    overflow: hidden;
    height: 694px;
    .title {
      font-size: 32px;
      color: #000000;
      text-align: center;
      padding-top: 100px;
    }
    .cardList {
      padding-top: 56px;
      padding-bottom: 80px;
      display: flex;
      justify-content: space-between;
      ::v-deep .el-card {
        width: 222px;
        height: 410px;
        text-align: center;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        transition: all 0.1s;
        .el-card__body {
          padding: 0;
        }
        cursor: pointer;
        &:hover {
          transform: scale(1.05);
        }
        .icon {
          padding-top: 25px;
          padding-bottom: 30px;
        }
        .des1 {
          padding-top: 32px;
          font-size: 24px;
          color: #515151;
        }
        .des2 {
          padding: 14px 24px 0px 24px;
          font-size: 13px;
          color: #959595;
          text-align: justify;
        }
      }
    }
  }
}
</style>
