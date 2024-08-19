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
