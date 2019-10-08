import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { favoritesReducer } from "./redux/reducers/favoritesReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  favoritesReducer,
  composeEnhancers(applyMiddleware(thunk))
);
