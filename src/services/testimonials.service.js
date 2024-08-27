import { useQuery } from "react-query";
import { requestPayzone } from "./http-client";

const testimonialsService = {
  getFeedbacks: () =>
    requestPayzone.get("/Testimonial"),
};

export const useGetFeedbacks = () => {
  return useQuery(["GET_TESTIMONIALS"], async () => {
    return await testimonialsService.getFeedbacks();
  });
};