import { IoIosCloseCircleOutline } from "react-icons/io";
import TitleFauget from "./TitleFauget";

const DialogBox = ({ children, signStatus, close, signUp, signIn }) => {
  return (
    <div className="absolute inset-0 bg-slate-950/50 z-50 flex justify-center items-center">
      <div className="overflow-hidden rounded-[10px] relative bg-sidebar min-w-96 md:max-w-lg p-10">
        <div className="flex justify-center">
          <TitleFauget />
        </div>
        <h1 className="text-center text-lg md:text-xl font-bold my-5">
          {signStatus ? "Sign In" : "Sign Up"}
        </h1>
        <button onClick={close} className="absolute top-0 right-0 p-2">
          <IoIosCloseCircleOutline />
        </button>
        {children}
        {signStatus ? (
          <div className="mt-5">
            Don&apos;t have an account?{" "}
            <button onClick={signUp} className="text-black">
              Sign Up
            </button>
          </div>
        ) : (
          <div className="mt-5">
            Already have an account?{" "}
            <button onClick={signIn} className="text-black">
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DialogBox;
