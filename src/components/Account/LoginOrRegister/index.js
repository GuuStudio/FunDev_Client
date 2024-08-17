import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Styles from "./LoginOrRegister.module.scss";
import Register from "../Register";
import Login from "../Login";

function LoginOrRegister({ state , setState }) {
  const [stateAccount, setStateAccount] = useState("");
  
  useEffect(() => {
    setStateAccount(state);
  }, [state]);
  const outForm = () => {
    setState(' ')
  }
  return (
    <div
      className={clsx(Styles.container, {
        [Styles.dis_flex]:
          stateAccount === "Login" || stateAccount === "Register",
      })}
      onClick={outForm}
    >
      <div
        className={clsx(Styles.dis_none, {
          [Styles.dis_flex]: stateAccount === "Login",
        })}
       
      >
        <Login state={state} setState={setState}/>
      </div>
      <div
        className={clsx(Styles.dis_none, {
          [Styles.dis_flex]: stateAccount === "Register",
        })}
      >
        <Register state={state} setState={setState} />
      </div>
      {console.log(stateAccount)}
    </div>
  );
}

export default LoginOrRegister;
