"use client";
import useSWR from "swr";
import { apiClient } from "@/libs/apiClient";

const getUsers = async (url: string): Promise<GetUsersResponse> => {
  const client = apiClient();
  const { data } = await client.get<GetUsersResponse>(url);
  return data;
};

type User = {
  id: string;
  username: string;
  email: string;
};

type GetUsersResponse = User[];

export const useGetUsers = () => {
  const { data, error, isLoading } = useSWR("/api/v1/users", getUsers);

  return { data, error, isLoading };
};
