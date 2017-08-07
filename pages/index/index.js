//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    list:[],
    url:"",
    imgUrls: [
      'https://y.gtimg.cn/music/photo_new/T003R720x288M000004dDljn45coxZ.jpg?max_age=2592000&max_age=2592000',
      'https://y.gtimg.cn/music/photo_new/T003R720x288M000004Q0SZd0XJCpE.jpg?max_age=2592000&max_age=2592000',
      'https://y.gtimg.cn/music/photo_new/T003R720x288M000001ujQ0X3eRMU4.jpg?max_age=2592000&max_age=2592000',
      'https://y.gtimg.cn/music/photo_new/T003R720x288M000003JzQWU3qjfQb.jpg?max_age=2592000&max_age=2592000',
      'https://y.gtimg.cn/music/photo_new/T003R720x288M000004Hiz2I1ZGjrJ.jpg?max_age=2592000&max_age=2592000'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },
  //事件处理函数
  bindViewTap: function(e) {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  click: function (e) {
    console.log(e.currentTarget.dataset.index)
    this.audioCtx = wx.createAudioContext('myAudio')
    this.audioCtx.play()
    var songUrl = e.currentTarget.dataset.index;
    this.setData({
      url: e.currentTarget.dataset.index
    })
   
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    wx.request({
      url: 'https://route.showapi.com/213-4?showapi_appid=42705&showapi_sign=a603d93fae794f0e8078da6b8021e696&topid=5&', //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
        'content-type': 'application/json'
      },
      success:  (res)=> {
        var sing = res.data.showapi_res_body.pagebean.songlist.slice(0, 10);
        that.setData({
          list: sing
        })
        console.log(sing)
      }
    })
  } 
   
})

