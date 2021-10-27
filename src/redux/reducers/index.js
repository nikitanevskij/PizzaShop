import { combineReducers } from "redux";
import pizzasReducer from "./pizzas";
import filterReducer from "./filters";
import cartReducer from "./cart";

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  filters: filterReducer,
  cart: cartReducer,
});

export default rootReducer;
