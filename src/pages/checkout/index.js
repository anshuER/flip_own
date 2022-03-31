import React from "react";
import { useSelector } from "react-redux";
import CheckOutComponent from "../../components/checkout component";

const Checkout = () => {
  const cartSelectore = useSelector((state) => state.cart.cart);
  //console.log("kharidi hui items=", cartSelectore);
  const totalPrice = cartSelectore.reduce(
    (initial, currrent) => initial + currrent.quantity * currrent.price,
    0
  );
  return (
    <div>
      {cartSelectore.map((cartDisplay) => (
        <CheckOutComponent key={cartDisplay.id} cartDisplay={cartDisplay} />
      ))}
      <h2>Total={totalPrice}</h2>
    </div>
  );
};

export default Checkout;
