var { roundRect } = require('../../utils/util.js');
import * as echarts from '../../ec-canvas/echarts';
function setOption(chart) {

  var option = {
    title: {
    },
    grid: {
      bottom: 30    // 图表距离底部的距离
    },
    color: ['#3567e5', '#eae558', '#25c379'], // 依次循环从该列表中取颜色作为系列颜色
    legend: {   
      data: ['收益', '核销', '储值'],
      textStyle: '#85878d'
    },
    textStyle: {
      color: '#85878d'      
    },
    xAxis: {
      name: '号',
      data: ["1", "2", "3", "4", "5", "6"]
    },
    yAxis: {
      name: '万'
    },
    series: [
      {
        name: '收益',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20],
      },
      {
        name: '核销',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 90],
      },
      {
        name: '储值',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 90],
      }
    ]
  };
  chart.setOption(option);
}
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // userinfo: {}
    ec: {},
  },
  /**
   * 跳转页面 参数 url 
   */
  navigateTo: function (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.ecComponent = this.selectComponent('#mychart-dom-bar');
    this.ecComponent.init((canvas, width, height) => {
      // 获取组件的 canvas、width、height 后的回调函数
      // 在这里初始化图表
      const chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      setOption(chart);

      // 将图表实例绑定到 this 上，可以在其他成员函数（如 dispose）中访问
      this.chart = chart;

      this.setData({
        isLoaded: true,
        isDisposed: false
      });

      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return chart;
    });
   
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
    wx.showActionSheet({
      itemList: [
        '老板', '商家'
      ],
      success({ tapIndex }) {
        if (tapIndex == 1) {
          wx.redirectTo({
            url: '../mdhx/mdhx',
          })
        }
      }
    })
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