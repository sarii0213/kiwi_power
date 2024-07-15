"use client";
import { useGetUsers } from "@/hooks/useGetUsers";

const Users = () => {
  const { data, error, isLoading }= useGetUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1 className="text-xl p-3">Users Page</h1>
      <div>
        {data && data.map(user => (
          <div key={user.id}>
            <p>ID: {user.id}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Users;
