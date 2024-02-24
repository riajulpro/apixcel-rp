"use client";

import { useState } from "react";
import Nav from "./Nav";
import Playlist from "./Playlist";
import TitleFauget from "./TitleFauget";
import { FiMenu } from "react-icons/fi";

const Sidebar = () => {
  const [showMe, setShowMe] = useState(false);

  return (
    <>
      <button
        className="md:hidden fixed top-0 left-0 z-50"
        onClick={() => setShowMe(!showMe)}
      >
        <FiMenu className="h-7 w-7" />
      </button>
      <div
        className={`fixed z-40 top-0 bottom-0 ${
          !showMe ? "-left-44" : "left-0"
        } md:sticky min-h-screen max-h-screen flex flex-col bg-sidebar`}
      >
        <TitleFauget />
        <Nav />
        <Playlist />
      </div>
    </>
  );
};

export default Sidebar;
