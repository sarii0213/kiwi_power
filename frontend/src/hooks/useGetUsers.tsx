"use client";
import useSWR from "swr";
import { apiClient } from "@/libs/apiClient";

const getUsers = async (url: string): Promise<GetUsersResponse> => {
  const client = apiClient();
  const { data } = await client.get<GetUsersResponse>(url);
  return data;
};

type User = {
  id: number;
  username: string;
  email: string;
  goal_weight: number;
};

type GetUsersResponse = {
  users: User[];
  totalCount: number;
  currentPage: number;
};

export const useGetUsers = () => {
  const { data, error, isLoading } = useSWR("/api/v1/users.json", getUsers);

  return { data, error, isLoading };
};
