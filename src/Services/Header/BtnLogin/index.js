import clsx from "clsx";
import { FaRegBell } from "react-icons/fa";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import Styles  from "./BtnLogin.module.scss";
const BtnLogin = ({startLoginOrRegister} ) => {
    return (
        <div className={clsx(Styles.wrap)}>
        <PiShoppingCartSimpleBold />
        <FaRegBell />
        <button onClick={() => startLoginOrRegister("Login")}>
          SignIn
        </button>
        <button onClick={() => startLoginOrRegister("Register")}>
          SignUp
        </button>
      </div>
    );
}

export default BtnLogin;