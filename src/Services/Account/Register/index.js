import React, {useEffect, useState} from "react";
import clsx from "clsx";
import Styles from "./Register.module.scss";
import images from "~/assets/images";
import { AiOutlineUser } from "react-icons/ai";

function Register({state , setState}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setPasswordConfirm] = useState('');

  useEffect( () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  },[state])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    };

    try {
      const response = await fetch('https://localhost:7167/api/Accounts/SignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });

      if (!response.ok) {
        throw new Error('Có lỗi xảy ra khi tạo user');
      }

      const data = await response.json();
      alert('User đã được tạo:', data);
      // Xử lý phản hồi ở đây (ví dụ: hiển thị thông báo thành công)
    } catch (error) {
      alert('Lỗi:', error);
      // Xử lý lỗi ở đây (ví dụ: hiển thị thông báo lỗi)
    }
  };

  const handlePClick = (event) => {
    event.stopPropagation();
  };
  return (
      <div className={clsx(Styles.boxRegister)} onClick={handlePClick}>
        <div className={clsx(Styles.logo)}>
          <img width="100px" height="100px" src={images.logo} alt="FunDev" />
        </div>
        <div className={clsx(Styles.boxRegister_title)}>Create new account</div>
        <form onSubmit={handleSubmit} className={clsx(Styles.boxRegister_form)}>
          <div className={clsx(Styles.boxRegister_first_name)}>
            <input
              value={firstName}
              onChange={ (e) => setFirstName(e.target.value)}
              className={clsx(Styles.boxRegister_form_input, Styles.first_name)}
              type="text"
              placeholder="First Name..."
              required
            />
            <input
              className={clsx(Styles.boxRegister_form_input)}
              type="Text"
              value={lastName}
              onChange={ (e) => setLastName(e.target.value)}
              required
              placeholder="Last Name... "
            />
          </div>
          <input
            className={clsx(Styles.boxRegister_form_input)}
            type="email"
            value={email}
            onChange={ (e) => setEmail(e.target.value)}
            required
            placeholder="Email..."
          />
          <input
            className={clsx(Styles.boxRegister_form_input)}
            type="password"
            value={password}
            onChange={ (e) => setPassword(e.target.value)}
            required
            placeholder="Password... "
          />
          <input
            className={clsx(Styles.boxRegister_form_input)}
            type="password"
            value={confirmPassword}
            onChange={ (e) => setPasswordConfirm(e.target.value)}
            required
            placeholder="Password confirm... "
          />
          <button
            className={clsx(Styles.boxRegister_form_btn_Register)}
            type="submit"
          >
            Register
          </button>
        </form>
        <div>
          {"Already a member? "}
          <button className={clsx(Styles.btn_login)} onClick={() => setState('Login')}> Login <AiOutlineUser />  </button>
        </div>
      </div>

  );
}

export default Register;
