App({
  // 生命周期函数：后台存活2个小时
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    console.log('小程序初始化完成了：onLaunch');
    // 异步调用
    wx.getUserInfo({
      success: (res) => {
        console.log(res)
      }
    })
    setTimeout(() => {
      let err = new Error();
      throw err
    }, 3000)
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {
    console.log('页面显示出来了：onShow');
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {
    console.log('界面被隐藏时会执行：onHide');
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {
    console.log('小程序中发生了错误的时候执行：onError');
  }
})