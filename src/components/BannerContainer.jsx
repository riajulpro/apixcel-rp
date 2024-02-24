"use client";

import { useSession } from "next-auth/react";
import Banner from "./Banner";
import MembershipBanner from "./MembershipBanner";

const BannerContainer = () => {
  const { data: session } = useSession();

  return <div>{!session?.user ? <Banner /> : <MembershipBanner />}</div>;
};

export default BannerContainer;
