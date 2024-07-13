import styles from "./Header.module.scss";
import clsx from "clsx";
import images from "~/assets/images";
import "bootstrap/dist/css/bootstrap.min.css"; // lấy styles của version bootstrap mà bạn install.
import { FaSearch,  FaRegBell } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className={clsx(styles.wraper)}>
      <div className={clsx(styles.inner)}>
        {/* logo */}
        <div className={clsx(styles.logo)}>
          <Link to="/">
            <img src={images.logo} alt="FunDev" />
          </Link>
          <b>FunDev</b>
          <Link className={clsx(styles.btn_shop_link)} to="./shop" >Shop</Link>
        </div>
        {/* search input */}
        <div className={clsx(styles.search)}>
          <input type="text" placeholder="Search..." />
          <div className={clsx(styles.search_submit)}>
            <FaSearch />
          </div>
        </div>
        <div className={clsx(styles.accoutManager)}>
          <PiShoppingCartSimpleBold />
          <FaRegBell  />
          <Link className={clsx(styles.accoutManager_loggin)} to="/login">
            SignIn
          </Link>
          <Link className={clsx(styles.accoutManager_loggin)} to="/Register">
            SignUp
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
