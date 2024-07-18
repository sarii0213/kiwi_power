"use client";
import React from "react";
import { useGetUsers } from "@/hooks/useGetUsers";

interface User {
  id: number;
  username: string;
  email: string;
  goal_weight: number;
}

const Users: React.FC = () => {
  const { data, error, isLoading } = useGetUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1 className="text-xl p-3">Users Page</h1>
      {data && (
        <div>
          {data.users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}

          <Pagination totalCount={data.totalCount} currentPage={data.currentPage} />
        </div>
      )}
    </div>
  );
};

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <div className="my-3">
    <p>ID: {user.id}</p>
    <p>username: {user.username}</p>
    <p>email: {user.email}</p>
    <p>goal weight: {user.goal_weight}</p>
  </div>
);

interface SummaryProps {
  totalCount: number;
  currentPage: number;
}

const Pagination: React.FC<SummaryProps> = ({ totalCount, currentPage }) => (
  <div className="mt-8">
    <p>total count: {totalCount}</p>
    <p>current page: {currentPage}</p>
  </div>
);

export default Users;
