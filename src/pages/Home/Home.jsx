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

        <section className={styles.homeContainerCardsContainer}>
          <h2>Aprendemos juntos</h2>
          <div className={`${styles.homeCard} ${styles.homeCard__1}`}></div>
          <div className={`${styles.homeCard} ${styles.homeCard__2}`}></div>
          <div className={`${styles.homeCard} ${styles.homeCard__3}`}></div>
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
      </main>

      <Footer />
    </>
  );
}
