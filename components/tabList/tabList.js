// components/tabList.js
var app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    userinfo: {},
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tab(e) {
      this.setData({
        selected: e.currentTarget.dataset.index
      })
    }
  },
  attached(e) {
    if (app.globalData.userInfo) {
      this.setData({
        userinfo: app.globalData.userInfo
      })
    } else {
      wx.getUserInfo({
        success: res => {
          this.setData({
            userinfo: res.userInfo
          })
        }
      })
    }
  }
})
