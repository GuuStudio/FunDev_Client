import React from "react";
import clsx from "clsx";
import Styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import images from "~/assets/images";

function Login() {
  return (
    <div className={clsx(Styles.container)}>
      <div className={clsx(Styles.boxLogin)}>
        <div className={clsx(Styles.logo)}>
          <img width="100px" height="100px" src={images.logo} alt="FunDev" />
        </div>
        <div className={clsx(Styles.boxLogin_title)}>
          Please login to your account
        </div>
        <div className={clsx(Styles.boxLogin_form)}>
          <input
            className={clsx(Styles.boxLogin_form_input)}
            type="text"
            placeholder="Email..."
          />
          <input
            className={clsx(Styles.boxLogin_form_input)}
            type="text"
            placeholder="Password.. "
          />
          <button
            className={clsx(Styles.boxLogin_form_btn_login)}
            type="submit"
          >
            Login
          </button>
        </div>

        <Link to="/register">Register</Link>
        <Link to="/forgotpassword">Forgot Password</Link>
      </div>
    </div>
  );
}

export default Login;
