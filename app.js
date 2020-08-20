//app.js
App({
  globalData:{
    userInfo: wx.getStorageSync('userData') || null
  }
})