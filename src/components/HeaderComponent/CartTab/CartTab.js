import clsx from "clsx";
import Styles from "./CartTab.module.scss";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import NoCartItem from "~/components/NoCartItem/NoCartItem";
import api from "~/ultils/Api/api";
import { useNotificateStore } from "~/store";
const CartTab = () => {
  const setCarts = useNotificateStore((store) => store.setCarts)
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  function handleNavigateCart() {
    navigate("/cart");
  }
  useEffect(() => {
    api.get("/api/CartItems").then((res) => {
      setCartItems(res.data.slice(0, 5))
      setCarts(res.data.length)
    });
  }, [setCarts]);
  return (
    <div className={clsx(Styles.wrap)}>
      <h1>New products added</h1>
      <ul className={clsx(Styles.cart_product_list)}>
        {cartItems.length > 0 ? (
          cartItems.map((item, index) => {
            return (
              <li key={index} className={clsx(Styles.cart_product_item)}>
                <img width={45} height={45} src={item.product.imageUrl} alt="Product" />
                <p>
                  {item.product.productName.lenght > 30
                    ? item.product.productName.slice(0, 30) + "..."
                    : item.product.productName}{" "}
                </p>
                <p>${item.unitPrice}</p>
              </li>
            );
          })
        ) : (
          <NoCartItem />
        )}
      </ul>
      <footer>
        <p>{cartItems.length} Add items to cart</p>
        <button onClick={handleNavigateCart}>View cart</button>
      </footer>
    </div>
  );
};

export default CartTab;
