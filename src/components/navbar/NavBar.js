import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const cartSelectors = useSelector((state) => state.cart.cart);
  //console.log("nav bar selectore=", cartSelectors);
  const total = cartSelectors?.reduce(
    (initial, current) => initial + current.quantity,0
  );
 // console.log('navbar total=',total)
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            FLIPKART
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link " aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cloths" className="nav-link" href="#">
                  shop
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <span
          style={{
            color: "white",
            paddingTop: "10px",
            paddingRight: "20px",
            fontSize: "24px",
          }}
          className="fas"
        >
          <span onClick={() => navigate("/checkout")}>&#xf07a;</span>
          <span style={{ paddingLeft: "5px", paddingRight: "5px" }}>{total}</span>
        </span>
      </nav>
    </>
  );
};

export default NavBar;
