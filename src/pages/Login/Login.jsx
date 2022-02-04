// import GoogleIcon from '../../assets/images/googleIcon.png';
// import FacebookIcon from '../../assets/images/facebookIcon.png';
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../services/firebase-config'
import styles from "./Login.module.scss";
import { useState } from "react";
import { Link } from 'react-router-dom'


export function Login() {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })


  const login = async () => {
    try {
       const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    // ...
  })
    } catch (error) {
      console.log(error.message);
      console.log(error)
    }
  };

  const logout = async () => {
    await signOut(auth);
  }


  return (
    <>
    <h1>Entre com a sua conta</h1>
    <label >E-mail</label>
    <input onChange={(event) => setLoginEmail(event.target.value)} placeholder="Digite seu e-mail" type="text" className={styles.input}/>
    <label >Senha</label>
    <input  onChange={(event) => setLoginPassword(event.target.value)} placeholder="Digite sua senha" type="password" className={styles.input} />
    <button onClick={login} className={styles.button}>Entrar</button>
    <Link to="/signup"><p className={styles.register}>Registre-se</p></Link>
    <h4>User current logged:</h4>
    {user?.email}
    <button onClick={logout}>Logout</button>
    </>
  );
}
