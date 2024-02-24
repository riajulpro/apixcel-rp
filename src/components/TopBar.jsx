"use client";

import { useSession } from "next-auth/react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import SignIn from "./SignIn";
import SignUp from "./Signup";
import { useState } from "react";
import DialogBox from "./DialogBox";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { MdMic } from "react-icons/md";

const TopBar = () => {
  const { data: session } = useSession();
  const [singHandler, setSignHandler] = useState({
    signIn: false,
    signUp: false,
  });

  const handleSignIn = () => {
    setSignHandler({ signIn: true, signUp: false });
  };

  const handleSignUp = () => {
    setSignHandler({ signIn: false, signUp: true });
  };

  const closeSignHandler = () => {
    setSignHandler({ signIn: false, signUp: false });
  };

  const loginRegistration = (
    <div className="flex items-center gap-3">
      <button
        className="bg-black rounded-full py-1 px-5 w-32"
        onClick={handleSignIn}
      >
        Sing In
      </button>
      <button
        className="rounded-full bg-sidebar py-1 px-5 w-32"
        onClick={handleSignUp}
      >
        Sign Up
      </button>
    </div>
  );

  const searchBarAndProfile = (
    <div className="flex items-center gap-4 px-3 md:px-0">
      <div className="relative">
        <input
          type="text"
          className="rounded-full px-6 py-1 bg-[#3B3B3B]"
          placeholder="Artist, Music, Album, etc"
        />
        <IoIosSearch className="absolute top-2 left-2" />
        <MdMic className="absolute top-2 right-2" />
      </div>
      {session?.user?.image ? (
        <Image
          src={session?.user?.image}
          width={50}
          height={50}
          className="rounded-full h-7 w-7"
          alt="user photo"
        />
      ) : (
        <FaUserCircle className="w-7 h-7" />
      )}
    </div>
  );

  return (
    <>
      <div className="mb-3 flex flex-col md:flex-row gap-3 items-center justify-between">
        <h1 className="text-xs md:text-lg font-semibold">
          {!session?.user
            ? "Welcome to fauget music services"
            : `Welcome, ${session?.user?.username}`}
        </h1>
        {!session?.user ? loginRegistration : searchBarAndProfile}
      </div>
      {singHandler.signIn && (
        <DialogBox
          signStatus={true}
          close={closeSignHandler}
          signUp={handleSignUp}
          signIn={handleSignIn}
        >
          <SignIn />
        </DialogBox>
      )}
      {singHandler.signUp && (
        <DialogBox
          signStatus={false}
          close={closeSignHandler}
          signUp={handleSignUp}
          signIn={handleSignIn}
        >
          <SignUp />
        </DialogBox>
      )}
    </>
  );
};

export default TopBar;
