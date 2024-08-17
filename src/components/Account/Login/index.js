import React, { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import Styles from "./Login.module.scss";
import { Link } from "react-router-dom";
import images from "~/assets/images";
import { MdOutlineNewLabel } from "react-icons/md";
import api from "~/ultils/Api/api";
import {jwtDecode} from 'jwt-decode';
import { ShowNotificationContext } from "~/services/PublicContext";

function Login({ state, setState }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const ShowNotificationTab = useContext(ShowNotificationContext)
  const saveToken = async (token) => {
    localStorage.setItem("authToken", token);
    const decodedToken = jwtDecode(token);
        // Lưu thông tin từ payload
        localStorage.setItem('userId', decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']);
        localStorage.setItem('userEmail', decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress']);
        localStorage.setItem('role', decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']);
        localStorage.setItem('tokenExpiration', decodedToken.exp);
    const id = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier']
    const response = await api.get(`/api/Users/${id}`);
        localStorage.setItem('UserAvatar', response.data.userImageUrl);
        localStorage.setItem('UserFullName', response.data.fullName);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/api/Accounts/SignIn", {
        email,
        password,
      });
      const token = response.data;
      await saveToken(token);
      setState("");
      // Xử lý đăng nhập thành công.
      ShowNotificationTab( "Success" ,"Login success");
    } catch (error) {
      if (error.response) {
        // Lỗi từ server với status code
        ShowNotificationTab( "Error" , error.response.data);
      } else if (error.request) {
        // Yêu cầu được gửi nhưng không nhận được phản hồi
        ShowNotificationTab(  "Error","Không nhận được phản hồi:" + error.request);
      } else {
        // Lỗi khi thiết lập request
        ShowNotificationTab( "Error","Lỗi:" + error.response.data);
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
          autoFocus
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
