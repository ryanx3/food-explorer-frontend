import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { useAuth } from "./Auth";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [orderItemsCount, setOrderItemsCount] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const storedOrderItemsCount =
        parseInt(localStorage.getItem(`@foodexplorer:order`), 10) || 0;
      setOrderItemsCount(storedOrderItemsCount);
    } else {
      const storedOrderItemsCount =
        parseInt(localStorage.getItem(`@foodexplorer:order`), 10) || 0;
      setOrderItemsCount(storedOrderItemsCount);
    }
  }, [user]);

  const handleAddDishToLocalStorage = (dishToAdd, quantity) => {
    const totalPrice = parseFloat(dishToAdd.price * quantity).toFixed(2);

    const dishOrder = {
      id: dishToAdd.id,
      quantity: quantity,
      price: totalPrice,
      name: dishToAdd.name,
      image: `${api.defaults.baseURL}/files_image/${dishToAdd.image}`,
      category: dishToAdd.category,
    };

    let orderItemsKey = "@foodExplorer:order";
    if (user) {
      orderItemsKey = `@foodexplorer:order`;
    }

    const orderItems = JSON.parse(localStorage.getItem(orderItemsKey)) || [];
    const existingDishIndex = orderItems.findIndex(
      (dish) => dish.id === dishToAdd.id
    );

    if (existingDishIndex !== -1) {
      orderItems[existingDishIndex].quantity += quantity;
    } else {
      orderItems.push(dishOrder);
    }

    localStorage.setItem(orderItemsKey, JSON.stringify(orderItems));

    const updatedOrderItemsCount = orderItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    let orderItemsCountKey = "@foodexplorer:order";
    if (user) {
      orderItemsCountKey = `@foodexplorer:order`;
    }
    localStorage.setItem(orderItemsCountKey, updatedOrderItemsCount.toString());

    setOrderItemsCount(updatedOrderItemsCount);
    toast.success(` ${dishToAdd.name} foi adicionado ao seu carrinho.`);
  };

  return (
    <CartContext.Provider
      value={{
        orderItemsCount,
        handleAddDishToLocalStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
