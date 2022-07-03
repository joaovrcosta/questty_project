import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api-test";

const AuthContext = createContext();
const useContextAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [logged, setLogged] = useState(false);
  const [session, setSession] = useState(null);

  const navigate = useNavigate();

  const handleUserLogin = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:3333/sessions", {
        email,
        password,
      });

      setUserData(response.data.student);
    
      window.localStorage.setItem("token", response.data.token);
      // navigate("/feed");
      setLogged(true)
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    (async () => {
      const token = await localStorage.getItem("token");
      if (token) {
        await api
        .get("/students")
        .then(({ data }) => {
          setUserData(data);
          setLogged(true);
        })
        .catch(({ response }) => {
          localStorage.removeItem("token");
          setLogged(false);
          //alert()
        });
      }
      setLoading(false);
    })();
  }, []);
  
  const logOut = () => {
      window.localStorage.setItem("token", "");
    
      navigate("/");
    };
    
    // useEffect(() => {
    //   async function autoLogin() {
    //     const token = window.localStorage.getItem("token");
    //     console.log(token);
    //     if (token) {
    //       try {
    //         // setError(null);
    //         setLoading(true);
    //         const response = await axios.get("http://localhost:3333/students/", {
    //           headers: { Authorization: `Bearer ${token}` },
    //         });
    //         setUserData(response.data);
    //       } catch (error) {
    //         console.log(error);
    //       } finally {
    //         setLoading(false);
    //       }
    //     } else {
    //       setLogin(false);
    //     }
    //   }
    //   autoLogin();
    // }, []);

    
    return (
      <AuthContext.Provider
      value={{ logged, session, handleUserLogin, userData, loading, logOut }}
      >
      {children}
    </AuthContext.Provider>
  );
};


export { useContextAuth, AuthProvider };
