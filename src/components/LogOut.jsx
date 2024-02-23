"use client";

import { useSession } from "next-auth/react";
import { RiLogoutBoxRLine } from "react-icons/ri";
import Link from "next/link";

const LogOut = () => {
  const { data: session } = useSession();

  if (!session?.user) {
    return null;
  }

  return (
    <div>
      <Link href="api/auth/signout">
        <div className="flex items-center gap-1">
          <RiLogoutBoxRLine /> Sing out
        </div>
      </Link>
    </div>
  );
};

export default LogOut;
