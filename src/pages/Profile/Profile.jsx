import profileImg from '../../assets/images/profile-image.png'
import styles from './Profile.module.scss'
import { Link } from 'react-router-dom'


export function Profile() {
 return(
     <div className={styles.container}>
     <img src={profileImg} alt="image"/>
     <span className={styles.name}>joaovrcosta</span>
     <Link to="edit"><button className={styles.button}>Editar perfil</button></Link>
     <p className={styles.createAt}>Ativo pela última vez há 2 dias</p>
     <p className={styles.createAt}>Entrou em 10 de fevereiro de 2021</p>
     </div>
 )
}