import client from "../httpClient";

test("Should get random images from API", async () => {
  const mockedResponse = {
    image: { id: "2ge", url: "https://cdn2.thecatapi.com/images/2ge.jpg" }
  };

  jest.spyOn(client, "get").mockImplementationOnce(() => mockedResponse);

  const response = await client.get("images");

  expect(client.get.mock.calls.length).toBe(1);
  expect(response).toEqual(mockedResponse);
});
