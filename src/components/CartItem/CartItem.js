import Styles from "./CartItem.module.scss";
import { RiSubtractFill } from "react-icons/ri";
import { MdAdd } from "react-icons/md";
import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import api, { apiFormData } from "~/ultils/Api/api";
import { useNavigate } from "react-router-dom";
import { ShowNotificationContext } from "~/components/PublicContext";
import { getCurrentUserId } from "~/services";

const CartItem = ({ cartItem, resetComponent }) => {
  const navigate = useNavigate();
  const ShowNotificationTab = useContext(ShowNotificationContext);
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const [storeInfo, setStoreInfo] = useState({});
  const [customerInfo, setCustomerInfo] = useState({});
  useEffect(() => {
    const storeId = cartItem.storeId;
    api.get(`api/Users/${storeId}`).then((res) => setStoreInfo(res.data));
    const userid = getCurrentUserId();
    api.get(`api/Users/${userid}`).then((res) => setCustomerInfo(res.data));
  }, [cartItem.storeId]);
  const handleQuantity = (type) => {
    const id = cartItem.id;
    if (type === "up") {
      api
        .put(`/api/CartItems/upQuantity/${id}`)
        .then((res) => setQuantity(res.data));
    } else {
      api
        .put(`/api/CartItems/downQuantity/${id}`)
        .then((res) => setQuantity(res.data));
    }
  };
  const deleteCartItem = async () => {
    const id = cartItem.id;
    try {
      const response = await api.delete(`/api/CartItems/${id}`);
      if (response.status === 200 || response.status === 201) {
        resetComponent();
      }
    } catch {
      console.log("delete error");
    }
  };

  const addOrders = async () => {
    const formData = new FormData();
    formData.append("productId", cartItem.productId);
    formData.append("unitPrice", cartItem.product.price);
    formData.append("quantity", quantity);
    formData.append("customerId", getCurrentUserId());
    formData.append("storeId", cartItem.storeId);
    formData.append("phoneNumber", customerInfo.phoneNumber);
    formData.append("shippingAddress", customerInfo.addressHome);
    try {
      const response = await apiFormData.post("/api/Order", formData);
      ShowNotificationTab("Success", response.data);
      navigate('/ordering')
      if (response.status ===200 || response.status === 201) {
        const  id = cartItem.id
        await api.delete(`/api/CartItems/${id}`);
      }

    } catch (error) {
      if (error.response) {
        // Lỗi từ server với status code
        ShowNotificationTab("Error", error.response.data);
      } else if (error.request) {
        // Yêu cầu được gửi nhưng không nhận được phản hồi
        ShowNotificationTab(
          "Error",
          "Không nhận được phản hồi:" + error.request
        );
      } else {
        // Lỗi khi thiết lập request
        ShowNotificationTab("Error", "Lỗi:" + error.response.data);
      }
      // Xử lý lỗi cụ thể (ví dụ: hiển thị thông báo cho người dùng)
    }
  };
  return (
    <div className={clsx(Styles.cart_item)}>
      <div className={clsx(Styles.cart_item_store_name)}>
        <b>Store:</b> <p>{storeInfo.fullName}</p>
      </div>
      <ul>
        <li className={clsx(Styles.content_item)}>
          <img width={80} height={80} src={cartItem.product.imageUrl} alt="Product" />
          <div>
            {cartItem.product.productName.lenght > 30
              ? cartItem.product.productName.slice(0, 30) + "..."
              : cartItem.product.productName}{" "}
          </div>
        </li>
        <li className={clsx(Styles.content_item)}>₫{cartItem.unitPrice}</li>
        <li className={clsx(Styles.content_item)}>
          <button onClick={() => handleQuantity("")}>
            <RiSubtractFill />
          </button>
          {quantity}
          <button onClick={() => handleQuantity("up")}>
            <MdAdd />
          </button>
        </li>
        <li className={clsx(Styles.content_item)}>
          ₫{cartItem.unitPrice * quantity}
        </li>
        <li className={clsx(Styles.content_item, Styles.button_buy_delete)}>
          <button onClick={addOrders}>Buy</button>
          <button onClick={deleteCartItem}>Delete</button>
        </li>
      </ul>
    </div>
  );
};
export default CartItem;
