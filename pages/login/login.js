Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    var that = this;
    // 查看是否授权
    wx.getSetting({
      success: function (res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            success: function (res) {
              //从数据库获取用户信息
              that.queryUsreInfo();
              //用户已经授权过
              wx.switchTab({
                url: '/pages/login/login'
              })
            }
          });
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      //插入登录的用户的相关信息到数据库
      wx.request({
        url: 'http://shop/public/login/',
        data: {
         // openid: getApp().globalData.openid,
          //nickName: e.detail.userInfo.nickName,
         // avatarUrl: e.detail.userInfo.avatarUrl,
          //province: e.detail.userInfo.province,
         // city: e.detail.userInfo.city
         
        },
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log("插入小程序登录用户信息成功！");
          //console.log("openid:" + openid);
          console.log("nickName:" + nickName);
          console.log("avatarUrl:" + avatarUrl);
          console.log("province:" + province);
          console.log("city:" + city);
          //从数据库获取用户信息
          that.queryUsreInfo();
         
        }
      });
      //授权成功后，跳转进入小程序首页
      wx.switchTab({
        url: '/pages/login/login'
      })
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击了“返回授权”')
          }
        }
      })
    }
  },
  //获取用户信息接口
  queryUsreInfo: function () {
    wx.request({
      url: 'http://shop/public/login/',
      data: {
        openid: getApp().globalData.openid
        //openid: '111'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log('res.data:' + res.data.openid);
        getApp().globalData.userInfo = res.data;
      }
    });
  },

})
