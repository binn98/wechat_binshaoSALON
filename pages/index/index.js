//index.js
//获取应用实例
const app = getApp();
import arr from "../../static/arr";
import request from "../../utils/request";
const api = new request();
Page({
  data: {
    componentData: {
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      color: "#0094ff",
      activeColor: "#f23a3a",
      arrimage: [
        "https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg",
        "https://img.alicdn.com/imgextra/i4/49/O1CN01Y5I9zA1CEU1Y18Pz5_!!49-0-luban.jpg",
        "https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg",
        "https://gw.alicdn.com/imgextra/i1/63/O1CN01WcB1kH1CKtZHLhMCR_!!63-0-lubanu.jpg",
        "https://img.alicdn.com/imgextra/i4/88/O1CN01JYOynD1CWLTIQDBW2_!!88-0-luban.jpg",
        "https://img.alicdn.com/imgextra/i4/103/O1CN013XmYyg1CdDPYxpWpj_!!103-0-luban.jpg",
      ],
    },
    titleData: {
      title: "精品推荐",
      color: "#ef7d1f",
      fontSize: "48rpx",
      fontWeight: "600",
      bgg: `https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3120554584,3051429941&fm=26&gp=0.jpg`,
    },
    titleData2: {
      title: "猜你喜欢",
      color: "#74d73c",
      fontSize: "48rpx",
      fontWeight: "600",
      bgg: `https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1832426388,967495082&fm=26&gp=0.jpg`,
    },
    arr: arr,
  },
  onLoad() {
    api.geteq("/reglogin/gettoken").then((res) => {
      console.log(res);
    });
  },
  onPullDownRefresh() {
    api.geteq("/reglogin/gettoken").then((res) => {
      console.log(res);
      wx.stopPullDownRefresh();
    });
  },
  card(e) {
    // console.log(e.detail);
    wx.navigateTo({
      url: "../detail/detail?name=" + e.detail,
    });
  },
});
