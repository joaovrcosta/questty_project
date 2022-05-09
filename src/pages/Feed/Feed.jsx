import { useContext } from "react";
import styles from "./Feed.module.scss";
import { QuestsContext } from "../../contexts/QuestsContexts";
import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";

export function Feed() {
  const { quests } = useContext(QuestsContext);

  return (
    <>
      <div className={styles.feedContainer}>
        <div className={styles.feedContainerQuestionButton}>
          <button>Perguntar</button>
        </div>

        <div className={styles.feedContainerFilterButton}>
          <button>Matérias</button>
        </div>

        <div className={styles.feedContainerFilterButton}>
          <button>Todas</button>
        </div>

        <div className={styles.feedContainerFetchMore}>
          <button>+6 Perguntas</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
