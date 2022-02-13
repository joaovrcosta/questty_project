import { useState, useContext } from "react";
import Modal from "react-modal";
import { QuestsContext } from "../../contexts/QuestsContexts";
import styles from "./styles.module.scss";

export function NewQuestModal({ isOpen, onRequestClose }) {
  const { createQuest } = useContext(QuestsContext)

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [category, setCategory] = useState('')

  async function handleCreateNewQuest(e) {
    e.preventDefault();

    await createQuest({
      title,
      text,
      category
    })

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
          placeholder="Titulo do Post"
          onChange={event => setTitle(event.target.value)}
        ></input>

        <textarea
          value={text}
          className={styles.questtext}
          placeholder="Escreva aqui o post"
          onChange={event => setText(event.target.value)}
        ></textarea>

          <input 
          className={styles.titulo} 
          placeholder="Categoria" 
          type="text" 
          value={category}
          onChange={event => setCategory(event.target.value)}
          />

        <button type="submit" className={styles.perguntar}>POSTAR</button>
        
      </form>
    </Modal>
  )}
