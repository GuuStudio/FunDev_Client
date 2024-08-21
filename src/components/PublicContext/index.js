import { createContext,  useState } from "react";
import NotificationTab from "../NotificationTab/NotificationTab";

export const ShowNotificationContext = createContext();
const PublicContext = ({ children }) => {
  const [showNotificationTab, setShowNotificationTab] = useState({
    state: false,
    message: "",
  });
  const [stateMessage, setStateMessage] = useState("Info")
  const ShowNotificationTab = (stateMessage = "Info", message) => {
    setShowNotificationTab({ state: true, message });
    setStateMessage(stateMessage)
  };
  const HandleHidenNotificationTab = () => {
    setShowNotificationTab({ state: false, message: ""});
  };
  return (
    <ShowNotificationContext.Provider value={ShowNotificationTab}>
      {(showNotificationTab.state) && (
        <NotificationTab
          stateMessage={stateMessage}
          message={showNotificationTab.message}
          onClose={HandleHidenNotificationTab}
        />
      )}
      <div>{children}</div>
    </ShowNotificationContext.Provider>
  );
};

export default PublicContext;
