import React, { useRef } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.scss";

const SignUp = () => {
  let navigate = useNavigate();
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
    navigate("/feed");
  };

  return (
    <>
      <div className={styles.registerContainer}>
        <p className={styles.registerContainerTitle}>Começe agora mesmo</p>
        <form className={styles.registerContainerForm} onSubmit={onSubmit}>
          <input className={styles.registerContainerFormInput} placeholder="Digite seu e-mail" type="email" ref={emailRef} />
          <button className={styles.registerContainerFormSubmitButton} type="submit">Registrar</button>
        </form>

        <p></p>
      </div>
    </>
  );
};

export default SignUp;
