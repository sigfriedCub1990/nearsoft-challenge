import { useState, useEffect } from "react";
import client from "../httpClient";

export const useApiCall = retry => {
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    const getRandomImage = async () => {
      try {
        const { data } = await client.get("images");

        setPicture(data);
      } catch (err) {
        throw Error(err.message);
      }
    };

    getRandomImage();
  }, [retry]);

  return picture;
};
