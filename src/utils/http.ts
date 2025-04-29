import axios from "axios";
const http = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000 // 超时时间定下5秒钟
})
// 添加请求拦截器
http.interceptors.request.use((config) => {
    console.log(config, '请求数据');
    return config;
}, (error) => {
    return Promise.reject(error);
});



// 添加响应拦截器
http.interceptors.response.use((response) => {
    // 2xx 范围内的状态码都会触发该函数


    return response.data;
}, (error) => {
    // 超出 2xx 范围内的状态码都会触发该函数
    if (error.response) {
        switch (error.response.status) {
            case 401:
                console.error('未授权，请重新登录');
                // window.location.href = '/login'
                break;
            case 403:
                console.error('禁止访问');
                break;
            case 404:
                console.error('资源不存在');
                break;
            case 500:
                console.error('服务器错误');
                break;
        }

        // 如果有错误消息，可以统一处理
        if (error.response.data?.message) {
            console.error('错误信息:', error.response.data.message);
        }
    }
    return Promise.reject(error);
});
export default http;