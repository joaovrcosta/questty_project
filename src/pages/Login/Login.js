import React, { useRef } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  let navigate = useNavigate();
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
    navigate('/feed');
  }

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <div className="form">
      <h2> Login </h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button type="submit">Sign In</button>
        <p onClick={forgotPasswordHandler}>Forgot Password?</p>
        <a href="/signup">Registre-se</a>
      </form>
    </div>
  );
};

export default Signin;
