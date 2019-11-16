import cakeReducer from "./cake/cakereducer";
import icecreamReducer from "./icecream/icecreamreducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer
});

export default rootReducer;
