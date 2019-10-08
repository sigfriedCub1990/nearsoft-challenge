import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { favoritesReducer } from "./redux/reducers/favoritesReducer";

export const store = createStore(favoritesReducer, applyMiddleware(thunk));
