"use client";

import { useSession } from "next-auth/react";

const TopBar = () => {
  const { data: session } = useSession();

  const loginRegistration = (
    <div className="flex items-center gap-3">
      <button className="bg-black rounded-full py-1 px-5 w-32">Sing in</button>
      <button className="rounded-full bg-sidebar py-1 px-5 w-32">
        Sign Up
      </button>
    </div>
  );

  return (
    <div className="mb-3 flex items-center justify-between">
      <h1 className="text-lg font-semibold">
        {!session?.user
          ? "Welcome to fauget music services"
          : `Welcome, ${session?.user?.username}`}
      </h1>
      {!session?.user ? loginRegistration : ""}
    </div>
  );
};

export default TopBar;
