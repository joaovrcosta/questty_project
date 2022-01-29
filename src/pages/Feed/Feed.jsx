import { useContext } from 'react';
import styles from './Feed.module.css'
import { QuestsContext } from '../../QuestsContexts'
import { Link } from 'react-router-dom';

export function Feed() {
  const { quests } = useContext(QuestsContext);

  return (
    <>
    {quests.map(quest => {
      return (
        <form className={styles.tweet} key={quest.id}>
          <h1>{quest.title}</h1>
          <p>{quest.text}</p>
          <span>{quest.category}</span>
          <span>{new Intl.DateTimeFormat('pt-BR').format(new Date(quest.createdAt))}</span>
          <Link to={"tarefa/"+quest.id}><button className={styles.response}>Responder</button></Link>
        </form>
      )
    })}
    </>
  );
}
