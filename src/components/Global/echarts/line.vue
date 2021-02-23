<!--
 * @Description: 
 * @Version: 2.0
 * @Autor: DCW
 * @Date: 2021-02-23 09:41:52
 * @LastEditors: DCW
 * @LastEditTime: 2021-02-23 09:49:48
-->
<template>
  <div ref="dom" class="chartline"></div>
</template>

<script>
import echarts from "echarts";
import * as utils from "../../../utils/utils";
export default {
  props: ["echartdata"],
  data() {
    return {
      dom: null
    };
  },
  methods: {
    resize() {
      this.dom.resize();
    }
  },
  mounted() {
    this.$nextTick(() => {
      // this.dom = echarts.init(this.$refs.dom, "dark");
      this.dom = echarts.init(this.$refs.dom);
      this.dom.setOption(this.echartdata);
      utils.on(window, "resize", this.resize);
    });
  },
  beforeDestroy() {
    utils.off(window, "resize", () => {});
  },
  watch: {
    echartdata(newval) {
      this.dom.setOption(this.echartdata);
    }
  }
};
</script>

<style scoped lang="scss">
.chartline {
  width: 100%;
  height: 100%;
}
</style>