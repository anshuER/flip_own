import { GET_PRODUCTS } from "../types/productType";

export const getproduct = (products) => ({
  type: GET_PRODUCTS,
  payload:products
});
