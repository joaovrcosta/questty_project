import { useState } from "react";
import styles from "./Login.module.scss";

const Signin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, seterrMsg] = useState('')


  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.loginContainer}>
      <p className={styles.loginContainerTitle}>Entre com a sua conta:</p>
      <form className={styles.loginContainerForm} onSubmit={onSubmit}>
        <input
          className={styles.loginContainerFormInput}
          placeholder="Digite seu e-mail"
          type="email"
          value={username}
          onChange={({target}) => setUsername (target.value) }
        />
        <input
          className={styles.loginContainerFormInput}
          placeholder="Digite sua senha"
          type="password"
          value={password}
          onChange={({target}) => setPassword (target.value) }
        />
        <p className={styles.loginContainerFormForgotButton}>
          Esqueci a minha senha
        </p>
        <button className={styles.loginContainerFormSubmitButton} type="submit">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Signin;
