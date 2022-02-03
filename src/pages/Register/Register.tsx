import GoogleIcon from '../../assets/images/googleIcon.png';
import FacebookIcon from '../../assets/images/facebookIcon.png';
import styles from "./Register.module.scss";
// import { useNavigate } from 'react-router-dom';


export function Register() {
  return (
    <div className={styles.container}>
      <form>
        <h1>Começe agora mesmo:</h1>
        <label>E-mail</label> 
        <input placeholder="exemplo@exemplo.com" />
        <label>Senha</label>
        <input type="password" placeholder="Digite uma senha forte" />
        <button type="submit">Registrar-se</button>
        <button>Entrar</button>
      </form>
      <div>
        <button><img src={GoogleIcon} alt="Botão para entrar com google"/></button>
        <button><img src={FacebookIcon} alt="Botão para entrar com Facebook"/></button>
      </div>
    </div>
  );
}