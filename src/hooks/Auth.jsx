import { useContext, createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });

      const { user, token } = response.data;

      localStorage.setItem("foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("foodexplorer:token", token);

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

  async function signOut() {
    localStorage.removeItem("foodexplorer:user");
    localStorage.removeItem("foodexplorer:token");

    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);
        const response = await api.patch("/users/avatar", fileUploadForm);

        user.avatar = response.data.avatar;
      }
      await api.put("/users", user);
      localStorage.setItem("foodexplorer:user", JSON.stringify(user));

      setData({ user, token: data.token });
      toast.success("Perfil atualizado!");
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Erro ao atualizar o perfil.");
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("foodexplorer:user");
    const token = localStorage.getItem("foodexplorer:token");

    if(token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setData({ token, user: JSON.parse(user) });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, user: data.user, updateProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
