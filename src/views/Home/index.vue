<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: DCW
 * @Date: 2021-02-04 11:10:55
 * @LastEditors: DCW
 * @LastEditTime: 2021-02-22 16:43:35
-->
<template>
  <div class="content">
    <div class="top">
      <div style="width:25%">
        <div>
          <span>本金余额&nbsp;(元)</span>
          <div class="line details" style="padding-bottom:10px;">
            <div style="color: #ee4a4a;line-height:29px;">
              {{ initData.benjin }}
            </div>
            <el-button size="mini" type="primary">充值</el-button>
          </div>
        </div>
        <div style="margin-top:10px;">
          <span>佣金余额&nbsp;(元)</span>
          <div class="details">
            <div style="color: #ee4a4a;line-height:29px;">
              {{ initData.yongjin }}
            </div>
            <el-button size="mini" type="primary">充值</el-button>
          </div>
        </div>
      </div>
      <div style="width:36%">
        <div class="title line">
          <span class="board">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;公告</span>
          <span class="more">查看更多</span>
        </div>
        <div
          v-for="(item, index) in initData.gonggao"
          :key="index"
          class="line"
          style="padding:10px 0;"
        >
          <span style="cursor:pointer;" @click="warn(item.id)">{{
            item.content
          }}</span>
        </div>
      </div>
      <div style="width:36%">
        <span>快捷入口</span>
        <div class="menu">
          <div style="background:linear-gradient(-90deg,#409eff,#2989ed)">
            新建销量任务
          </div>
          <div style="background:linear-gradient(-90deg,#87d2f2,#59abcd)">
            新建浏览任务
          </div>
          <div style="background:linear-gradient(-90deg,#f19067,#ea7340)">
            追平任务管理
          </div>
          <div style="background:linear-gradient(-90deg,#86a0fd,#6684f2)">
            快递管理
          </div>
        </div>
      </div>
    </div>
    <div class="step">
      <div
        class="line"
        style="line-height: 40px;font-size: 16px;font-weight: bolder"
      >
        新手发布任务流程
      </div>
      <div style="display:flex;flex-wrap: wrap;margin-top:10px;">
        <div v-for="(item, index) in step" :key="index">
          <div class="stepItem">{{ item }}</div>
          <div class="next" v-if="index != step.length - 1"></div>
        </div>
      </div>
    </div>
    <div class="cards">
      <div
        v-for="(item, index) in cardsInfo"
        :key="index"
        class="card"
        :style="{ 'border-color': item.color }"
      >
        <div class="title">{{ item.title }}</div>
        <div :class="'data ' + 'detail' + index">
          <span
            :style="{
              color: item.color,
              'font-size': '24px',
              'padding-left': '60px',
            }"
            >{{ item.data }}</span
          ><span style="font-size:15px;margin-left:3px;">单</span>
        </div>
      </div>
    </div>
    <div class="task">
      <div class="echarts">
        <div class="title">
          <span style="font-weight: bolder;line-height: 40px;"
            >任务完成数据</span
          >
          <div style="float:right;">
            日期筛选：<g-daterange
              :type="'daterange'"
              v-model="daterange"
            ></g-daterange
            ><el-button type="primary">查询</el-button>
          </div>
        </div>
        <div class='echart'>
          
        </div>
      </div>
      <div class="table"></div>
    </div>
  </div>
</template>

<script>
import homeApi from "@/api/home.js";
//import styleJson from "../../assets/custom_map_config.json";
export default {
  data() {
    return {
      initData: {},
      step: [
        "1.账户本金/佣金充值",
        "2.绑定店铺等待审核",
        "3.新建计划",
        "4.任务类型选择",
        "5.任务规则设置",
        "6.增值服务选择",
        "7.完成支付",
        "8.发布完成",
      ],
      cardsInfo: [
        {
          color: "#409eff",
          title: "销量任务待审核",
          data: 0,
          path: "",
        },
        {
          color: "#85d1f1",
          title: "浏览任务待审核",
          data: 0,
          path: "",
        },
        {
          color: "#5599de",
          title: "评价待审核",
          data: 0,
          path: "",
        },
        {
          color: "#6684f2",
          title: "销量投诉待审核",
          data: 0,
          path: "",
        },
        {
          color: "#86d2f2",
          title: "流量投诉待审核",
          data: 0,
          path: "",
        },
        {
          color: "#409eff",
          title: "自返任务待返款",
          data: 0,
          path: "",
        },
      ],
      daterange: [],
    };
  },
  created() {
    this.homeGetAllData();
  },
  computed: {},
  methods: {
    homeGetAllData() {
      homeApi.homeGetAllData({}).then((res) => {
        console.log("home初始data", res.data.data);
        this.initData = res.data.data;
      });
    },
  },
  filters: {
    rightFilter(right) {
      let changeType = "";
      switch (right) {
        case "1":
          changeType = "普通会员";
          break;
        case "2":
          changeType = "高级会员";
          break;
        case "3":
          changeType = "超级会员";
          break;
      }
      return changeType;
    },
  },
};
</script>

