import { createStore } from "redux";
import { favoritesReducer } from "./redux/reducers/favoritesReducer";

export const store = createStore(
  favoritesReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
