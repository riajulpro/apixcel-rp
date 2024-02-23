"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { IoMusicalNote } from "react-icons/io5";
import SidebarTitle from "./SidebarTitle";
import LogOut from "./LogOut";

const Nav = () => {
  const routes = [
    {
      pathname: "/",
      routeName: "Home",
      icon: <IoMdHome className="w-5 h-5" />,
    },
    {
      pathname: "/podcast",
      routeName: "Podcast",
      icon: <IoMusicalNote className="w-5 h-5" />,
    },
    {
      pathname: "/settings",
      routeName: "Settings",
      icon: <IoMdSettings className="w-5 h-5" />,
    },
  ];

  const currentPath = usePathname();

  return (
    <div className="p-3">
      <SidebarTitle title="Menu" />
      <div className="flex flex-col gap-3">
        {routes.map((link) => (
          <Link
            key={link.routeName}
            href={link.pathname}
            className={`${
              link.pathname === currentPath && "text-[#069D95]"
            } flex items-center gap-1`}
          >
            {link.icon} {link.routeName}
          </Link>
        ))}
        <LogOut />
      </div>
    </div>
  );
};

export default Nav;
