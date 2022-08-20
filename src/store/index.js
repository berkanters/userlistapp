import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "../store/reducers/userList";
import userDetailReducer from "../store/reducers/userDetail";

const rootReducer = combineReducers({
  userReducer: userReducer,
  userDetailReducer: userDetailReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
