import { useState } from "react";

import { NewQuestModal } from "./components/Modal/NewQuestModal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Quest } from "./pages/Quest/Quest";
import "./styles/global.scss";

import Header from "./components/Header/Header";

import { Home } from "./pages/Home/Home";
import { Feed } from "./pages/Feed/Feed";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/Signup";
import { Profile } from "./pages/Profile/Profile";
import { EditProfile } from "./pages/EditProfile/EditProfile";
import { UserStorage } from "./contexts/UserContext";
import { useUserContext } from "./contexts/UserContext";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
// import ProtectRoutes from "./helper/ProtectedRoutes";
// import { Footer } from "./components/Footer/Footer";

function App() {
  const { user, loading, error } = useUserContext();
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
        <UserStorage>
          <Header onOpenNewQuestForm={handleOpenNewQuestModal} />
          <NewQuestModal
            isOpen={isNewQuestOpen}
            onRequestClose={handleCloseNewQuestModal}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="profile">
              <Route path="" element={<Profile />} />
              <Route path="edit" element={<EditProfile />} />
            </Route>
            <Route path="feed">
              <Route path="" element={<Feed />} />
              <Route path="tarefa/:id" element={<Quest />} />
            </Route>
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </>
  );
}

export default App;
