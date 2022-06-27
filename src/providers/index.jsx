import { AuthProvider } from "./AuthContext";
import { QuestionProvider } from "./QuestionContext";

const Provider = ({ children }) => {
  return (
  <>
  <AuthProvider>{children}</AuthProvider>
  <QuestionProvider>{children}</QuestionProvider>
  </>
  )
};

export { Provider };
