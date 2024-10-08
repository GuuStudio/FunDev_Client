import clsx from "clsx";
import Styles from "./UserInfoHeader.module.scss";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ShowNotificationContext } from "~/components/PublicContext";
import { MdLogout, MdManageAccounts } from "react-icons/md";
import emptyImg from "~/assets/images/uploadImage.png";
import { FaRegBell } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import CartTab from "../CartTab/CartTab";
import NotificationBell from "../NotificationBell/NotificationBell";
import { useNotificateStore } from "~/store";


const UserInfoHeader = ({ info, startLoginOrRegister }) => {

  const [ordersLength, setOrdersLength] = useState("0");
  const cart = useNotificateStore(sto => sto.cart)
  const ShowNotificationTab = useContext(ShowNotificationContext);
  const navigate = useNavigate();
  const logOut = (e) => {
    e.stopPropagation();
    localStorage.clear();
    startLoginOrRegister("logout");
    navigate(`/`);
    ShowNotificationTab("Info", "You are logout ");
  };
  function handleClickNavigate(link) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate(link);
  }
  return (
    <div className={clsx(Styles.wrap)}>
      <div className={clsx(Styles.item_header)}>
        <FaRegBell />
        {ordersLength > 0 && (<p className={clsx(Styles.item_header_quantity_number)}>{ordersLength}</p>)}
        <div className={clsx(Styles.item_header_cart_tab)}>
          <NotificationBell setOrdersLength={setOrdersLength} />
        </div>
      </div>
      <div className={clsx(Styles.item_header)}>
        <PiShoppingCartSimpleBold />
        {cart > 0 && (<p className={clsx(Styles.item_header_quantity_number)}>{cart}</p>)}
        <div className={clsx(Styles.item_header_cart_tab)}>
          <CartTab />
        </div>
      </div>
      <div className={clsx(Styles.logo_user)}>
        {info ? (
          <img width={50} height={50} src={info} alt="userImage" />
        ) : (
          <img width={50} height={50} src={emptyImg} alt="userImage" />
        )}
        <div className={clsx(Styles.user_info_opt)}>
          <button
            to="/profileInfo"
            className={clsx(Styles.user_info_opt_item)}
            onClick={() => handleClickNavigate("/profileInfo")}
          >
            <MdManageAccounts /> Accout Manager
          </button>
          <button onClick={(e) => logOut(e)}>
            <MdLogout /> {"Log Out"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfoHeader;
