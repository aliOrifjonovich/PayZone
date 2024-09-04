import { useQuery } from "react-query";
import { requestPayzone } from "./http-client";

const gamesService = {
  getGame: () =>
    requestPayzone.get("/Games"),
  
};

export const useGetGames = () => {
  return useQuery(["GET_GAMES"], async () => {
    return await gamesService.getGame();
  });
};

export const useGetSingleGameService = () => {
  return useQuery(["GET_SINGLE_GAME_SERVICE"], async () => {
    return await gamesService.getSingleGameService();
  });
};