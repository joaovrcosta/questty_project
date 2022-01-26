import { BrowserRouter } from "react-router-dom"
import { useState } from 'react'
import { NewQuestModal } from "./components/Modal/NewQuestModal";
import Header from "./components/Header";
import './styles/global.css';
import { Feed } from "./pages/Feed/Feed";

function App() {
  const [isNewQuestOpen, setIsNewQuestOpen] = useState(false);

  function handleOpenNewQuestModal() {
    setIsNewQuestOpen(true);
  }

  function handleCloseNewQuestModal() {
    setIsNewQuestOpen(false);
  }
  
  return (
    <>
      <BrowserRouter>
          <Header onOpenNewQuestForm={handleOpenNewQuestModal}/>
          <Feed />
          <NewQuestModal
          isOpen={isNewQuestOpen}
          onRequestClose={handleCloseNewQuestModal}
          />
      </BrowserRouter>
    </>
  );
}

export default App;
