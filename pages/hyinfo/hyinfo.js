// pages/hyxf/hyxf.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    input: '',        // 搜索框值
    selected: 0,
    consumption: [],  // 消费记录
    stored: [],       // 储值记录
    consumptionTotal: 0,
    storedTotal: 0,
    searchHandle: 1
  },
  searchHandle: function (e) {
    if (!this.data.input) return
    wx.showLoading({
      title: '正在搜索...',
      mask: true
    })
    console.log(this.data.input)
    setTimeout(() => {
      wx.hideLoading();
      this.setData({
        hyinfo: true,
        input: ''
      })
    }, 500)
  },
  /**
   * 搜索框失去焦点后 更新 input值
   */
  updateInput(e) {
    this.data.input = e.detail.value;
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(() => {
      const consumption = [
        {
          title: '到店汽车常规保养一次',
          content: '大众帕萨特2.0T 更换机油、气阀等重要配件...',
          code: new Date().getTime(),
          date: new Date().getTime(),
          moneny: 800
        },
        {
          title: '到店汽车常规保养一次',
          content: '大众帕萨特2.0T 更换机油、气阀等重要配件...',
          code: new Date().getTime(),
          date: new Date().getTime(),
          moneny: 800
        }
      ]
      const stored = [
        {
          title: '到店汽车充值500元',
          content: '大众帕萨特2.0T 更换机油、气阀等重要配件...',
          code: new Date().getTime(),
          date: new Date().getTime(),
          moneny: 500
        },
        {
          title: '到店汽车充值500元',
          content: '大众帕萨特2.0T 更换机油、气阀等重要配件...',
          code: new Date().getTime(),
          date: new Date().getTime(),
          moneny: 500
        }
      ]
      this.setData({
        consumption,
        stored,
        consumptionTotal: consumption.reduce((total, { moneny }) => total += moneny, 0),
        storedTotal: stored.reduce((total, { moneny }) => total += moneny, 0)
      })
    }, 200)
  },
  tab(e) {
    this.setData({
      selected: e.currentTarget.dataset.index
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