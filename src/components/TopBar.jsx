"use client";

import { useSession } from "next-auth/react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import SignIn from "./SignIn";
import { cn } from "@/lib/utils";
import SignUp from "./Signup";
import { useState } from "react";
import DialogBox from "./DialogBox";

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

  const searchBarAndProfile = <div>We have been working</div>;

  return (
    <>
      <div className="mb-3 flex items-center justify-between">
        <h1 className="text-lg font-semibold">
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
