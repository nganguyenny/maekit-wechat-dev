// pages/makerspaces/makerspaces.js

import apiClient from "../../utils/apiClient.js"

Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */

  onLoad: function () {
    const page = this
    const options = {
      success: function (res) {
        const makerspaces = res.data.makerspaces
        page.setData({
          makerspaces
        })
      },
      fail: function (err) {
        console.log(err)
      }
    }

    apiClient.getMakerspaces(options)
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {


  },
  goToProjects: function () {
    wx.navigateTo({
      url: '/pages/projects/projects',
    })
  },
  goToEquipments: function () {
    wx.navigateTo({
      url: '/pages/equipments/equipments',
    })
  },
  goToFind: function () {
    wx.navigateTo({
      url: '/pages/makerspaces/makerspaces',
    })
  },
  goToHome: function () {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  }
})