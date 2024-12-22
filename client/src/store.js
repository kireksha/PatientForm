import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk";
import { formReducer, loadingReducer, userReducer } from "./reducers";

const reducer = combineReducers({
  loading: loadingReducer,
  form: formReducer,
  user: userReducer,
});

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
