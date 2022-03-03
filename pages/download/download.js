const imgUrl = require('../../config').imgUrl
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
  // 下载垃圾分类指南
  LjflImage:function(){
    var that = this;
    wx.downloadFile({
      url: 'https://gitee.com/mezhenyue/picture/raw/master/down02.jpg',
      type: image,
      success: function(res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200){
            wx.showToast({
            title: '下载成功',
            icon: 'success',
            mask: true,
            duration: 1500
          })
          that.setData({
            downloadPicturePath: rss.tempFilePath//将下载的图片路径传给页面显示
          })
        }
      }
    })
  },
  
// 下载办公室垃圾分类指南
BgljImage:function(){
  var that = this;
  wx.downloadFile({
    url: 'https://gitee.com/mezhenyue/picture/raw/master/down01.jpg',
    success: function(res) {
      console.log(res.tempFilePath);
      // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
      if (res.statusCode === 200){
        wx.showToast({
          title: '下载成功',
          icon: '',
          mask: true,
          duration: 1500
        })
        that.setData({
          downloadPicturePath: rss.tempFilePath//将下载的图片路径传给页面显示
        })
      }
    }
  })
},
  /**
   * 用户点击右上角分享
   */
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