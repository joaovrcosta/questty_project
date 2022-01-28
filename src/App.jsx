import { BrowserRouter } from "react-router-dom"
import { useState } from 'react'
import { NewQuestModal } from "./components/Modal/NewQuestModal";
import Header from "./components/Header/Header";
import './styles/global.css';
import { Feed } from "./pages/Feed/Feed";
import { QuestsProvider } from './QuestsContexts';

function App() {
  const [isNewQuestOpen, setIsNewQuestOpen] = useState(false);
  


  function handleOpenNewQuestModal() {
    setIsNewQuestOpen(true);
  }

  function handleCloseNewQuestModal() {
    setIsNewQuestOpen(false);
  }
  
  return (

    <QuestsProvider>
      <BrowserRouter>
          <Header onOpenNewQuestForm={handleOpenNewQuestModal}/>
          <Feed />
          <NewQuestModal
          isOpen={isNewQuestOpen}
          onRequestClose={handleCloseNewQuestModal}
          />
      </BrowserRouter>
    </QuestsProvider>
  );
}

export default App;
