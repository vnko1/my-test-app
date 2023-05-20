import { Toaster } from "react-hot-toast";

const ToastNotification = () => {
  return (
    <Toaster
      position="bottom-left"
      reverseOrder={false}
      gutter={10}
      toastOptions={{ duration: 6000 }}
    />
  );
};

export default ToastNotification;
