import { useContext } from "react";
import styles from "../Question/Question.module.scss";
import avatar18 from "../../assets/images/avatar-18.svg";
import dialogIcon from "../../assets/images/dialog-icon.svg";
import plusIcon from "../../assets/images/plus-icon.svg";
import noAnswers from "../../assets/images/no-answers.svg";
import starLike from "../../assets/images/star-like-icon.svg";
import starRated from "../../assets/images/star-rated.svg";
import starUnrated from "../../assets/images/star-unrated.svg";


export function Question() {
  // const { quests } = useContext(QuestsContext);

  // const { id } = useParams()
  // const quest = quests.find(item => item.id === id)

  return (
    <main className={styles.questContainer}>
      <div className={styles.questContainerUpper}>
        <img
          className={styles.questContainerUpperImage}
          src={avatar18}
          alt="user avatar"
        />
        <p className={styles.questContainerUpperNickname}>joaovrcosta</p>
        <p className={styles.questContainerUpperCreatedAt}>há 43 minutos</p>
        <p className={styles.questContainerUpperSubject}>Biologia</p>
      </div>

      <div className={styles.questContainerQuestion}>
        <div className={styles.questContainerQuestionPreview}>
          <h1 className={styles.questContainerQuestionPreviewText}>
            Durante os séculos XVI e XVII, um dos temas mais debatidos pelos
            pensadores da Europa ocidental sobre a política era o conceito de
            Estado. O bispo francês Jacques Bossuet escreveu, em 1709, a obra
            “Política tirada das palavras da sagrada escritura”, em que afirma:
          </h1>
        </div>

        <div className={styles.questContainerQuestionRemaining}>
          <h2 className={styles.questContainerQuestionRemainingText}>
            “Todo o poder vem de Deus. Os governantes, pois, agem como ministros
            de Deus e seus representantes na terra. Consequentemente, o trono
            real não é o trono de um homem, mas o trono do próprio Deus.”
            <br />
            <br /> A partir da citação acima e de e seus conhecimentos sobre os
            teóricos do absolutismo, assinale a alternativa correta:
          </h2>
        </div>

        <div className={styles.questContainerQuestionDetails}>
          <input
            className={styles.questContainerQuestionDetailsInput}
            placeholder="Pedir detalhes sobre a pergunta"
          />

          <img
            className={styles.questContainerQuestionDetailsImage}
            src={dialogIcon}
            alt=""
          />
        </div>

        <div className={styles.questContainerQuestionRespond}>
          <textarea
            name="answer"
            id=""
            cols="30"
            rows="10"
            className={styles.questContainerQuestionRespondTextarea}
          ></textarea>

          <button className={styles.questContainerQuestionRespondButton}>
            <img
              className={styles.questContainerQuestionRespondButtonImage}
              src={plusIcon}
              alt=""
            />
            Responder
          </button>
        </div>

        <div className={styles.questContainerQuestionAnswers}>
          <div className={styles.questContainerQuestionAnswersItemBest}>
            <div className={styles.answerContainer}>
              <div className={styles.answerContainerUpper}>
                <img
                  src={avatar18}
                  alt="profile image"
                  className={styles.answerContainerUpperImage}
                />
                <p className={styles.answerContainerUpperNickname}>
                  joaovrcosta
                </p>

                <p className={styles.answerContainerUpperHighlight}>
                  Melhor resposta
                </p>

                <div className={styles.answerContainerUpperStars}>
                  <img
                    className={styles.answerContainerUpperStarsImage}
                    src={starLike}
                    alt=""
                  />
                  <p className={styles.answerContainerUpperStarsNumber}>292</p>
                </div>
              </div>
              <div className={styles.answerContainerBox}>
                <p className={styles.answerContainerBoxText}>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections.
                </p>
              </div>
              <div className={styles.answerContainerLower}>
                <button className={styles.answerContainerLowerThankButton}>
                  Valeu <img src={starLike} alt="" /> 593
                </button>

                <button className={styles.answerContainerLowerRateButton}>
                  <img src={starRated} alt="" />
                  <img src={starRated} alt="" />
                  <img src={starRated} alt="" />
                  <img src={starRated} alt="" />
                  <img src={starUnrated} alt="" />
                  4,2</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.emptyAnswers}>
          <p className={styles.emptyAnswersText}>Nada por aqui...</p>
          <img className={styles.emptyAnswersImage} src={noAnswers} alt="" />
        </div>
      </div>
    </main>
  );
}
