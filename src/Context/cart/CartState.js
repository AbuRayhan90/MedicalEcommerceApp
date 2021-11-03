import { useReducer, useEffect } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  SHOW_HIDE_CART,
  ADD_TO_WISHLIST,
  REMOVE_TO_WISHLIST,
  INCREMENT,
  CLEAR_CART,
  GET_TOTAL,
  DICREMENT,
} from "../Types";

const CartState = ({ children }) => {
  const initialState = {
    showCart: false,
    cartItems: [],
    wishItem: [],
    totalPrice: 0,
  };

  const [state, dispatch] = useReducer(CartReducer, initialState);
  const addToCart = (item) => {
    dispatch({
      type: ADD_TO_CART,
      payload: item,
    });
  };
  const addToWishList = (item) => {
    dispatch({
      type: ADD_TO_WISHLIST,
      payload: item,
    });
  };
  const removeToCart = (id) => {
    dispatch({
      type: REMOVE_TO_CART,
      payload: id,
    });
  };
  const removeToWishList = (id) => {
    dispatch({
      type: REMOVE_TO_WISHLIST,
      payload: id,
    });
  };
  const showHideCart = () => {
    dispatch({
      type: SHOW_HIDE_CART,
    });
  };
  const incrementHandler = (id) => {
    dispatch({
      type: INCREMENT,
      payload: id,
    });
  };
  const decrementHandler = (id) => {
    dispatch({
      type: DICREMENT,
      payload: id,
    });
  };
  const clearCart = () => {
    dispatch({
      type: CLEAR_CART,
    });
  };

  useEffect(() => {
    dispatch({
      type: GET_TOTAL,
    });
  }, [state.cartItems]);

  return (
    <CartContext.Provider
      value={{
        showCart: state.showCart,
        cartItems: state.cartItems,
        wishItem: state.wishItem,
        totalPrice: state.totalPrice,
        addToCart,
        removeToCart,
        showHideCart,
        addToWishList,
        removeToWishList,
        incrementHandler,
        clearCart,
        decrementHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
