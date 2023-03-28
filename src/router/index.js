module.exports = {
  easycom: {
    "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
  },
  // "pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
  //   {
  //     "path": "pages/index/index",
  //     "style": {
  //       "navigationBarTitleText": "首页"
  //     }
  //   },
  //   {
  //     "path": "pages/live/index",
  //     "style": {
  //       "navigationBarTitleText": "直播开奖"
  //     }
  //   },
  //   {
  //     "path": "pages/info/index",
  //     "style": {
  //       "navigationBarTitleText": "消息"
  //     }
  //   },
  //   {
  //     "path": "pages/my/index",
  //     "style": {
  //       "navigationBarTitleText": "我的"
  //     }
  //   },
  //   {
  //     "path": "pages/login/index",
  //     "style": {
  //       "navigationBarTitleText": "登录"
  //     }
  //   }
  // ],
  tabBar: {
    color: "#7a7e83",
    selectedColor: "#0faeff",
    backgroundColor: "#ffffff",
    list: [{
      pagePath: "pages/index/index",
      text: "首页",
      iconPath: "static/index.svg",
      selectedIconPath: "static/index.svg"
    }, {
      pagePath: "pages/live/index",
      text: "直播开奖",
      iconPath: "static/live.svg",
      selectedIconPath: "static/live.svg"
    }, {
      pagePath: "pages/info/index",
      text: "消息",
      iconPath: "static/info.svg",
      selectedIconPath: "static/info.svg"
    }, {
      pagePath: "pages/my/index",
      text: "我的",
      iconPath: "static/my.svg",
      selectedIconPath: "static/my.svg"
    }]
  },
  globalStyle: {
    navigationBarTextStyle: "black",
    navigationBarTitleText: "uni-app",
    navigationBarBackgroundColor: "#F8F8F8",
    backgroundColor: "#F8F8F8"
  }
}
