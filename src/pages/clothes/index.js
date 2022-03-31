import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../components/product card";
import { getproduct } from "../../redux/action/productAction";

const Cloths = () => {
  const selector = useSelector((state) => state.product.products);
  const dispatch = useDispatch();
  

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((products) => {
        console.log('products in cloth page=' ,products)
        dispatch(getproduct(products));
        //console.log('selector=',selector)
        //console.log('what selector got=',selector);
      });
  }, []);

  return (
    <div
      className="row row-cols-1 row-cols-md-5 g-4"
      style={{ paddingTop: "10px" }}
    >
      {selector?.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Cloths;
