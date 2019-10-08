import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { render } from "@testing-library/react";
import { favoritesReducer } from "../../redux/reducers/favoritesReducer";

export function renderWithRedux(
  ui,
  { initialState, store = createStore(favoritesReducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}
