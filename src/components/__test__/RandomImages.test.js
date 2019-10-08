import React from "react";
import { fireEvent, waitForElement } from "@testing-library/react";

import RandomImages from "../RandomImagesComponent/RandomImages";

import { renderWithRedux } from "./common";

test("Should render component with loading state", () => {
  const { getByText } = renderWithRedux(<RandomImages />);

  expect(getByText("Loading...").textContent).toBe("Loading...");
});

test("Should render a random cat image", async () => {
  const { getByText, getByAltText } = renderWithRedux(<RandomImages />);

  const image = await waitForElement(() =>
    getByAltText("Soft kitty warm kitty")
  );
  const button = await waitForElement(() => getByText("❤"));
  const cancel = await waitForElement(() => getByText("x"));

  expect(image).toBeTruthy();
  expect(button).toBeTruthy();
  expect(cancel).toBeTruthy();
});

test("Should fire addFavorite action", async () => {
  const { getByText, store } = renderWithRedux(<RandomImages />);

  const button = await waitForElement(() => getByText("❤"));

  fireEvent.click(button);

  expect(store.getState().favorites.length).toBe(1);
});
