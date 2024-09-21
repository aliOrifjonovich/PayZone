import { useQuery } from "react-query";
import { requestPayzone } from "./http-client";

const socialService = {
  getMedias: () =>
    requestPayzone.get("/api/v1/Social"),
};

export const useGetMedias = () => {
  return useQuery(["GET_SOCIAL"], async () => {
    return await socialService.getMedias();
  });
};