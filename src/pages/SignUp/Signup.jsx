import styles from "./Signup.module.scss";
import { Link } from "react-router-dom";
import googleIcon from "../../assets/images/google-icon.svg";
import facebookIcon from "../../assets/images/facebook-icon.svg";
import axios from "axios";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  // const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();

    axios
      .get(`http://localhost:3333/students/list`, {
        params: { email },
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <div className={styles.registerContainer}>
        <p className={styles.registerContainerTitle}>Comece agora mesmo</p>
        <form className={styles.registerContainerForm} onSubmit={registerUser}>
          <input
            className={styles.registerContainerFormInput}
            placeholder="Digite seu e-mail"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <button
            className={styles.registerContainerFormSubmitButton}
            type="submit"
            onClick={registerUser}
          >
            Registrar
          </button>
        </form>
        <div className={styles.registerContainerTerms}>
          <p className={styles.registerContainerTermsText}>
            Ao se inscrever no Questty você concorda com os{" "}
            <Link to="/">Termos de Serviço</Link> e{" "}
            <Link to="/">Política de Privacidade do Questty</Link>.
          </p>
        </div>

        <div className={styles.registerContainerSocial}>
          <p className={styles.registerContainerSocialTitle}>
            Ou inscreva-se usando:
          </p>
          <div className={styles.registerContainerSocialRowIcons}>
            <img
              className={styles.registerContainerSocialRowIconsImage}
              src={googleIcon}
              alt=""
            />
            <img
              className={styles.registerContainerSocialRowIconsImage}
              src={facebookIcon}
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
