import React from "react";
import { Route, Routes } from "react-router-dom";
import Checkout from "../pages/checkout";
import Cloths from "../pages/clothes";
import HomePage from "../pages/home";

const RouterList = () => {
  return (
      <Routes>
          <Route path='' element={<HomePage />} />
          <Route path='/cloths' element={<Cloths />} />
          <Route path='/checkout' element={<Checkout />} />
      </Routes>
  );
};

export default RouterList;
