// 统一管理用户相关的接口
// 引入axios
import request from '@/utils/request.ts';
// export const reqLogin = (data: loginForm) =>
//   request.post<any, loginResponseData>(API.LOGIN_URL, data)
export const signIn = (data:FormData) => request.post('http://43.143.242.68:8089/student/enroll', data)
