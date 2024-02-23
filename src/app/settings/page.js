"use client";

import Settings from "@/components/Settings";
import { useSession } from "next-auth/react";

const SettingsPage = () => {
  const { data: session } = useSession();

  console.log(session);

  return <Settings user={session?.user} />;
};

export default SettingsPage;
