import { useEffect, useState } from 'react';
import { api } from '../../services/api';
// import styles from './Feed.module.css'

export function Feed() {
  const [quests, setQuests] = useState([]);


  useEffect(() => {
    api.get('perguntas')
    .then(response => setQuests(response.data.quests))
  }, []);


  // const quest = {
  //   category: "Quimica - 24 segundos",
  //   text: "O que é um atomo, alguém me explica?",
  // };

  return (
    <>
    {quests.map(quest => {
      return (
        <div key={quest.id}>
          <h1>{quest.title}</h1>
          <p>{quest.text}</p>
          <span>{quest.category}</span>
          <span>{quest.createdAt}</span>
        </div>
      )
    })}
    </>
  );
}
