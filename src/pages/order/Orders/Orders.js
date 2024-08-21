import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import Styles from "./Orders.module.scss";
import NoProduct from "~/components/product/NoProduct";
import OrdersItem from "~/components/OrdersItem/OrdersItem";
import { createHubConnection, fetchOrders } from "~/services";

const arrayItem2 = ["Pending", "Shipped", "Completed", "Cancelled"];

function Orders() {
  const connectionHubRef = useRef(null)
  const [connectionHubState, setConnectionHubState] = useState(false) 
  const [currentbtn, setCurrentBtn] = useState("Pending");
  const [orders, setOrders] = useState([]);
  const [numberQuantity, setNumberQuantity] = useState({
    Pending: 0,
    Shipped: 0,
    Completed: 0,
    Cancelled: 0,
  })
  useEffect(() => {
    const refreshOrdering = async () => {
      const res = await fetchOrders();
      if (res.data) {
        setOrders(res.data.filter((od) => od.status === currentbtn));
        setNumberQuantity({
          Pending: res.data.filter((od) => od.status === "Pending").length,
          Shipped: res.data.filter((od) => od.status === "Shipped").length,
          Completed: res.data.filter((od) => od.status === "Completed").length,
          Cancelled: res.data.filter((od) => od.status === "Cancelled").length,
        })
      }
    };
    const connectionHub = createHubConnection( () => {
        refreshOrdering();
    }, (e) => setConnectionHubState(e));
    connectionHubRef.current = connectionHub;

    refreshOrdering();
    return () => {
      if (connectionHubRef.current && connectionHubState) {
        connectionHubRef.current.stop()
          .then(() => {
            setConnectionHubState(false);
            console.log('SignalR disconnected');
          })
          .catch(err => {
            console.error('SignalR disconnection error: ', err);
          });
      }
    }
  }, [currentbtn,connectionHubState ]);
  const handleClick = async (para) => {
    setCurrentBtn(para);
      const res = await fetchOrders();
      if (res.data) {
        setOrders(res.data.filter((od) => od.status === currentbtn));
      }
  };
  return (
    <div className={clsx(Styles.wrap)}>
      <div className={clsx(Styles.container)}>
        <header className={clsx(Styles.header)}>
          <ul>
            {arrayItem2.map((item, index) => {
              return (
                <li
                  key={index}
                  className={clsx(Styles.header_item, {
                    [Styles.active]: item === currentbtn,
                  })}
                  onClick={() => handleClick(item)}
                >
                  {item} {`(${numberQuantity[item]})`}
                </li>
              );
            })}
          </ul>
        </header>
        {orders.length > 0 ? (
          orders.map((order, index) => {
            return (
              <OrdersItem
                key={index}
                order={order}
                currentbtn={currentbtn}
                setCurrentBtn={setCurrentBtn}
              />
            );
          })
        ) : (
          <NoProduct />
        )}
      </div>
    </div>
  );
}
export default Orders;
