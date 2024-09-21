import { useQuery } from "react-query";
import { requestPayzone } from "./http-client";

const SteamsService = {
  getSteams: () => requestPayzone.get("/api/v1/SteamProducts"),
};


export const useGetSteams = () => {
    return useQuery(["GET_STEAMS"], async () => {
      return await SteamsService.getSteams();
    });
  };