import React, { useRef } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import styles from "./Signup.module.scss";
import { Link } from "react-router-dom";
import googleIcon from "../../assets/images/google-icon.svg";
import facebookIcon from "../../assets/images/facebook-icon.svg";


const SignUp = () => {
  let navigate = useNavigate();
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
    navigate("/feed");
  };

  return (
    <>
      <div className={styles.registerContainer}>
        <p className={styles.registerContainerTitle}>Comece agora mesmo</p>
        <form className={styles.registerContainerForm} onSubmit={onSubmit}>
          <input className={styles.registerContainerFormInput} placeholder="Digite seu e-mail" type="email" ref={emailRef} />
          <button className={styles.registerContainerFormSubmitButton} type="submit">Registrar</button>
        </form>
        <div className={styles.registerContainerTerms}>
          <p className={styles.registerContainerTermsText}>
            Ao se inscrever no Questty você concorda com os <Link to="/">Termos de Serviço</Link> e <Link to="/">Política de Privacidade do Questty</Link>.
          </p>
        </div>

        <div className={styles.registerContainerSocial}>
          <p className={styles.registerContainerSocialTitle}>
            Ou inscreva-se usando:
          </p>
          <div className={styles.registerContainerSocialRowIcons}>
            <img className={styles.registerContainerSocialRowIconsImage} src={googleIcon} alt="" />
            <img className={styles.registerContainerSocialRowIconsImage} src={facebookIcon} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
