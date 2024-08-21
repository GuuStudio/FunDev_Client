// signalRService.js
import * as signalR from "@microsoft/signalr";
import { getCurrentUserId } from "./authServices";

// Tạo kết nối SignalR
export const createHubConnection = (onReceiveOrderNotification ,setConnected) => {

  const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:7167/orderHub")
    .build();
  // // Đăng ký sự kiện nhận thông báo
  connection.on("RefreshOrders", (storeId) => {
    if (onReceiveOrderNotification && storeId === getCurrentUserId()) {
      console.log('On signal run')
      onReceiveOrderNotification();
    }
  });
  connection
    .start(()=> console.log("Started signalR"))
    .then(() => {console.log("SignalR Connected."); setConnected(true); })
    .catch((err) => console.error("SignalR Connection start fail: ", err))


  return connection;
};
