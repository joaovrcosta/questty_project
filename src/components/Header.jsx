import styles from "./Header.module.css";
import { ReactComponent as Questty } from "../assets/logo-image_vetor.svg";
import { Link } from "react-router-dom";


const Header = ({onOpenNewQuestForm}) =>{
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo}>
          <Questty />
        </Link>
        <input placeholder="Qual a sua dúvida?" className="search-bar"></input>
        <button
          className={styles.makequestbutton}
          onClick={onOpenNewQuestForm} //<<<Botão onclick
        >
          FAÇA SUA PERGUNTA
        </button>
      </nav>
    </header>
  );
}

export default Header;
