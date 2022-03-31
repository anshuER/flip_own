import { ADD_ITEM_TO_CART, DELETE_ITEM_FROM_CART, REMOVE_WHOLE } from "../types/cartTypes";
//import { GET_PRODUCTS } from "../types/productType";

export const addItem = (product) => ({
    type:ADD_ITEM_TO_CART,
    payload:product
});

export const removeItem=(product)=>({
    type:DELETE_ITEM_FROM_CART,
    payload:product
})

export const removeWhole=(product)=>({
    type:REMOVE_WHOLE,
    payload:product
})

