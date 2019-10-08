import React from "react";

import { renderWithRedux } from "./common";

//* Component
import FavsComponent from "../FavsComponent/FavComponent";
import { waitForElement, fireEvent } from "@testing-library/dom";

test("Should render a list of images", async () => {
  const initialState = {
    favorites: [
      "https://cdn2.thecatapi.com/images/JR48AEqts.jpg",
      "https://cdn2.thecatapi.com/images/ehn.jpg",
      "https://cdn2.thecatapi.com/images/O3Iw_6kYG.jpg",
      "https://cdn2.thecatapi.com/images/MTk2MzcwNQ.jpg"
    ]
  };

  const { getAllByAltText } = renderWithRedux(<FavsComponent />, {
    initialState
  });

  const images = await waitForElement(() => getAllByAltText("Soft kitty"));

  expect(images.length).toBe(4);
});

test("Should delete image from state", async () => {
  const initialState = {
    favorites: [
      "https://cdn2.thecatapi.com/images/JR48AEqts.jpg",
      "https://cdn2.thecatapi.com/images/ehn.jpg",
      "https://cdn2.thecatapi.com/images/O3Iw_6kYG.jpg",
      "https://cdn2.thecatapi.com/images/MTk2MzcwNQ.jpg"
    ]
  };

  const { getAllByText, store } = renderWithRedux(<FavsComponent />, {
    initialState
  });

  const buttons = await waitForElement(() => getAllByText("x"));

  fireEvent.click(buttons[0]);

  expect(store.getState().favorites.length).toBe(3);
});
