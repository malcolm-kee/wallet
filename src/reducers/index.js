import { combineReducers } from "redux";

import expenseReducer from "./expenseReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  expense: expenseReducer,
  auth: authReducer
});

export default rootReducer;
