import styles from "./Feed.module.scss";
import { Footer } from "../../components/Footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export function Feed() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3333/questions/list").then((res) => {
      setQuestions(res.data);
    });
  }, []);

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

      <ul>
        {questions.map((repo, key) => {
          return (
            <div key={key} className={styles.questionContainer}>
              <li className={styles.questionContainerText} key={key}>
                <strong>{repo.title}</strong>
                <p>{repo.content}</p>
                <span>
                  {new Intl.DateTimeFormat("pt-BR").format(
                    new Date(repo.created_at)
                  )}
                </span>
              </li>
              <Link to={"tarefa/" + repo.id}>
                <button className={styles.questionContainerResponse}>
                  Responder
                </button>
              </Link>
            </div>
          );
        })}
      </ul>
      <Footer />
    </>
  );
}
