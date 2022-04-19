import React, { useRef } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";

const Signin = () => {
  let navigate = useNavigate();
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
    navigate("/feed");
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <div className={styles.loginContainer}>
      <p className={styles.loginContainerTitle}>Entre com a sua conta:</p>
      <form className={styles.loginContainerForm} onSubmit={onSubmit}>
        <input className={styles.loginContainerFormInput} placeholder="Digite seu e-mail" type="email" ref={emailRef} />
        <input className={styles.loginContainerFormInput} placeholder="Digite sua senha" type="password" ref={psdRef} />
        <p className={styles.loginContainerFormForgotButton} onClick={forgotPasswordHandler}>Esqueci a minha senha</p>
        <button className={styles.loginContainerFormSubmitButton} type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Signin;
