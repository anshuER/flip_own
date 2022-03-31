import React from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem, removeWhole } from "../../redux/action/cartAction";

const CheckOutComponent = ({ cartDisplay }) => {
  // console.log(cartDisplay)
  const dispatch=useDispatch();
  return (
    <div>
      <div>
        <figure className="figure">
          <img
            src={cartDisplay.image}
            className="img-thumbnail"
            alt="..."
            style={{ height: "300px" }}
          />
          <div
            className="figure-caption text-left"
            style={{ display: "inline-table", paddingLeft: "20px" }}
          >
            <h3>{cartDisplay.title}</h3>
            <h4>{cartDisplay.price}$</h4>
            <div>
              <span
                style={{
                  color: "black",
                  paddingTop: "10px",
                  paddingRight: "20px",
                  fontSize: "24px",
                }}
                className="fas"
              >
                <span onClick={()=>dispatch(removeItem(cartDisplay))} >
                  &#x2212;
                </span>
                <span style={{ paddingLeft: "10px" }}>{cartDisplay.quantity}</span>
                <span
                  onClick={()=>dispatch(addItem(cartDisplay))}
                  style={{ paddingLeft: "10px" }}
                >
                  &#x2b;
                </span>
              </span>
            </div>
            <button
              type="button"
              className="btn btn-primary"
              style={{ marginTop: "10px" }}
              onClick={()=>dispatch(removeWhole(cartDisplay))}
            >
              Remove item
            </button>
          </div>
        </figure>
      </div>
      <h2>
        ----------------------------------------------------------------------------------------------------------------------
      </h2>
      {/* <label>total={total}</label> */}
    </div>
  );
};

export default CheckOutComponent;
