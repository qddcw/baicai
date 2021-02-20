import Mock from "mockjs";

const login = {
  code: 2000, // 状态码
  flag: true,
  message: "验证成功",
  data: {
    token: "admin",
  },
};
Mock.mock("/user/login", "post", login);

const logout = {
  code: 2000, // 状态码
  flag: true,
  message: "验证成功",
  data: {
    token: "admin",
  },
};
Mock.mock("/user/logout", "post", logout);

const info = {
  code: 2000,
  flag: true,
  message: "获取用户信息成功",
  data: {
    id: 10,
    cardNum: "test01", //大于 1000 的正整数
    name: "测试会员",
    birthday: "@date",
    "phone|11": "@integer(0,9)", // 11 个位数字
    integral: "@integer(0, 500)",
    money: "@float(0, 100, 1, 3)", // 0-1000 小数,1-3 位小数位
    "payType|1": ["1", "2", "3", "4"],
    address: "@county(true)",
  },
};
Mock.mock(`/user/info`, "post", info);

const getMenu = {
  code: 2000, // 状态码
  flag: true,
  message: "菜单获取成功",
  data: {
    menu: [
      {
        icon: "el-icon-s-home",
        path: "/home",
        title: "控制台",
        hasChildren: false,
      },
      {
        icon: "el-icon-s-release",
        path: "/release",
        title: "发布管理",
        hasChildren: true,
        children: [
          {
            path: "/release/addSale",
            title: "新建销售计划",
          },
          {
            path: "/release/addFlow",
            title: "新建流量计划",
          },
          {
            path: "/release/saleList",
            title: "销售任务列表",
          },
          {
            path: "/release/flowList",
            title: "流量任务列表",
          },
          {
            path: "/release/review",
            title: "追评任务",
          },
        ],
      },
      {
        icon: "el-icon-s-finance",
        path: "/finance",
        title: "财务管理",
        hasChildren: true,
        children: [
          {
            path: "/member",
            title: "本金充值",
          },
          {
            path: "/member",
            title: "佣金充值",
          },
          {
            path: "/member",
            title: "收费标准",
          },
          {
            path: "/member",
            title: "资金明细",
          },
          {
            path: "/member",
            title: "银行卡管理",
          },
        ],
      },
      {
        icon: "el-icon-s-claim",
        path: "/buyNumber",
        title: "待审核买号",
        hasChildren: false,
      },
      {
        icon: "el-icon-s-marketing",
        path: "/salesVolume",
        title: "销量任务管理",
        hasChildren: true,
        children: [
          {
            path: "/member",
            title: "全部任务",
          },
          {
            path: "/member",
            title: "待审核",
          },
          {
            path: "/member",
            title: "待评价",
          },
          {
            path: "/member",
            title: "已评价",
          },
          {
            path: "/member",
            title: "投诉中",
          },
          {
            path: "/member",
            title: "审核失败",
          },
          {
            path: "/member",
            title: "已完成",
          },
          {
            path: "/member",
            title: "金额异常",
          },
        ],
      },
      {
        icon: "el-icon-s-platform",
        path: "/flow",
        title: "流量任务管理",
        hasChildren: true,
        children: [
          {
            path: "/member",
            title: "待审核",
          },
          {
            path: "/member",
            title: "已完成",
          },
          {
            path: "/member",
            title: "投诉中",
          },
          {
            path: "/member",
            title: "审核失败",
          },
        ],
      },
      {
        icon: "el-icon-s-order",
        path: "/business",
        title: "商返任务管理",
        hasChildren: true,
        children: [
          {
            path: "/member",
            title: "任务列表",
          },
          {
            path: "/member",
            title: "商家返款",
          },
        ],
      },
      {
        icon: "el-icon-s-promotion",
        path: "/deliver",
        title: "发货管理",
        hasChildren: false,
      },
      {
        icon: "el-icon-s-shop",
        path: "/shop",
        title: "店铺管理",
        hasChildren: true,
        children: [
          {
            path: "/member",
            title: "店铺管理",
          },
        ],
      },
      {
        icon: "el-icon-s-cooperation",
        path: "/extension",
        title: "推广管理",
        hasChildren: false,
      },
      {
        icon: "el-icon-user-solid",
        path: "/blacklist",
        title: "黑名单管理",
        hasChildren: false,
      },
      {
        icon: "el-icon-info",
        path: "/feedback",
        title: "商家反馈",
        hasChildren: false,
      },
    ],
  },
};
Mock.mock(`/user/getMenu`, "post", getMenu);

const getAllMembers = {
  code: 2000,
  flag: true,
  message: "查询成功",
  data: {
    "rows|25": [
      {
        "id|+1": 10,
        "longitude|117-120.5": 1, //大于 1000 的正整数
        "latitude|29-33.5": 1,
        "right|1": ["1", "2", "3"],
      },
    ],
  },
};
Mock.mock(`/member/list/getAllMembers`, "post", getAllMembers);

