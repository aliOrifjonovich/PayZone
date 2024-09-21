import { useQuery } from "react-query";
import { requestPayzone } from "./http-client";

const faqService = {
  getfaqquestion: () => requestPayzone.get("/api/v1/All_FAQs"),
};

export const useGetFaq = () => {
  return useQuery(["GET_FAQ_QUESTIONS"], async () => {
    return await faqService.getfaqquestion();
  });
};
