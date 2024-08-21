import clsx from "clsx";
import Styles from "./NotificationBell.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import NoCartItem from "~/components/NoCartItem/NoCartItem";
import { createHubConnection, fetchOrders,  isTokenValid } from "~/services";

const NotificationBell = ({setOrdersLength}) => {
  const [connected, setConnected] = useState(false);
  const connectionRef = useRef(null);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  function handleNavigateCart() {
    navigate("/orders");
  }

  useEffect(() => {
    const refreshOrders = async () => {
      const res = await fetchOrders();
      if (res.status === 200 || res.status === 201) {
        setOrders(res.data.filter(od => od.status === "Pending"));
        setOrdersLength(res.data.filter(od => od.status === "Pending").length)
      }
    };
    // Tạo kết nối SignalR và truyền callback xử lý thông báo
    const connection = createHubConnection(() => {
      // Khi nhận được thông báo, thực hiện làm mới đơn hàng
      refreshOrders();
    }, (state) =>  setConnected(state));
    connectionRef.current = connection;
    if (isTokenValid  ) {
      refreshOrders();
    }
    return () => {
      if (connectionRef.current && connected) {
        connectionRef.current.stop()
          .then(() => {
            setConnected(false);
            console.log('SignalR disconnected');
          })
          .catch(err => {
            console.error('SignalR disconnection error: ', err);
          });
      }
    };
  }, [setOrdersLength, connected]);

  return (
    <div className={clsx(Styles.wrap)}>
      <h1>List notificate</h1>
      <ul className={clsx(Styles.cart_product_list)}>
        {orders.length > 0 ? (
          orders.slice(0,5).map((item, index) => {
            return (
              <li key={index} className={clsx(Styles.cart_product_item)}>
                <img
                  width={45}
                  height={45}
                  src={item.product.imageUrl}
                  alt="Product"
                />
                <p>
                  {item.product.productName.lenght > 30
                    ? item.product.productName.slice(0, 30) + "..."
                    : item.product.productName}{" "}
                </p>
                <p>${item.totalAmount}</p>
              </li>
            );
          })
        ) : (
          <NoCartItem />
        )}
      </ul>
      <footer>
        <p>{orders.length} Add items to orders</p>
        <button onClick={handleNavigateCart}>View orders</button>
      </footer>
    </div>
  );
};

export default NotificationBell;