const indexSearch = {
  code: 2000,
  flag: true,
  message: "查询成功",
  data: {
    "rows|10": [
      {
        "id|+1": 10,
        cardNum: "@integer(10000)", //大于 1000 的正整数
        name: "@cname",
        birthday: "@date",
        "phone|11": "@integer(0,9)", // 11 个数字 0-9 间的数字
        integral: "@integer(0, 500)",
        money: "@float(0, 1000, 1, 3)", // 0-1000 小数,1-3 位小数位
        "payType|1": ["1", "2", "3", "4"], // 4 选 其 1
        address: "@county(true)",
        "right|1": ["1", "2", "3"],
        show: false,
      },
    ],
    "total|20-200": 200,
  },
};
Mock.mock(`/member/list/indexSearch`, "post", indexSearch);
//staff
const staffsearch = {
  code: 2000,
  flag: true,
  message: "查询成功",
  data: {
    "rows|10": [
      {
        "id|+1": 10,
        "username|5": "@word(1)",
        name: "@cname",
        age: "@integer(0,120)",
        "mobile|11": "@integer(0,9)",
        salary: "@float(8000, 20000, 1, 2)",
        entryDate: "@date",
      },
    ],
    "total|20-200": 200,
  },
};
Mock.mock(`/staff/list/search`, "post", staffsearch);

const staffadd = {
  code: 2000, // 状态码
  flag: true,
  message: "新增成功",
};
Mock.mock(`/staff/add`, "post", staffadd);

const staffedit = {
  code: 2000, // 状态码
  flag: true,
  message: "修改成功",
};
Mock.mock(`/staff/edit`, "post", staffedit);

const staffdel = {
  code: 2000, // 状态码
  flag: true,
  message: "删除成功",
};
Mock.mock(`/staff/del`, "post", staffdel);

//supplier
const suppliersearch = {
  code: 2000,
  flag: true,
  message: "查询成功",
  data: {
    "rows|10": [
      {
        "id|+1": 10,
        supplier: "@ctitle",
        linkman: "@cname",
        "phone|11": "@integer(0, 9)", // 11个数字0-9间的数字
        remark: "@csentence(5, 15)",
      },
    ],
    "total|20-200": 200,
  },
};
Mock.mock(`/supplier/list/search`, "post", suppliersearch);

const supplieradd = {
  code: 2000, // 状态码
  flag: true,
  message: "新增成功",
};
Mock.mock(`/supplier/add`, "post", supplieradd);

const supplieredit = {
  code: 2000, // 状态码
  flag: true,
  message: "修改成功",
};
Mock.mock(`/supplier/edit`, "post", supplieredit);

const supplierdel = {
  code: 2000, // 状态码
  flag: true,
  message: "删除成功",
};
Mock.mock(`/supplier/del`, "post", supplierdel);

//goods
const goodssearch = {
  code: 2000,
  flag: true,
  message: "查询成功",
  data: {
    "rows|10": [
      {
        "id|+1": 10,
        "name|5": "@cword",
        code: "@word",
        spec: "@integer(0,9)L", // 11个数字0-9间的数字
        retailPrice: "@float(0, 100, 1, 3)", // 0-1000小数,1-3位小数位
        purchasePrice: "@float(0, 100, 1, 3)", // 0-1000小数,1-3位小数位
        storageNum: "@integer(0,500)", // 4选 其1
        supplierName: "@ctitle",
      },
    ],
    "total|20-200": 200,
  },
};
Mock.mock(`/goods/list/search`, "post", goodssearch);

const goodsadd = {
  code: 2000, // 状态码
  flag: true,
  message: "新增成功",
};
Mock.mock(`/goods/add`, "post", goodsadd);

const goodsedit = {
  code: 2000, // 状态码
  flag: true,
  message: "修改成功",
};
Mock.mock(`/goods/edit`, "post", goodsedit);

const goodsdel = {
  code: 2000, // 状态码
  flag: true,
  message: "删除成功",
};
Mock.mock(`/goods/del`, "post", goodsdel);

//member

const membersearch = {
  code: 2000,
  flag: true,
  message: "查询成功",
  data: {
    "rows|10": [
      {
        "id|+1": 10,
        cardNum: "@integer(10000)", //大于1000的正整数
        name: "@cname",
        birthday: "@date",
        "phone|11": "@integer(0,9)", // 11个数字0-9间的数字
        integral: "@integer(0, 500)",
        money: "@float(0, 1000, 1, 3)", // 0-1000小数,1-3位小数位
        "payType|1": ["1", "2", "3", "4"], // 4选 其1
        address: "@county(true)",
      },
    ],
    "total|20-200": 200,
  },
};
Mock.mock(`/member/list/search`, "post", membersearch);

const memberadd = {
  code: 2000, // 状态码
  flag: true,
  message: "新增成功",
};
Mock.mock(`/member/add`, "post", memberadd);

const memberedit = {
  code: 2000, // 状态码
  flag: true,
  message: "修改成功",
};
Mock.mock(`/member/edit`, "post", memberedit);

const memberdel = {
  code: 2000, // 状态码
  flag: true,
  message: "删除成功",
};
Mock.mock(`/member/del`, "post", memberdel);

//home

const homeGetAllData = {
  code: 2000,
  flag: true,
  message: "查询成功",
  data: {
    benjin: 2.03,
    yongjin: 3.02,
    "gonggao|2": [
      {
        "id|+1": 11,
        content: "@datetime('yyyy-MM-dd HH:mm:ss')  @ctitle(10,15)",
      },
    ],
    xiaoliang: 0,
    liulan: 0,
    pingjia: 0,
    xiaoshou: 0,
    liuliang: 0,
    zifan: 0,
  },
};
Mock.mock(`/api/home/homeGetAllData`, "post", homeGetAllData);
export default Mock;
