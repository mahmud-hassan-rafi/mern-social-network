import { toast } from "react-toastify";

export const successNotify = (msg) => {
  toast.success(msg, {
    position: "top-right",
    pauseOnFocusLoss: false,
  });
};
export const errorNotify = (msg) => {
  toast.error(msg, {
    position: "top-right",
    pauseOnFocusLoss: false,
  });
};
