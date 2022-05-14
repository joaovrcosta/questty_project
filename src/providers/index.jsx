import { AuthProvider } from "./AuthContext";

const Provider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export { Provider };
