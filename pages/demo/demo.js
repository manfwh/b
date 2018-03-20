//index.js
const app = getApp()

Page({
  data: {
    letter_list: [],
    info_list: [],
    hide: true,
    active: false,
    toView: 'A',
    curView: 'A',
    letter_height: 18
  },
  onLoad: function () {
    this.active = false;
    this.timer = null;
    var letter_list = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var info_list = [];
    for (var i = 0; i < 26; i++) {
      var obj = {};
      obj.id = letter_list[i];
      obj.desc = '这是一个用于测试的DEMO。1.目标是用于实现微信好友列表的点击首字母跳转到对应好友位置。2.目标是用于实现微信好友列表的点击首字母跳转到对应好友位置';
      info_list.push(obj);
    }
    this.setData({
      height: app.globalData.height,
      info_list: info_list,
      letter_list: letter_list,
      sHeight: 100 * 26 + 25
    });
  },

  start: function (e) {
    this.setData({
      active: true,
      hide: false
    })
  },
  end: function (e) {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    var moveY = e.changedTouches["0"].clientY - 18, that = this;
    var curIndex = parseInt(moveY / 18);
    var view = this.data.letter_list[curIndex];
    this.setData({
      toView: view,
      active: false
    });
    if (!this.timer) {
      this.timer = setTimeout(function () {
        that.setData({
          hide: true
        })
        that.timer = null;
      }, 1000);
    }
  },
  move: function (e) {
    var moveY = e.changedTouches["0"].clientY - 18;
    var curIndex = parseInt(moveY / 18);
    var view = this.data.letter_list[curIndex];
    this.setData({
      curView: view
    })
  },
  down: function (e) {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    var index = e.currentTarget.dataset.index,
      that = this;
    if (index != 999) {
      var view = this.data.letter_list[index];
      this.setData({
        toView: view,
        curView: view
      })
    } else {
      this.setData({
        toView: 'A',
        curView: '☆'
      })
    }
    if (!this.timer) {
      this.timer = setTimeout(function () {
        that.setData({
          hide: true
        });
        that.timer = null;
      }, 1000);
    }
  }
})