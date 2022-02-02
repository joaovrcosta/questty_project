import GoogleIcon from '../../assets/images/googleIcon.png';
import FacebookIcon from '../../assets/images/facebookIcon.png';
import styles from "./Login.module.scss";


export function Login() {
  return (
    <div className={styles.container}>
      <form>
        <h1>Entre com a sua conta:</h1>
        <label>E-mail</label>
        <input placeholder="exemplo@exemplo.com" />
        <label>Senha</label>
        <input type="password" placeholder="Digite uma senha forte" />
        <span>Esqueci a minha senha</span>
        <button type="submit">Entrar</button>
        <button>Registrar-se</button>
      </form>
      <div>
        <button><img src={GoogleIcon} alt="Botão para entrar com google"/></button>
        <button><img src={FacebookIcon} alt="Botão para entrar com Facebook"/></button>
      </div>
    </div>
  );
}
