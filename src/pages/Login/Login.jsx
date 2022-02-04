// import GoogleIcon from '../../assets/images/googleIcon.png';
// import FacebookIcon from '../../assets/images/facebookIcon.png';
import styles from "./Login.module.scss";


export function Login() {
  return (
    <>
    <h1>Entre com a sua conta</h1>
    <label >E-mail</label>
    <input placeholder="Digite seu e-mail" type="text" className={styles.input}/>
    <label >Senha</label>
    <input placeholder="Digite sua senha" type="password" className={styles.input} />
    <button className={styles.button}>Entrar</button>
    </>
  );
}
