import { useMutation, useQuery } from "react-query";
import { requestPayzone } from "./http-client";

const authService = {
  postLogin: (data) => requestPayzone.post("/auth/login", data),
  postSignup: (data) => requestPayzone.post("/signup", data),
};

export const usePostLogin = (mutationSetting) => {
  return useMutation(async (data) => {
    return await authService.postLogin(data);
  }, mutationSetting);
};

export const usePostSignup = (mutationSetting) => {
    return useMutation(async (data) => {
      return await authService.postSignup(data);
    }, mutationSetting);
  };