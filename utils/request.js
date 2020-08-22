class request {
  // 类构造器
  constructor() {
    (this.baseURL = "https://devapi.yichuwuyou.com/wmrecovery/1.2.0/"),
      (this.token = Math.floor(Math.random() * 1000000)),
      (this.header = { "content-type": "application/json" });
  }
  // get方法封住
  geteq(url, data, header = this.header) {
    return this.requestAll(url, data, header, "GET");
  }
  // post方法封装
  posteq(url, data, header = this.header) {
    return this.requestAll(url, data, header, "POST");
  }
  // put方法封装
  puteq(url, data, header = this.header) {
    return this.requestAll(url, data, header, "PUT");
  }
  // delete方法封装
  deleteeq(url, data, header = this.header) {
    return this.requestAll(url, data, header, "DELETE");
  }
  // 请求封装
  /**
   * @param {String} url
   * @param {Obj} data
   * @param {Obj} header
   * @param {String} method
   */
  requestAll(url, data, header, method) {
    return new Promise((resolve, reject) => {
      wx.showLoading({
        title: "正在加载中",
        mask: false,
      });
      wx.request({
        url: this.baseURL + url,
        method,
        data,
        header,
        success(res) {
          //成功执行
          let { data } = res;
          // 这里前后端状态码的约定，假设请求成功data对象有一个success与code的状态码为4和200则表示数据请求成功
          // if(data.success === 4 && data.code===200){
          //     resolve(data)
          // }else{
          //     reject(data)
          // }
          setTimeout(() => {
            resolve(data);
          }, 3000);
        },
        fail(err) {
          //失败执行
          reject(err);
        },
        complete() {
          //成功或者失败都会执行
          setTimeout(() => {
            wx.hideLoading();
          }, 3000);
        },
      });
    });
  }
}
// 方法暴露
export default request;
