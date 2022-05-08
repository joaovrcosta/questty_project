import { useState } from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Quest } from "./pages/Quest/Quest";
import "./styles/global.scss";

import Header from "./components/Header/Header";
import { Test } from "./pages/TestApi/Test";
import { Home } from "./pages/Home/Home";
import { Feed } from "./pages/Feed/Feed";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/Signup";
import SignUp2 from "./pages/SignUp2/Signup2";
import { Profile } from "./pages/Profile/Profile";
import { EditProfile } from "./pages/EditProfile/EditProfile";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import { EmailConfirmation } from "./pages/EmailConfirmation/EmailConfirmation";
import { NewQuestionModal } from "./components/QuestionModal/QuestionModal";
// import ProtectRoutes from "./helper/ProtectedRoutes";
// import { Footer } from "./components/Footer/Footer";

function App() {
  // const { user, loading, error } = useUserContext();
  const [isNewQuestionModalOpen , setIsNewQuestionModalOpen] = useState()

  function handleOpenNewQuestionModal() {
    setIsNewQuestionModalOpen(true);
  }

  function handleCloseNewQuestionModal() {
    setIsNewQuestionModalOpen(false);
  }

  return (
    <>
      <BrowserRouter>
          <Header onOpenNewQuestionForm={handleOpenNewQuestionModal} />
          <NewQuestionModal
            isOpen={isNewQuestionModalOpen}
            onRequestClose={handleCloseNewQuestionModal}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="login" element={<Login />} />
            <Route path="test" element={<Test />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signup-2" element={<SignUp2 />} />
            <Route path="question" element={<Quest />} />
            <Route path="emailconfirmation" element={<EmailConfirmation />} />
            <Route path="profile">
              <Route path="" element={<Profile />} />
              <Route path="edit" element={<EditProfile />} />
            </Route>
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