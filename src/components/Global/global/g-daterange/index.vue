<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: DCW
 * @Date: 2021-02-22 16:28:48
 * @LastEditors: DCW
 * @LastEditTime: 2021-02-22 16:37:48
-->
<template>
  <el-date-picker
    :type="type"
    align="right"
    v-bind="$attrs"
    :value="value"
    v-on="$listeners"
    :picker-options="pickerOptions"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
  >
  </el-date-picker>
</template>

<script>
const pickerOptions = {
  shortcuts: [
    {
      text: "最近一周",
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
        picker.$emit("pick", [start, end]);
      },
    },
    {
      text: "最近一个月",
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
        picker.$emit("pick", [start, end]);
      },
    },
    {
      text: "最近三个月",
      onClick(picker) {
        const end = new Date();
        const start = new Date();
        start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
        picker.$emit("pick", [start, end]);
      },
    },
  ],
};
export default {
  name: "g-daterange",
  props: {
    value: {
      default: "",
    },
    type:{
      default:'datetimerange'
    }
  },
  data() {
    return {
      pickerOptions,
    };
  },
};
</script>

<style scoped></style>
