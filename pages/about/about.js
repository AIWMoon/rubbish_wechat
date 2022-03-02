const requestUrl = require('../../config').requestUrl
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //复制博客网址到剪切板
  copyBlogUrl: function ( ) {
    wx.setClipboardData({
      data: 'https://zhangzhenyue.cn',
      success: (res)=>{
        console.log(res.data)
      },
      fail: ()=>{},
      complete: ()=>{}
    });
  },
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      //console.log(res.target)
    }
    return {
      title: '垃圾扔前分一分，绿色生活一百分，今天，你做到了吗？',
      path: '/pages/index/index',
      imageUrl: "/images/share.jpg"
    }
  }
})