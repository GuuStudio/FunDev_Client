import React from "react";
import clsx from "clsx";
import Styles from "./Register.module.scss";
import { Link } from "react-router-dom";
import images from "~/assets/images";

function Register() {
  return (
    <div className={clsx(Styles.container)}>
      <div className={clsx(Styles.boxRegister)}>
        <div className={clsx(Styles.logo)}>
          <img width="100px" height="100px" src={images.logo} alt="FunDev" />
        </div>
        <div className={clsx(Styles.boxRegister_title)}>Create new account</div>
        <div className={clsx(Styles.boxRegister_form)}>
          <div className={clsx(Styles.boxRegister_first_name)}>
            <input
              className={clsx(Styles.boxRegister_form_input, Styles.first_name)}
              type="text"
              placeholder="First Name..."
            />
            <input
              className={clsx(Styles.boxRegister_form_input)}
              type="Text"
              placeholder="Last Name... "
            />
          </div>
          <input
            className={clsx(Styles.boxRegister_form_input)}
            type="email"
            placeholder="Email..."
          />
          <input
            className={clsx(Styles.boxRegister_form_input)}
            type="password"
            placeholder="Password... "
          />
          <button
            className={clsx(Styles.boxRegister_form_btn_Register)}
            type="submit"
          >
            Register
          </button>
        </div>
        <div>
          {"Already a member? "}
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
