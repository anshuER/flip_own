export const addItemToCart = (cartProducts, productsToAdd) => {
  const existProduct = cartProducts.find(
    (cartProduct) => cartProduct.id === productsToAdd.id
  );
  if (existProduct) {
    return cartProducts.map((cartProduct) =>
      cartProduct.id === productsToAdd.id
        ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
        : cartProduct
    );
  }
  return [...cartProducts, { ...productsToAdd, quantity: 1 }];
};

export const deleteItemFromCart = (cartProducts, productsToRemove) => {
  const existProduct = cartProducts.find(
    (cartProduct) => cartProduct.id === productsToRemove.id
  );
  if (existProduct.quantity === 1) {
   return cartProducts.filter((cartProduct) => cartProduct.id != productsToRemove.id);
  }
  return cartProducts.map((cartProduct) =>
    cartProduct.id === productsToRemove.id
      ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
      : cartProduct
  );
};

