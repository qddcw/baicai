/*
 * @Description:
 * @Version: 2.0
 * @Autor: DCW
 * @Date: 2021-02-20 10:10:15
 * @LastEditors: DCW
 * @LastEditTime: 2021-02-20 10:11:10
 */
import $axios from "@/utils/request";

export default {
  homeGetAllData(obj) {
    return $axios({
      url: "/api/home/homeGetAllData",
      method: "post",
      data: obj,
    });
  },
};
