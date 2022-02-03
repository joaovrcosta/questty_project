import styles from "./LandingHeader.module.scss"

export function LandingHeader() {
  return (
    <>
      <header className={styles.headerLanding}>
        <div className={styles.headerLandingLogo}>
          <p>Logo</p>
        </div>
        <nav className={styles.headerLandingNavButtons}>
          <a href="/login">Entrar</a>
          <a href="/signup">Cadastrar</a>
        </nav>
      </header>
    </>
  );
}
