import clsx from "clsx";
import { useEffect, useState } from "react";
import Styles from "./Orders.module.scss";
import api from "~/ultils/Api/api";
import NoProduct from "~/services/Product/NoProduct";
import OrdersItem from "~/components/OrdersItem/OrdersItem";

const arrayItem2 = ["Pending", "Shipped", "Completed", "Cancelled"];

function Orders() {
  const [currentbtn, setCurrentBtn] = useState("Pending");
  const [orders, setOrders] = useState([])
  useEffect ( () => {
    const fetchOrders = async () => {
      try {
        const res = await api.get('api/Order/orders') 
        if (res.status === 200 || res.status === 201) {
          setOrders(res.data.filter(od => od.status === currentbtn))
        }
      } catch {
        console.log("erroe get api orders list")
      }

    }
    fetchOrders()
  },[currentbtn])
  const handleClick = async(para) => {
    setCurrentBtn(para)
    try {
      const res = await api.get('api/Order/orders') 
      if (res.status === 200 || res.status === 201) {
        setOrders(res.data.filter(od => od.status === currentbtn))
      }
    } catch {
      console.log("erroe get api orders list")
    }
  }
  return (
    <div className={clsx(Styles.wrap)}>
      <div className={clsx(Styles.container)}>
        <header className={clsx(Styles.header)}>
          <ul>
            {arrayItem2.map((item, index) => {
              return (
                <li key={index} className={clsx(Styles.header_item, {[Styles.active]: item === currentbtn})} onClick={() => handleClick(item)}>
                  {item}
                </li>
              );
            })}
          </ul>
        </header>
        { orders.length > 0 ?  orders.map((order, index) => {
          return (<OrdersItem key={index} order={order}  currentbtn={currentbtn} setCurrentBtn={setCurrentBtn} /> )
        }) : <NoProduct />}
        
      </div>
    </div>
  );
}
export default Orders;
