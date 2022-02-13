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

        {quests.map((quest) => {
          return (
            <div className={styles.questionContainer} key={quest.id}>
              <div className={styles.questionContainerText}>
                <p>{quest.title}</p>
                <p>{quest.text}</p>
                <span>{quest.category}</span>
                <span>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(quest.createdAt)
                  )}
                </span>
              </div>
              <Link to={"tarefa/" + quest.id}>
                <button className={styles.questionContainerResponse}>
                  Responder
                </button>
              </Link>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}
