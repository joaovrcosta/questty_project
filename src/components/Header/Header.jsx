import styles from "./Header.module.scss";
// import { ReactComponent as Questty } from "../../assets/logo-image_vetor.svg";
import { Link } from 'react-router-dom'


const Header = ({onOpenNewQuestForm}) =>{
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <input className={styles.search} placeholder="Digite o nome do post"></input>
        <button
          className={styles.makequestbutton}
          onClick={onOpenNewQuestForm} //<<<Botão que abre modal
        >
          Faça uma postagem
        </button>
        <Link to="login"><button>Login</button></Link>
      </nav>
    </header>
  );
}

export default Header;
