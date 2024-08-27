"use client";
import { useCreateUser } from "@/hooks/useCreateUser";
import React from "react";
import useSWR from "swr";

const fetcher = (url: string | URL | Request) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data, error } = useSWR("http://localhost:8080/api/v1/hello", fetcher);
  const { trigger, isMutating } = useCreateUser();

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  return (
    <div>
      <h1>{data.message}</h1>
      <p>aaaa</p>
      <button
        disabled={isMutating}
        onClick={async () => {
          await trigger({
            email: "hoge@example.com",
            password: "aaa",
            password_confirmation: "aaa",
            username: "test",
          });
        }}
      >
        ユーザー作成
      </button>
    </div>
  );
};
export default Home;
