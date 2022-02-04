import styles from "./Header.module.scss";
import { Link } from 'react-router-dom'


const Header = ({onOpenNewQuestForm}) =>{
  return (
    <header className={styles.container}>
      <nav className={`${styles.nav} container`}>
        <Link to="/"><button>Home</button></Link>
        <input className={styles.search} placeholder="Digite o nome do post"></input>
        <button
          className={styles.makequestbutton}
          onClick={onOpenNewQuestForm} //<<<Botão que abre modal
        >
          FAÇA SUA PERGUNTA
        </button>
        <Link 
        to="login">
          <button className={styles.loginButton} >ENTRAR</button></Link>
      </nav>
    </header>
  );
}

export default Header;
