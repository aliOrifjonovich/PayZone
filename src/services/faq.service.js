import { useQuery } from "react-query";
import { requestPayzone } from "./http-client";

const faqService = {
  getfaqquestion: (params, queryParams) =>
    requestPayzone.get(`/Faq_question/${params}`, { params: queryParams }),
};

export const useGetFaq = ({ params, queryParams }) => {
  return useQuery(["GET_FAQ_QUESTIONS", queryParams], async () => {
    return await faqService.getfaqquestion(params, queryParams);
  });
};