import { useQuery } from "react-query";
import { requestPayzone } from "./http-client";

const gamesService = {
  getGame: () => requestPayzone.get("/Games"),
  getAllProducts: (id) => requestPayzone.get(`/All_Products/${id}`),
};

export const useGetGames = () => {
  return useQuery(["GET_GAMES"], async () => {
    return await gamesService.getGame();
  });
};

export const useGetAllProducts = (id) => {
  return useQuery(["GET_ALL_PRODUCTS"], async () => {
    return await gamesService.getAllProducts(id);
  });
};
