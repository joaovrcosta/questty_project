import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.scss";

export function ErrorPage() {
  return (
    <div className={styles.errorPageContainer}>
      <h1 className={styles.errorPageContainerTextTitle}>#404</h1>
      <p className={styles.errorPageContainerTextDescription}>
        Parece que não existe nada <br/> nessas águas...🌊
      </p>
      <p className={styles.errorPageContainerTextGoHome}>
        Voltar para a <Link to="/">terra firme</Link>.
      </p>
    </div>
  );
}
