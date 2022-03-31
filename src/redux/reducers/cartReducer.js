//import { removeItem } from "../action/cartAction";
import { addItemToCart, deleteItemFromCart } from "../function/cartFunctions";
import {
  ADD_ITEM_TO_CART,
  DELETE_ITEM_FROM_CART,
  REMOVE_WHOLE,
} from "../types/cartTypes";

let initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      console.log("cart action=", action.payload);
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload),
      };

    case DELETE_ITEM_FROM_CART:
      return {
        ...state,
        cart: deleteItemFromCart(state.cart, action.payload),
      };
    case REMOVE_WHOLE:
      return {
        ...state,
        cart: state.cart.filter(
          (cartfilter) => cartfilter.id != action.payload.id
        ),
      };
    default:
      return state;
  }
};
export default cartReducer;
