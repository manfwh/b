// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btnDisabled: true,
    payValue: '',
    loading: false,
    loadValue: '',
    success: false,
    orderNumber: null
  },
  /**
   * input事件
   */
  inputHandle(e) {
    if(e.detail.value) {
      this.setData({
        btnDisabled: false,
        payValue: e.detail.value
      })
    } else {
      this.setData({
        btnDisabled: true
      })
    }
  },
  /**
   * 支付
   */
  payHandle(e) {
    if(this.data.success) {
      wx.redirectTo({
        url: '/pages/success/success?orderNumber=' + this.data.orderNumber
      })
      return
    }
    var ret=/^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
    if(ret.test(this.data.payValue)) {
      this.setData({
        loading: true,
        loadValue: '等待确认'
      })
      setTimeout(()=>{
        this.setData({
          loadValue: '完成',
          loading: false,
          success: true,
          orderNumber: new Date().getTime()
        })
      }, 2000)
    } else {
      wx.showToast({
        icon: 'none',
        title: '请输入正确的金额',
      })
    }
    console.log(this.data.payValue)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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