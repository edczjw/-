//同时发送异步代码的次数  避免多个请求同时触发显示效果不良好
let ajaxtimes = 0
export const request = (params) => {
    ajaxtimes++;
    //显示一个加载中的toast
    uni.showToast({
        title: '加载中',
        mask: true,
		icon:"loading"
    });

    //定义公共的url
    const baseurl = "http://localhost:3000"
        //resolve成功  reject失败
    return new Promise((resolve, reject) => {
        uni.request({
            ...params,
            url: baseurl + params.url,
            success: (res) => {
                resolve(res.data);
            },
            fail: (res) => {
                reject(res.data)
            },
            complete: function() {
                ajaxtimes--;
                //直到所有请求都结束后才关闭加载效果
                if (ajaxtimes === 0) {
                    //不管成功还是失败都会执行  关闭加载效果
                    uni.hideLoading();
                }
            }
        })
    }).catch((error) => {
		  console.error(error);
		})
}