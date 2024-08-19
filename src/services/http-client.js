import axios from "axios";
import { QueryClient } from "react-query";

export const token =
  typeof window !== "undefined" && localStorage.getItem("token");

export const requestPayzone = axios.create({
  baseURL: process.env.REACT_APP_PUBLIC_BASE_URL_PAYZONE,

  params: {},
  headers: token
    ? {
        Authorization: `Bearer ${process.env.REACT_APP_PUBLIC_TOKEN_MERAKI}`,
      }
    : {},
});

const errorHandler = (error) => {
  return Promise.reject(error.response);
};

requestPayzone.interceptors.response.use(
  (response) => response.data,
  errorHandler
);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
