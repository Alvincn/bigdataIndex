import axios from 'axios';
import { ElMessage } from 'element-plus';
const request = axios.create({
  baseURL: '/api',
  timeout: 10000,
});
// 创建用户相关的小仓库
// 请求拦截器
// 请求拦截器
request.interceptors.request.use((config) => {
  return config
})
// 响应拦截器
request.interceptors.response.use(
  // 这是成功获取到了
  (response) => {
    if(response.data.code === 200){
      return response.data;
    }else {
      return {
        code:1,
        message:response.data.msg
      }
    }
  },
  (error) => {
    ElMessage({
      type: 'error',
      message: '失败',
    });
  }
);

// 对外暴露
export default request;
