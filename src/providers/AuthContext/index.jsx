import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleUserLogin = async (email, password) => {
    try {
      setLoading(true);

      const response = await axios.post("http://localhost:3333/sessions", {
        email,
        password,
      });
      console.log(response);
      setUserData(response.data.student);
      window.localStorage.setItem("token", response.data.token);
      navigate("/feed");
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");
      if (token) {
        try {
          setError("");
          setLoading(true);
          const response = await axios.get("http://localhost:3333/students/", {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUserData(response.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  // const logOut = () => {
  //   window.localStorage.setItem("token", "");

  //   navigate("/");
  // };

  return (
    <AuthContext.Provider value={{ handleUserLogin, userData }}>
      {children}
    </AuthContext.Provider>
  );
};

const useContextAuth = () => useContext(AuthContext);

export { useContextAuth, AuthProvider };
