"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const SignIn = () => {
  const router = useRouter();
  const [info, setInfo] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const handleInputs = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!info.email || !info.password) {
      setError("You must enter the credentials!");
    }

    try {
      setPending(true);

      const res = await signIn("credentials", {
        email: info.email,
        password: info.password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials!");
        setPending(false);
        return;
      }

      router.replace("/");
    } catch (error) {
      setPending(false);
      setError("Something went wrong!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleInputs(e)}
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 my-2">
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleInputs(e)}
          />
        </div>
        {error && <div>{error}</div>}
        <button type="submit" className="py-2 bg-slate-900 rounded-full px-10">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
