import { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/firebase-config'


export function SignUp() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
       createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
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


  return (
    <div>
    <h1>Começe agora mesmo</h1>
    <label >E-mail</label>
    <input  onChange={(event) => setRegisterEmail(event.target.value)} placeholder="exemplo@exemplo.com" type="text" />
    <label >Senha</label>
    <input onChange={(event) => setRegisterPassword(event.target.value)} placeholder="Digite uma senha forte" type="password"  />
    <button  onClick={register}>Registre-se</button>
    </div>
  );
}