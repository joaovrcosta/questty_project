import styles from "./Header.module.scss";
// import { ReactComponent as Questty } from "../../assets/logo-image_vetor.svg";


const Header = ({onOpenNewQuestForm}) =>{
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
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
