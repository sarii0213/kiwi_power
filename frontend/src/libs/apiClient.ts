import defaultAxios from "axios";
import applyCaseMiddleWare from "axios-case-converter";

export const apiClient = () => {
  const token = localStorage.getItem("token");
  const client = defaultAxios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });

  return applyCaseMiddleWare(client);
};
