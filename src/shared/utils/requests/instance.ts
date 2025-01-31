import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { useNavigate } from "react-router-dom";

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("token");

  if (token) config.headers.Authorization = `Bearer ${token}`;

  return config;
});

api.interceptors.response.use(async (response: AxiosResponse) => {
  // const navigate = useNavigate();
  if (response.status === 401) {
    localStorage.removeItem("token");
    // navigate("/login");
  }
  return response;
});
