import { GET_PRODUCTS } from "../types/productType";

let initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
   
    case GET_PRODUCTS:
      console.log(action.payload)
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
export default productReducer;
