import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  SHOW_HIDE_CART,
  ADD_TO_WISHLIST,
  REMOVE_TO_WISHLIST,
  INCREMENT,
  DICREMENT,
  CLEAR_CART,
  GET_TOTAL,
} from "../Types";

const CartReducer = (state, action) => {
  switch (action.type) {
    case SHOW_HIDE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_TO_CART: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }
    case ADD_TO_WISHLIST: {
      return {
        ...state,
        wishItem: [...state.wishItem, action.payload],
      };
    }

    case REMOVE_TO_WISHLIST: {
      return {
        ...state,
        wishItem: state.wishItem.filter((item) => item.id !== action.payload),
      };
    }
    case CLEAR_CART: {
      return {
        ...state,
        cartItems: [],
      };
    }
    case INCREMENT: {
      const upDateCart = state.cartItems.map((currEle) => {
        if (currEle.id === action.payload) {
          return {
            ...currEle,
            quantity: currEle.quantity + 1,
          };
        }
        return currEle;
      });
      return { ...state, cartItems: upDateCart };
    }
    case DICREMENT: {
      const upDateCart = state.cartItems
        .map((currEle) => {
          if (currEle.id === action.payload) {
            return {
              ...currEle,
              quantity: currEle.quantity - 1,
            };
          }
          return currEle;
        })
        .filter((currEle) => {
          return currEle.quantity !== 0;
        });
      return { ...state, cartItems: upDateCart };
    }
    case GET_TOTAL: {
      let { totalPrice } = state.cartItems.reduce(
        (accum, curVal) => {
          let { price, quantity } = curVal;

          let upDatedPrice = price * quantity;
          accum.totalPrice += upDatedPrice;
          return accum;
        },
        { totalPrice: 0, itemTotalPrice: 0 }
      );
      return { ...state, totalPrice };
    }
    default:
      return state;
  }
};

export default CartReducer;
