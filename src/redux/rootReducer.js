import productReducer from "./reducers/productReducer";

import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer=combineReducers({
    product:productReducer,
    cart:cartReducer
});

export default rootReducer;