import React, { useRef } from "react";
import { useUserContext } from "../../contexts/UserContext"
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  let navigate = useNavigate()
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {

    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
    navigate('/feed');
  };


  return (
    <div className="form">
      <h2>Começe agora mesmo</h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Name" type="name" ref={nameRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
