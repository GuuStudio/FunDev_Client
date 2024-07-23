import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import images from "~/assets/images";
import { MdOutlineNewLabel } from "react-icons/md";
import api from "~/Services/Api/api";
import {jwtDecode} from 'jwt-decode';

function Login({ state, setState }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const saveToken = (token) => {
    localStorage.setItem("authToken", token);
    const decodedToken = jwtDecode(token);
        // Lưu thông tin từ payload
        localStorage.setItem('userId', decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']);
        localStorage.setItem('userEmail', decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress']);
        localStorage.setItem('role', decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
        localStorage.setItem('tokenExpiration', decodedToken.exp);
  };

  const fetchUserInfo = async () => {
    try {
      const response = await api.get("/api/Users/profile");
      return response.data;
    } catch (error) {
      console.error("Lỗi khi lấy thông tin người dùng:", error);
      throw error;
    }
  };

  const saveUserInfo = (userInfo) => {
    localStorage.setItem('userFullName', userInfo.fullName);
    localStorage.setItem('userProducts', userInfo.productModels);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/api/Accounts/SignIn", {
        email,
        password,
      });
      const token = response.data;
      saveToken(token);
      setState("");
      console.log("Đăng nhập thành công:", response.data);
      // Xử lý đăng nhập thành công.
      // Lấy thông tin người dùng.
      const userInfo = await fetchUserInfo();
      saveUserInfo(userInfo);
    } catch (error) {
      if (error.response) {
        // Lỗi từ server với status code
        console.error("Lỗi server:", error.response.data);
        console.error("Status:", error.response.status);
      } else if (error.request) {
        // Yêu cầu được gửi nhưng không nhận được phản hồi
        console.error("Không nhận được phản hồi:", error.request);
      } else {
        // Lỗi khi thiết lập request
        console.error("Lỗi:", error.message);
      }
      // Xử lý lỗi cụ thể (ví dụ: hiển thị thông báo cho người dùng)
    }
  };
  const handlePClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [state]);
  return (
    <div className={clsx(Styles.boxLogin)} onClick={handlePClick}>
      <div className={clsx(Styles.logo)}>
        <img width="100px" height="100px" src={images.logo} alt="FunDev" />
      </div>
      <div className={clsx(Styles.boxLogin_title)}>
        Please login to your account
      </div>
      <form onSubmit={handleSubmit} className={clsx(Styles.boxLogin_form)}>
        <input
          className={clsx(Styles.boxLogin_form_input)}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email..."
        />
        <input
          className={clsx(Styles.boxLogin_form_input)}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password.. "
        />
        <div className={clsx(Styles.forgot_password)}>
          <Link to="/forgotpassword">Forgot Password</Link>
        </div>
        <button className={clsx(Styles.boxLogin_form_btn_login)} type="submit">
          Login
        </button>
      </form>

      <button
        className={clsx(Styles.btn_create_account)}
        onClick={() => setState("Register")}
      >
        {"Create new your account   "}
        <MdOutlineNewLabel />
      </button>
    </div>
  );
}

export default Login;
