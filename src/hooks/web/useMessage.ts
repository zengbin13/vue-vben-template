import { ElNotification, NotificationParamsTyped, ElMessageBox } from 'element-plus';

const createNotification = {
  // success、warning、info 和error
  success: (options: NotificationParamsTyped) => ElNotification.success(options),
  warning: (options: NotificationParamsTyped) => ElNotification.warning(options),
  info: (options: NotificationParamsTyped) => ElNotification.info(options),
  error: (options: NotificationParamsTyped) => ElNotification.error(options),
};

const createErrorModal = (message?: string) => {
  ElMessageBox({
    type: 'error',
    title: '错误提示',
    message: message || '出现错误',
    confirmButtonText: '确认',
  });
};

export function useMessage() {
  return {
    createNotification,
    createErrorModal,
  };
}
