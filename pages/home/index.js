// pages/home/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../assets/img/swiper1.jpg',
      '../../assets/img/test.jpg',
      '../../assets/img/swiper1.jpg'
    ],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    iconArray: [
      {
        "iconUrl": '../../assets/img/icon-qiandao.png',
        "iconText": '签到'
      },
      {
        "iconUrl": '../../assets/img/icon-fujin.png',
        "iconText": '附近'
      },
      {
        "iconUrl": '../../assets/img/icon-zhanhui.png',
        "iconText": '游展'
      },
      {
        "iconUrl": '../../assets/img/icon-fuli.png',
        "iconText": '福利'
      },
      {
        "iconUrl": '../../assets/img/icon-muma.png',
        "iconText": '玩乐'
      },
      {
        "iconUrl": '../../assets/img/icon-xingxing.png',
        "iconText": '周边'
      },
      {
        "iconUrl": '../../assets/img/icon-tiyu.png',
        "iconText": '体育'
      },
      {
        "iconUrl": '../../assets/img/icon-qinzi.png',
        "iconText": '亲子'
      }
    ],
    toutiaoArr:[
      {
        "title": '智能猫眼 wifi电子猫眼 家用智能无线可',
        "content": '体育'
      },
      {
        "title": '智能猫眼 wifi电子猫眼 家用智能无线可视',
        "content": '体育'
      },
      {
        "title": '智能猫眼 wifi电子猫眼 家用智能无3',
        "content": '体育'
      }
    ],

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