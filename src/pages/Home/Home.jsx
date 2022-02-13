import { Footer } from "../../components/Footer/Footer";
import { LandingHeader } from "../../components/HeaderLandingPage/LandingHeader";
import styles from "./Home.module.scss";

export function Home() {
  return (
    <>
      <LandingHeader />

      <main className={styles.homeContainer}>
        <section className={styles.homeContainerFirstContent}>
          <h2>
            Responder e <br />
            aprender
          </h2>
          <div className={styles.homeContainerFirstContentInput}>
            <input type="text" placeholder="Qual a sua dúvida?" />
            <button>Pergunte</button>
          </div>
        </section>

        <div className={styles.homeFixedButton}>
          <p>Faça uma pergunta</p>
          <button>+</button>
        </div>

        <section className={styles.homeContainerCardsContainer}>
          <h2>Aprendemos juntos</h2>
          <div className={`${styles.homeCard} ${styles.homeCard__1}`}>
            <p className={styles.homeCardTitle}>Visualize sem limite</p>
            <p className={styles.homeCardText}>
              Visualize sem restrições. Pois nossa missão é o seu conhecimento{" "}
            </p>
          </div>
          <div className={`${styles.homeCard} ${styles.homeCard__2}`}>
            <p className={styles.homeCardTitle}>Avalie as melhores respostas</p>
            <p className={styles.homeCardText}>
              Tenha controle das respostas mais exatas para suas dúvidas{" "}
            </p>
          </div>
          <div className={`${styles.homeCard} ${styles.homeCard__3}`}>
            <p className={styles.homeCardTitle}>Respostas de ouro</p>
            <p className={styles.homeCardText}>
              Respostas verificadas por nosso time de mestres{" "}
            </p>
          </div>
        </section>

        <section className={styles.homeContainerHowItWorks}>
          <p className={styles.homeContainerHowItWorksTitle}>
            Como funciona nossa plataforma?
          </p>

          <div
            className={`${styles.homeStepsHowTo} ${styles.homeStepsHowTo__1}`}
          >
            <p className={styles.homeStepsHowToSubTitle}>Primeiros passos</p>
            <p className={styles.homeStepsHowToTitle}>
              1º Pergunte ou Pesquise
            </p>
            <p className={styles.homeStepsHowToText}>
              As vezes ficamos com dúvidas sobre um assunto, então essa é a hora
              de pesquisar
            </p>
            <div className={styles.homeStepsHowToCtaContainer}>
              <button className={styles.homeStepsHowToCtaContainerButton}>
                Pergunte
              </button>
            </div>
          </div>

          <div
            className={`${styles.homeStepsHowTo} ${styles.homeStepsHowTo__2}`}
          >
            <p className={styles.homeStepsHowToSubTitle}>Segundo passo</p>
            <p className={styles.homeStepsHowToTitle}>
              Receba explicações passo a passo
            </p>
            <p className={styles.homeStepsHowToText}>
              As vezes ficamos com dúvidas sobre um assunto, então essa é a hora
              de pesquisar
            </p>
            <div className={styles.homeStepsHowToCtaContainer}>
              <button className={styles.homeStepsHowToCtaContainerButton}>
                Pergunte
              </button>
            </div>
          </div>
        </section>

        <section className={styles.homeContainerOurPurpose}>
          <p className={styles.homeContainerOurPurposeTitle}>Nosso propósito</p>
          <p className={styles.homeContainerOurPurposeText}>
            Queremos ser mais que uma simples plataforma de resposta, queremos
            unir pessoas, reunir a comunidade em prol da evolução continua, em
            busca de conhecimento, em busca dos seus objetivos.
          </p>
          <p className={styles.homeContainerOurPurposeText}>
            Espalhar o conhecimento é nosso propósito, o <b>Questty</b> nasceu
            de um anseio por liberdade, de conquista, a educação pode mudar a
            vida de qualquer um, e nós estamos aqui para te ajudar da melhor
            forma. Se una com a gente nessa!
          </p>
        </section>

        <section className={styles.homeContainerAnyDoubts}>
          <p className={styles.homeContainerAnyDoubtsText}>
            Eai? Ficou com dúvida sobre a matéria, sobre uma resposta?
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
