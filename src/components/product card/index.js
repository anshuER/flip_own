import React from "react";
import { useDispatch } from "react-redux";
import {addItem} from "../../redux/action/cartAction";


const Card = ({product}) => {
 console.log('what card is getting',product)
  const dispatch=useDispatch();
 // console.log('selector',dispatch)
  return (
   
    <div className="col">
      <div className="card h-100" style={{height:'300px' }}>
        <img src={product.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <h5 className="card-title">{product.price}$</h5>
          <button type="button" className="btn btn-primary" onClick={()=>dispatch(addItem(product))} >
            Add to cart
          </button>
        </div>
        <div className="card-footer">
          <small className="text-muted">{product.rating.rate}/{product.rating.count}</small>
        </div>
      </div>
    </div>
   
  );
  }

export default Card;
