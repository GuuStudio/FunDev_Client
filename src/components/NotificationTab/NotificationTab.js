import clsx from "clsx";
import Styles from "./NotificationTab.module.scss";
import { useEffect} from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
import { IoIosWarning } from "react-icons/io";
import { FaInfoCircle } from "react-icons/fa";

const stateArray = {
  success: FaCheckCircle,
  error: MdError,
  warning: IoIosWarning,
  info : FaInfoCircle,
};

const NotificationTab = ({ stateMessage = "Success" ,message, onClose }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 6000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={clsx(Styles.notification, {
        [Styles.success]: (stateMessage === "Success"),
        [Styles.error]: (stateMessage === "Error"),
        [Styles.warning]: (stateMessage === "Warning"),
        [Styles.info]: (stateMessage === "Info"),
      })}
    >
      <div className={clsx(Styles.notification_content)}>
        <div className={clsx(Styles.notification_content_item)} >
          {(stateMessage === "Success") && (<stateArray.success />)}
          {(stateMessage === "Error") && (<stateArray.error />)}
          {(stateMessage === "Warning") && (<stateArray.warning />)}
          {(stateMessage === "Info") && (<stateArray.info />)}
          <b>{stateMessage}</b>
        </div>
        {message}
      </div>
      <div className={clsx(Styles.notification_btn)}>
        <button onClick={onClose}>Hiden</button>
      </div>
    </div>
  );
};

export default NotificationTab;
