import { useState } from "react";

import { NewQuestModal } from "./components/Modal/NewQuestModal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Quest } from "./pages/Quest/Quest";
import "./styles/global.scss";

import Header from "./components/Header/Header";

import { Home } from "./pages/Home/Home";
import { Feed } from "./pages/Feed/Feed";
import { Login } from "./pages/Login/Login";
import { SignUp } from "./pages/SignUp/Signup";

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
        <Header onOpenNewQuestForm={handleOpenNewQuestModal} />
        <NewQuestModal
          isOpen={isNewQuestOpen}
          onRequestClose={handleCloseNewQuestModal}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="feed">
            <Route path="" element={<Feed />} />
            <Route path="tarefa/:id" element={<Quest />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
