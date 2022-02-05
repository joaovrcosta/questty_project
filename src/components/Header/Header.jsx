import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/UserContext";

const Header = ({ onOpenNewQuestForm }) => {
  const {currentUser} = useAuth()

  return (
    <header className={styles.container}>
      <nav className={`${styles.nav} container`}>
        <Link to="/">
          <button>Home</button>
        </Link>
        <input
          className={styles.search}
          placeholder="Digite o nome do post"
        ></input>
        <button
          className={styles.makequestbutton}
          onClick={onOpenNewQuestForm} //<<<Botão que abre modal
        >
          FAÇA SUA PERGUNTA
        </button>
        <Link to="login">
          <button className={styles.loginButton}>ENTRAR</button>
        </Link>
        <p>User:{currentUser}</p>
      </nav>
    </header>
  );
};

export default Header;
