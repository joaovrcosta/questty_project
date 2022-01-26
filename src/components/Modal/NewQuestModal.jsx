import { useState } from "react";
import Modal from "react-modal";
import { api } from "../../services/api";
import styles from "./styles.module.css";

export function NewQuestModal({ isOpen, onRequestClose }) {

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')

  async function handleCreateNewQuest(e) {
    e.preventDefault();

    const data = {
      title,
      text,
      category,
    }

    const response = await api.post('/perguntas', data)
    const { quest } = response.data;

    setTitle('');
    setText('');
    setCategory('');
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <form onSubmit={handleCreateNewQuest}>
        <input
          value={title}
          className={styles.titulo}
          placeholder="Titulo da pergunta"
          onChange={event => setTitle(event.target.value)}
        ></input>
        <textarea
          value={text}
          className={styles.questtext}
          placeholder="Escreva sua pergunta aqui. (Para conseguir uma ótima resposta, descreva sua dúvida de forma simples e clara)"
          onChange={event => setText(event.target.value)}
        ></textarea>
          <input 
          className={styles.titulo} 
          placeholder="Matéria" 
          type="text" 
          value={category}
          onChange={event => setCategory(event.target.value)}
          />
        <button type="submit" className={styles.perguntar}>FAÇA SUA PERGUNTA</button>
      </form>
    </Modal>
  )}
