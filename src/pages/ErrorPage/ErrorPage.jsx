import { Link } from "react-router-dom";
import styles from './ErrorPage.module.scss'

export function ErrorPage() {
    return(
        <div className={styles.container}>
            <h1 className={styles.errorText}> <em>#</em>404 </h1>
            <h4 className={styles.notFound}>Não encontramos esta página.</h4>
            <p className={styles.backTo}>voltar para a <Link to="/">página principal</Link></p>
        </div>
    )
}