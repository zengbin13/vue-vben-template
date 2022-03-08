import { ElNotification, NotificationParamsTyped } from 'element-plus';

const createMessage = {
  // success、warning、info 和error
  success: (options: NotificationParamsTyped) => ElNotification.success(options),
  warning: (options: NotificationParamsTyped) => ElNotification.warning(options),
  info: (options: NotificationParamsTyped) => ElNotification.info(options),
  error: (options: NotificationParamsTyped) => ElNotification.error(options),
};

export function useMessage() {
  return {
    createMessage,
  };
}
