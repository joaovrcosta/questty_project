import Modal from "react-modal";
// import styles from "./QuestionModal.module.scss"

const customStyle = {
  content: {
    top: "15%",
  },
};

export function NewQuestionModal({ isOpen, onRequestClose }) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyle}
      >
        <form action="submit">
          <input placeholder="Digite um titulo" type="text" />
          <input placeholder="Digite o conteudo" type="text" />
          <select id="matéria" name="matéria">
            <option selected disabled hidden value="">Escolha a matéria</option>
            <option value="Quimica">Quimica</option>
            <option value="Artes">Artes</option>
            <option value="Português">Português</option>
            <option value="Matematica">Matematica</option>
            <option value="Física">Física</option>
            <option value="História">História</option>
            <option value="ENEM">ENEM</option>
            <option value="Geografia">Geografia</option>
            <option value="Biologia">Biologia</option>
            <option value="Filosofia">Filosofia</option>
            <option value="Sociologia">Sociologia</option>
            <option value="Administração">Administração</option>
            <option value="Pedagogia">Pedagogia</option>
            <option value="Inglês">Inglês</option>
            <option value="Saude">Saude</option>
            <option value="Ed.Fisica">Ed.Fisica</option>
            <option value="Contabilidade">Contabilidade</option>
            <option value="Direito">Direito</option>
            <option value="Psicologia">Psicologia</option>
            <option value="Logica">Logica</option>
            <option value="Espanhol">Espanhol</option>
            <option value="Musica">Musica</option>
          </select>
          <button>Faça sua pergunta</button>
        </form>
      </Modal>
    </div>
  );
}
