import { useCallback } from "react";

const ACCESS_KEY = "ZWFwv1_Pr5o3JtwB-k74rnZwsV0ruBoIec67udAmdv8";
const BASE_URL = `https://api.unsplash.com/photos/random`;

const useApi = () => {
  const getImage = useCallback(async () => {
    return fetch(BASE_URL, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    }).then((response) => response.json());
  }, []);
  return { getImage };
};

export { useApi };
