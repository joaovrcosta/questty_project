import { useState } from "react";
import styles from "./Login.module.scss";
import axios from 'axios'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3333/sessions", {
        email,
        password,
      })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.loginContainer}>
      <p className={styles.loginContainerTitle}>Entre com a sua conta:</p>
      <form className={styles.loginContainerForm} onSubmit={handleSubmit}>
        <input
          className={styles.loginContainerFormInput}
          placeholder="Digite seu e-mail"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className={styles.loginContainerFormInput}
          placeholder="Digite sua senha"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
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
