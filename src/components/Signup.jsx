"use client";

import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const [info, setInfo] = useState({ username: "", password: "", email: "" });
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const handleInputs = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!info.username || !info.email || !info.password) {
      setError("You must enter the credentials!");
    }

    try {
      setPending(true);

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });

      if (res.ok) {
        setPending(false);
        const form = e.target;
        form.reset();
        console.log("User successfully registered!");
        router.push("/login");
      } else {
        const errorData = await res.json();
        setError(errorData.message);
        setPending(false);
      }
    } catch (error) {
      setPending(false);
      setError("Something went wrong!");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="username">Username:</Label>
          <Input
            type="text"
            placeholder="Enter username"
            onChange={(e) => handleInputs(e)}
            name="username"
            id="username"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
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
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
