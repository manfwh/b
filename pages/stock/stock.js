// pages/finance/finance.js
var app = getApp();
var { formatTime } = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selected: 0,
    userinfo: {},
    incomeTotal: 0,
    storedTotal: 0,
    incomeList: [
      {
        code: new Date().getTime(),
        title: '马牌轮胎',
        content: '大众帕萨特2.0T 更换机油、气阀等重要配件更换机油、气阀等重要配件',
        user: 'Jim Green Jams',
        date: formatTime(new Date()),
        moneny: 800
      },
      {
        code: new Date().getTime(),
        title: '壳牌机油4升',
        content: '五菱宏光更换离合器四件套',
        user: 'Jim Green Jams',
        date: formatTime(new Date()),
        moneny: 600
      },
      {
        code: new Date().getTime(),
        title: '前制动蹄总成',
        content: '凯美瑞更换雨刮片',
        user: 'Jim Green Jams',
        date: formatTime(new Date()),
        moneny: 60
      }
    ],
    storedList: [
      {
        level: 2,
        code: new Date().getTime(),
        title: '机油滤清器',
        content: '凯美瑞更换雨刮片',
        user: 'Jim Green Jams',
        date: formatTime(new Date()),
        moneny: 100
      },
      {
        level: 3,
        code: new Date().getTime(),
        title: '后轮制动鼓',
        content: '横幅广告公司的',
        user: 'Jim Green Jams',
        date: formatTime(new Date()),
        moneny: 400
      }
    ],


  },
  tab(e) {
    this.setData({
      selected: e.currentTarget.dataset.index
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
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
    wx.request({
      url: 'http://127.0.0.1:7001/incomeList',
      success: ({ data }) => {
        this.setData({
          incomeList: data,
          incomeTotal: data.reduce((total, { moneny }) => total += moneny, 0),
        })
      }
    })
    this.setData({
      // incomeTotal: this.data.incomeList.reduce((total, { moneny }) => total += moneny, 0),
      storedTotal: this.data.storedList.reduce((total, { moneny }) => total += moneny, 0)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})