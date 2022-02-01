import { useState } from "react";
import { NewQuestModal } from "./components/Modal/NewQuestModal";
import Header from "./components/Header/Header";
import "./styles/global.scss";
import { Feed } from "./pages/Feed/Feed";
import { Quest } from "./pages/Quest/Quest";

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
      <Header onOpenNewQuestForm={handleOpenNewQuestModal} />
      <Feed>
        <Quest />
      </Feed>
      <NewQuestModal
        isOpen={isNewQuestOpen}
        onRequestClose={handleCloseNewQuestModal}
      />
    </>
  );
}

export default App;
