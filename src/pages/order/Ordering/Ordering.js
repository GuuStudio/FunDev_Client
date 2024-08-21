import clsx from "clsx";
import Styles from "./Ordering.module.scss";

import { useEffect, useState } from "react";
import NoProduct from "~/components/product/NoProduct";
import OrderingItem from "~/components/OrderingItem/OrderingItem";
import { fetchOrdering } from "~/services";

const arrayItem2 = ["Pending", "Shipped", "Completed", "Cancelled"];

function Ordering() {
  const [currentbtn, setCurrentBtn] = useState("Pending");
  const [orders, setOrders] = useState([])
  const [numberQuantity, setNumberQuantity] = useState({
    Pending: 0,
    Shipped: 0,
    Completed: 0,
    Cancelled: 0,
  })
  useEffect ( () => {
    const fetch = async () => {
      const res = await fetchOrdering();
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
    fetch();
  },[currentbtn])
  const handleClick = async(para) => {
    setCurrentBtn(para)
    const res = await fetchOrdering();
    if (res.data) {
      setOrders(res.data.filter((od) => od.status === currentbtn));
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
                  {item} {`(${numberQuantity[item]})`}
                </li>
              );
            })}
          </ul>
        </header>
        { orders.length > 0 ?  orders.map((order, index) => {
          return (<OrderingItem key={index} order={order}  currentbtn={currentbtn} setCurrentBtn={setCurrentBtn} /> )
        }) : <NoProduct />}
        
      </div>
    </div>
  );
}
export default Ordering;