<style scoped lang="scss">
.content {
  .line {
    border-bottom: 1px solid #dcdfe6;
  }
  .top {
    display: flex;
    justify-content: space-between;
    & > div {
      background-color: #fff;
      padding: 20px;
      box-sizing: border-box;
      .details {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
      }
      .title {
        position: relative;
        padding-bottom: 10px;
        .board:before {
          content: "";
          position: absolute;
          left: 0;
          top: 3px;
          background: url("../../assets/home/i-loud.png") no-repeat;
          width: 18px;
          height: 15px;
        }
        .more {
          position: absolute;
          right: 0;
          color: rgb(153, 153, 153);
          cursor: pointer;
          &:hover {
            color: #777;
          }
        }
      }
      .menu {
        margin-top: 15px;
        div {
          display: inline-block;
          width: 130px;
          height: 45px;
          border-radius: 8px;
          line-height: 45px;
          color: #fff;
          margin-right: 7px;
          text-indent: 12px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
        }
        div:after {
          content: "";
          position: absolute;
          right: 12px;
          top: 15px;
          background: url("../../assets/home/i-arrow-x.png") no-repeat;
          width: 16px;
          height: 16px;
        }
      }
    }
  }
  .step {
    background: #fff;
    margin-top: 10px;
    margin-bottom: 13px;
    padding: 10px 20px;
    .next {
      float: left;
      background: url("../../assets/home/i-arrow.png") no-repeat;
      width: 48px;
      height: 22px;
      margin-top: 8px;
      margin-bottom: 8px;
      margin-right: 15px;
    }
    .stepItem {
      float: left;
      width: 130px;
      height: 38px;
      line-height: 36px;
      font-size: 12px;
      text-align: center;
      font-weight: bolder;
      padding: 0 5px;
      border: 1px solid #e9e9e9;
      border-radius: 3px;
      margin-right: 15px;
      margin-bottom: 8px;
    }
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    .card {
      background: #fff;
      border-top: 4px solid #409eff;
      border-radius: 5px;
      margin-right: 20px;
      width: 15%;
      min-width: 200px;
      height: 128px;
      text-align: center;
      -moz-box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
      -webkit-box-shadow: 0px 3px 10px rgb(0 0 0 / 10%);
      box-shadow: 0px 3px 10px rgb(0 0 0 / 10%);
      margin-bottom: 10px;
      .title {
        margin-top: 20px;
        margin-bottom: 25px;
        font-size: 15px;
        line-height: 16px;
      }
      .data {
        position: relative;
        cursor: pointer;
      }
      .data:before {
        content: "";
        position: absolute;
        top: -9px;
        width: 48px;
        height: 48px;
        background: url("../../assets/home/i-c-index.png") no-repeat;
      }
      .detail1:before {
        background: url("../../assets/home/i-c-index.png") no-repeat -48px 0;
      }
      .detail2:before {
        background: url("../../assets/home/i-c-index.png") no-repeat -96px 0;
      }
      .detail3:before {
        background: url("../../assets/home/i-c-index.png") no-repeat -144px 0;
      }
      .detail4:before {
        background: url("../../assets/home/i-c-index.png") no-repeat -192px 0;
      }
    }
  }
  .task {
    display: flex;
    justify-content: space-between;
    margin-bottom:15px;
    .echarts {
      width: 50%;
      height: 400px;
      margin-right: 10px;
      background-color: #fff;
      box-sizing: border-box;
      padding: 10px 10px 0 20px;
    }
    .table {
      width: 50%;
      height: 400px;
      background-color: #fff;
    }
  }
}
</style>
