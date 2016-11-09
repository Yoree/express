//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    expressnu:null,
    expressInfo:null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  btnClick:function(){
   var thispage = this;
    app.getExpressInfo(this.data.expressnu,function(data){
      thispage.setData({expressInfo:data})
    });
  },
  input : function(e){
    this.setData({expressnu:e.detail.value})
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
  }
})
