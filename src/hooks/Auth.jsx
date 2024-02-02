import { useContext, createContext, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });

      const { user, token } = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível entrar.");
      }
    }
  }

  return (
    <AuthContext.Provider 
    value={{ signIn, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
