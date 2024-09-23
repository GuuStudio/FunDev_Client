import clsx from "clsx";
import styles from "./SidebarAccount.module.scss";
import { MdManageAccounts } from "react-icons/md";
import { FaShop } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaBox } from "react-icons/fa";

const btnArray = [
  { name: "Account", icon: MdManageAccounts, path: "profileInfo" },
  { name: "Product", icon: FaShop, path: "profileProducts" },
  { name: "Cart", icon: BsCartCheckFill , path: "cart" },
  { name: "Orders", icon: GiCommercialAirplane , path: "orders" },
  { name: "Ordering", icon: FaBox, path: "ordering" },
];

function SidebarAccount() {
  const pathname = window.location.pathname;
  const navigate = useNavigate();
  const [currentBtn, setCurrentBtn] = useState("Account");
  const handleClickBtn = (btn) => {
    setCurrentBtn(btn.name); 
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    navigate(`/${btn.path}`)
  }
  useEffect (() => {
    if (pathname.includes("cart")) {
      setCurrentBtn("Cart");
    } 
    if (pathname.includes("profileProducts")) {
      setCurrentBtn("Product")
    } if (pathname.includes("orders")) {
      setCurrentBtn("Orders")
    } 
    if (pathname.includes("ordering")) {
      setCurrentBtn("Ordering")
    } if (pathname.includes("profileInfo")) {
      setCurrentBtn("Account")
    }
  },[pathname])
  return (
    <aside className={clsx(styles.wraper)}>
      <div className={clsx(styles.manager_account_btn)}>
        {btnArray.map((btn, index) => {
          return (
            <button
              key={index}
              className={clsx({ [styles.focus]: btn.name === currentBtn })}
              onClick={() => handleClickBtn(btn)}
            >
              <btn.icon />
              {btn.name}
            </button>
          );
        })}
      </div>
    </aside>
  );
}

export default SidebarAccount;
