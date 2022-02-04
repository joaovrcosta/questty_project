import { useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../../services/firebase-config'
import styles from "./Signup.module.scss";

export function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
  })

  const register = async () => {
    try {
       const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
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
    <div>
    <h1>Começe agora mesmo</h1>
    <label >E-mail</label>
    <input  onChange={(event) => setRegisterEmail(event.target.value)} placeholder="exemplo@exemplo.com" type="text" className={styles.input} />
    <label >Senha</label>
    <input onChange={(event) => setRegisterPassword(event.target.value)} placeholder="Digite uma senha forte" type="password" className={styles.input}  />
    <button className={styles.button} onClick={register}>Registre-se</button>
    <h4>User current logged:{user?.email}</h4>
    <button onClick={logout}>Logout</button>
    
    </div>
  );
}