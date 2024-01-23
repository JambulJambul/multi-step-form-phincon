import { combineReducers } from "redux";
import componentReducer from "./components/reducer";

const rootReducer = combineReducers({
  componentReducer: componentReducer,
});

export default rootReducer;
