import { ElMessage, ElMessageBox } from 'element-plus';
// 提示类型枚举

export default function (message: string, title: string, type: any) {
  ElMessageBox.confirm(message, title, {
    confirmButtonText: '取消',
    cancelButtonText: '确认',
    type: type,
  })
    .then(() => {
      ElMessage({
        type: 'success',
        message: '成功进入',
      });
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消进入',
      });
    });
}
