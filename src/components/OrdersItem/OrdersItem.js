import clsx from "clsx";
import Styles from "./OrdersItem.module.scss";
import api from "~/ultils/Api/api";
import { useContext } from "react";
import { ShowNotificationContext } from "~/components/PublicContext";

const OrdersItem = ({ order, currentbtn, setCurrentBtn }) => {
  const showNotification = useContext(ShowNotificationContext);
  const date = {
    Pending: order.orderDate != null && order.orderDate.split("T")[0],
    Shipped: order.shippingDate != null && order.shippingDate.split("T")[0],
    Completed:
      order.completionDate != null && order.completionDate.split("T")[0],
    Cancelled: order.canceledDate != null && order.canceledDate.split("T")[0],
  };
  const updateHandle = async () => {
    try {
      const res = await api.put(`/api/Order/${order.orderId}`);
      if (res.status === 200 || res.status === 201) {
        showNotification("Success", res.data);
        setCurrentBtn("Shipped");
      }
    } catch {
      showNotification("Error", "Error update status order");
    }
  };

  return (
    <div className={clsx(Styles.order_info)}>
      <ul>
        <li className={clsx(Styles.content_item)}>
          <h6><b>Customer: </b>{order.customer.fullName} </h6>
          <div>Phone: {order.phoneNumber}</div>
          <nav>
            <div>
               <p>{currentbtn}:</p>{date[currentbtn]}
            </div>
            <div><p>To:</p> {order.shippingAddress}</div>
          </nav>
        </li>
        <li className={clsx(Styles.content_item)}>
          <img width={110} height={110} src={order.product.imageUrl} alt="Product" />
          <div className={clsx(Styles.order_info_product_name)}>
            {order.product.productName}
          </div>
        </li>
        <li className={clsx(Styles.content_item)}>
          <p> x{order.quantity}</p>
          <p>$ {order.totalAmount}</p>
        </li>

        <li className={clsx(Styles.content_item, Styles.button_buy_delete)}>
          {currentbtn === "Pending" && (
            <button onClick={updateHandle} className={clsx(Styles.update_btn)}>
              Update
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};
export default OrdersItem;
