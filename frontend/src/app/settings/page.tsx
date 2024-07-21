"use client";
import React from "react";
import { useGetUser } from "@/hooks/useGetUser";

const Settings = () => {
  const { data, error, isLoading } = useGetUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data && (
        <div>
          <h2 className="text-xl p-3">ユーザー設定</h2>
          <div className="">
            <ul>
              <li>ログイン情報: 🚧</li>
              <li>目標体重: {data.goalWeight} kg</li>
              <li>身長: {data.height} cm</li>
              <li>生理期間: 🚧</li>
            </ul>
          </div>

          <h2 className="text-xl p-3 mt-6">表示設定</h2>
          <div className="">
            <ul>
              <li>体脂肪率 表示: {data.displayBodyFat ? "ON" : "OFF"}</li>
              <li>生理期間 表示: {data.displayPeriod ? "ON" : "OFF"}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default Settings;
