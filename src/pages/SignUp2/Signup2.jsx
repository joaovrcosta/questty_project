import React, { useRef } from "react";
import { useUserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import styles from "./Signup2.module.scss";
import { Link } from "react-router-dom";
import googleIcon from "../../assets/images/google-icon.svg";
import facebookIcon from "../../assets/images/facebook-icon.svg";

const SignUp2 = () => {
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
        <p className={styles.registerContainerSubtitle}>
          Vamos completar seu cadastro:
        </p>
        <form className={styles.registerContainerForm} onSubmit={onSubmit}>
          <input
            className={styles.registerContainerFormInput}
            placeholder="Digite seu e-mail"
            type="email"
            ref={emailRef}
          />

          <div className={styles.registerContainerFormRowDivided}>
            <select
              id="estado"
              name="estado"
              className={styles.registerContainerFormRowDividedSelect}
            >
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
              <option value="EX">Estrangeiro</option>
            </select>

            <input
              className={styles.registerContainerFormRowDividedDate}
              placeholder="Nascimento"
              type="text"
              // ref={emailRef}
            />
          </div>

          <input
            className={styles.registerContainerFormInput}
            placeholder="Digite sua senha"
            type="password"
            // ref={emailRef}
          />

          <button
            className={styles.registerContainerFormSubmitButton}
            type="submit"
          >
            Criar conta
          </button>
          <div className={styles.registerContainerFormTerms}>
            <input
              className={styles.registerContainerFormTermsCheckbox}
              type="checkbox"
              id="terms"
              name="terms"
              value="terms"
            />
            <label className={styles.registerContainerFormTermsText}>
              Eu aceito os <Link to="/">Termos de Serviço</Link> e{" "}
              <Link to="/">Política de Privacidade do Questty</Link>.
            </label>
          </div>
        </form>

        <div className={styles.registerContainerComeback}>
          <button className={styles.registerContainerComebackButton}>
            Voltar
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp2;
