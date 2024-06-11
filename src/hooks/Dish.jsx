import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";

const DishContext = createContext();

function DishProvider({ children }) {
  const [dish, setDish] = useState(null);

  async function fetchDishDetails(id) {
    try {
      const response = await api.get(`/dishes/${id}`);
      setDish(response.data);
    } catch (error) {
        if (response.error) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Erro ao encontrar detalhes do prato.");
        }
    }
  }

  return (
    <DishContext.Provider value={{ dish, setDish, fetchDishDetails }}>
      {children}
    </DishContext.Provider>
  );
}

const useDish = () => useContext(DishContext);

export { useDish, DishProvider };
