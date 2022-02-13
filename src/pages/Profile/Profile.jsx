import styles from './Profile.module.scss'
import { Link } from 'react-router-dom'
import { useUserContext } from "../../contexts/UserContext";


export function Profile() {
    const { user } = useUserContext();

 return(
     <div className={styles.container}>
     <span className={styles.name}>{user?.displayName}</span>
     <Link to="edit"><button className={styles.button}>Editar perfil</button></Link>
     <p className={styles.createAt}>Ativo pela última vez <strong>{user.lastSignInTime}</strong></p>
     <p className={styles.createAt}>Entrou em <strong>10 de fevereiro de 2021</strong></p>
     </div>
 )
}