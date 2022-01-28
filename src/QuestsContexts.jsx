import { createContext, useEffect, useState } from 'react';
import { api } from './services/api';

export const QuestsContext = createContext([]);

export function QuestsProvider({ children }) {
    const [quests, setQuests] = useState([]);


  useEffect(() => {
    api.get('perguntas')
    .then(response => setQuests(response.data.quests))
  }, []);

  async function createQuest(questInput) {
    const response = await api.post('/perguntas', {
      ...questInput,
      createdAt: new Date(),
    })
    const { quest } = response.data;

    setQuests([
      ...quests,
      quest,
    ])
  }

  return (
      <QuestsContext.Provider value={{quests, createQuest}}>
          {children}
      </QuestsContext.Provider>
  )
}