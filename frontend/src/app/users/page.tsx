'use client'

import { useGetUsers } from "@/src/api/getUsers";

const Page = () => {
  const { data: usersData, error, isLoading } = useGetUsers();
  return (
    <div>
      <h1 className="text-xl p-3">Users Page</h1>
      {usersData && (
        <ul>
          {usersData.map((user) => (
            <li key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <p>{user.address.street}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Page;
