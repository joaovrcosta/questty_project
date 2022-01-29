import {useContext} from 'react';
import Header from '../../components/Header/Header';
import styles from '../Quest/Quest.module.css'
import { QuestsContext } from '../../QuestsContexts'
import { useParams } from 'react-router-dom';


export function Quest() {
    const { quests } = useContext(QuestsContext);

    const { id } = useParams()
    const quest = quests.find(item => item.id === id)

    return (
        <>
        <Header />
            <div className={styles.post} key={quest.id}>
              <h1>{quest.title}</h1>
              <p>{quest.text}</p>
              <span>{quest.category}</span>
              <span>{new Intl.DateTimeFormat('pt-BR').format(new Date(quest.createdAt))}</span>
              <button className={styles.response}>RESPONDER</button>
            </div>
        </>
      );
}

