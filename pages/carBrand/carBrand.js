// pages/carBrand/carBrand.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    brands: [],
    cache: {},
    toView: 'A',
    height: app.globalData.height,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const brands = [
      {
        cate: 'A',
        list: ['ALPINA', 'ARCFOX', '奥迪']
      },
      {
        cate: 'B',
        list: ['巴博斯', '宝骏', '宝马', '宝沃', '保时捷']
      },
      {
        cate: 'M',
        list: ['MINI', '马自达', '名爵']
      },
      {
        cate: 'N',
        list: ['纳智捷', '南京京龙']
      },
      {
        cate: 'P',
        list: ['帕加尼']
      },
      {
        cate: 'Q',
        list: ['奇瑞', '启辰', '起亚', '前途']
      },
      {
        cate: 'R',
        list: ['日产', '荣威', '如虎', '瑞麒']
      },
      {
        cate: 'S',
        list: ['smart', '三菱', '上汽大通', '斯柯达']
      },
      {
        cate: 'W',
        list: ['五菱汽车']
      },
      {
        cate: 'Z',
        list: ['之诺', '知豆', '中华', '众泰']
      },
    ]
    setTimeout(() => {
      this.setData({
        brands
      })
    }, 200)
  },
  /**
   * 点击字母 滚动页面
   */
  go(e) {
    var id = e.currentTarget.dataset.id
    wx.showToast({
      title: id,
      icon: 'none',
      duration: 500
    })
    this.setData({
      toView: id
    })
  },
  /**
   * 点击品牌 显示该品牌车辆所有型号
   */
  showCarModel(e) {
    wx.navigateTo({
      url: 'carModel/carModel?car=' + e.currentTarget.dataset.car,
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