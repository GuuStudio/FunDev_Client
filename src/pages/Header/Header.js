import styles from "./Header.module.scss";
import clsx from "clsx";
import images from "~/assets/images";
import "bootstrap/dist/css/bootstrap.min.css"; // lấy styles của version bootstrap mà bạn install.
import { FaSearch} from "react-icons/fa";

import { Link } from "react-router-dom";
import {  useEffect, useState } from "react";
import UserInfoHeader from "~/components/HeaderComponent/UserInfoHeader";
import BtnLogin from "~/components/HeaderComponent/BtnLogin";
import LoginOrRegister from "~/components/Account/LoginOrRegister";

function Header() {
  const [stateAccount, setStateAccount] = useState("");
  const [userInfo, setUserInfo] = useState(null);

  const startLoginOrRegister = (a) => {
    setStateAccount("");
    setStateAccount(a);
  };
  const getToken = () => {
    return localStorage.getItem("authToken");
  };
  useEffect(() => {
    setUserInfo(null);
    if (getToken() != null) {
      setUserInfo(localStorage.getItem("UserAvatar"));
    }
  }, [stateAccount]);

  return (
    <header className={clsx(styles.wraper)}>
      <div className={clsx(styles.inner)}>
        {/* logo */}
        <div className={clsx(styles.logo)}>
          <Link to="/">
            <img src={images.logo} alt="FunDev" />
          </Link>
          <b>FunDev</b>
          <Link className={clsx(styles.btn_shop_link)} to="/shop">
            Shop
          </Link>
        </div>
        {/* search input */}
        <div className={clsx(styles.search)}>
          <input type="text" placeholder="Search..." />
          <div className={clsx(styles.search_submit)}>
            <FaSearch />
          </div>
        </div>
        <div className={clsx(styles.accoutManager)}>
            {userInfo != null ? (
              <UserInfoHeader info={userInfo} startLoginOrRegister={startLoginOrRegister}></UserInfoHeader>
            ) : (
                <BtnLogin  startLoginOrRegister={startLoginOrRegister} />
            )}
        </div>
        <LoginOrRegister
          state={stateAccount}
          setState={startLoginOrRegister}
        ></LoginOrRegister>
      </div>
    </header>
  );
}

export default Header;