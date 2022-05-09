import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
// import { useUserContext } from "../../contexts/UserContext";
import questtyLogo from "../../assets/images/questty-logo.svg";
import avatar03 from "../../assets/images/avatar-03.svg";
import lupaIcon from "../../assets/images/lupa-icon.svg";

const Header = ({ onOpenNewQuestionForm }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerContainer}>
        <Link to="/" className={styles.headerContainerLogo}>
          <img
            className={styles.headerContainerLogoImage}
            src={questtyLogo}
            alt="Questty Logo"
          />
        </Link>
        <div className={styles.headerContainerSearch}>
          <input
            className={styles.headerContainerSearchInput}
            placeholder="Qual a sua dúvida?"
          ></input>
          <img
            className={styles.headerContainerSearchLogo}
            src={lupaIcon}
            alt=""
          />
        </div>
        <Link to="profile" className={styles.headerContainerImage}>
          <img
            className={styles.headerContainerImageLink}
            src={avatar03}
            alt=""
          />
        </Link>
        <button type="button" onClick={onOpenNewQuestionForm}>Postar</button>
      </nav>
    </header>
  );
};

export default Header;
