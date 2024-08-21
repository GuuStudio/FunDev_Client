import clsx from "clsx";
import Styles from "./OrderingItem.module.scss";
import api from "~/ultils/Api/api";
import { useContext } from "react";
import { ShowNotificationContext } from "~/components/PublicContext";
import { useNavigate } from "react-router-dom";

const OrderingItem = ({ order, currentbtn, setCurrentBtn }) => {
  const navigate = useNavigate();
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
        setCurrentBtn("Completed");
      }
    } catch {
      showNotification("Error", "Error update status order");
    }
  };
  const handleCancel = async () => {
    try {
      const id = order.orderId
      const res = await api.delete(`/api/Order/${id}`);
      if (res.status === 200 || res.status === 201) {
        setCurrentBtn("Cancelled");
        showNotification("Success", "Order has been cancelled");
      }
    } catch {
      showNotification("Error", "Error cancel order");
    }
  };
  return (
    <div className={clsx(Styles.order_info)}>
      <ul>
        <li className={clsx(Styles.content_item)}>
          <h6><b>Store: </b>{order.store.fullName}</h6>
          <nav>
            <div>
              <p>{currentbtn}:</p>
              {date[currentbtn]}
            </div>
            {currentbtn !== "Cancelled" && (
              <div>
                <p>To:</p> {order.shippingAddress}
              </div>
            )}
          </nav>
        </li>
        <li className={clsx(Styles.content_item)}>
          <img
            width={110}
            height={110}
            src={order.product.imageUrl}
            alt="Product"
          />
          <div className={clsx(Styles.order_info_product_name)}>
            {order.product.productName}
          </div>
        </li>
        <li className={clsx(Styles.content_item)}>
          <p> x{order.quantity}</p>
          <p>$ {order.totalAmount}</p>
        </li>

        <li className={clsx(Styles.content_item, Styles.button_buy_delete)}>
          {currentbtn === "Shipped" && (
            <button onClick={updateHandle} className={clsx(Styles.update_btn)}>
              Update
            </button>
          )}
          <button
            onClick={() => navigate(`/productdetail/${order.productId}`)}
            className={clsx(Styles.update_btn)}
          >
            Buy More
          </button>
          {currentbtn === "Pending" && (
            <button
              className={clsx(Styles.canceled_btn)}
              onClick={handleCancel}
            >
              Cancelled
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};
export default OrderingItem;
