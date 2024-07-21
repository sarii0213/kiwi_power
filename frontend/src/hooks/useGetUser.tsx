"use client";
import useSWR from "swr";
import { apiClient } from "@/libs/apiClient";

const getUser = async (url: string): Promise<GetUserResponse> => {
  const client = apiClient();
  const { data } = await client.get<GetUserResponse>(url);
  return data;
};

type GetUserResponse = {
  username: string;
  email: string;
  goalWeight: number;
  height: number;
  displayBodyFat: boolean;
  displayPeriod: boolean;
};

export const useGetUser = () => {
  const { data, error, isLoading } = useSWR(`/api/v1/users/1`, getUser);

  return { data, error, isLoading };
};
