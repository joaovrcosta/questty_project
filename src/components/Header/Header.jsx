import styles from "./Header.module.css";
// import { ReactComponent as Questty } from "../../assets/logo-image_vetor.svg";
import { Link } from "react-router-dom";


const Header = ({onOpenNewQuestForm}) =>{
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo}>
        </Link>
        <input className={styles.search} placeholder="Digite o nome do post"></input>
        <button
          className={styles.makequestbutton}
          onClick={onOpenNewQuestForm} //<<<Botão onclick
        >
          Faça uma postagem
        </button>
      </nav>
    </header>
  );
}

export default Header;
