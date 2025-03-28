"use client";

import Image from "next/image";
import { useState } from "react";

type User = {
  id: number,
  username: string,
  image: string,
}

type UsersData = {
  total: number,
  limit: number,
  users: User[]
}

const OnClickComponent = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [usersData, setUsersData] = useState<UsersData | null>(null);

  const getData = async () => {
    setIsFetching(true);
    try {
      const res = await fetch("https://dummyjson.com/users", {
        method: "GET",
      });
      const json = await res.json();
      setUsersData(json);
    } catch (err) {
      console.log(err);
    }
    setIsFetching(false);
  };

  return (
    <section className="font-[family-name:var(--font-geist-mono)] w-100 h-[350px]">
      <button
        className="flex py-2 px-3 mb-5 cursor-pointer hover:underline hover:underline-offset-4 shadow-md shadow-zinc-600"
        onClick={async () => await getData()}
      >
        Get Users
      </button>
      {isFetching ? (
        <div>Fetching...</div>
      ) : usersData ? (
        <div className="overflow-auto p-2 h-[300px] border border-black/[.08] dark:border-white/[.145] rounded">
          <ul>
            {usersData.users.map(
              (user: User) => (
                <li key={user.id} className="hover:underline hover:underline-offset-2">
                  <Image
                    aria-hidden
                    className="inline"
                    src={user.image}
                    alt={`${user.username}'s image`}
                    width={16}
                    height={16}
                    loading = 'lazy'
                    unoptimized
                  />
                  <span> {user.username}</span>
                </li>
              )
            )}
          </ul>
        </div>
      ) : null}
    </section>
  );
};
export { OnClickComponent };
