import { useContext } from 'react';
import styles from './Feed.module.css'
import { QuestsContext } from '../../QuestsContexts'

export function Feed() {
  const { quests } = useContext(QuestsContext);

  console.log(quests)

  return (
    <>
    {quests.map(quest => {
      return (
        <form className={styles.tweet} key={quest.id}>
          <h1>{quest.title}</h1>
          <p>{quest.text}</p>
          <span>{quest.category}</span>
          <span>{new Intl.DateTimeFormat('pt-BR').format(new Date(quest.createdAt))}</span>
          <button>Responder</button>
        </form>
      )
    })}
    </>
  );
}
