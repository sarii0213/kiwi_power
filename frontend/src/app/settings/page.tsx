"use client";
import React from "react";
import { useGetUser } from "@/hooks/useGetUser";

const Settings = () => {
  const { data: userData, error, isLoading } = useGetUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {userData && (
        <div>
          <h1 className="">ユーザー設定</h1>
          <div className="">
            <ul>
              <li>ログイン情報: 🚧</li>
              <li>目標体重: {userData.goalWeight} kg</li>
              <li>身長: {userData.height} cm</li>
              <li>生理期間: 🚧</li>
            </ul>
          </div>

          <h1 className="">表示設定</h1>
          <div className="">
            <ul>
              <li>体脂肪率 表示: {userData.displayBodyFat ? "ON" : "OFF"}</li>
              <li>生理期間 表示: {userData.displayPeriod ? "ON" : "OFF"}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default Settings;
