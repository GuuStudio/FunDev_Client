import clsx from "clsx";
import Styles  from "./BtnLogin.module.scss";
const BtnLogin = ({startLoginOrRegister} ) => {
    return (
        <div className={clsx(Styles.wrap)}>
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