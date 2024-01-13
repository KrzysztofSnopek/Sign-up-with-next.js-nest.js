"use client";

import { TextField } from "@mui/material";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRef } from "react";

export default function LoginPage() {
  const email = useRef("");
  const password = useRef("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: email.current,
      password: password.current,
      redirect: true,
      callbackUrl: "/insideScreen",
    });
  };

  return (
    <div className="w-full h-screen flex bg-neutral-50">
      <div className="w-1/3 h-screen px-3 bg-primary justify-end items-center flex">
        <div className="px-6 pt-12">
          <h1 className="slab text-neutral-50 text-5xl leading-[56px] mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <div className="text-neutral-50 text-base font-normal leading-normal tracking-tight">
            — John Doe
          </div>
        </div>
      </div>

      <div className="w-2/3 h-screen flex justify-center items-center">
        <div className="w-3/5 p-6">
          <div className="mb-12">
            <div className="slab text-center text-black/90 text-2xl font-normal leading-8">
              Welcome
            </div>
            <div className="text-center text-black/60 text-base font-normal leading-7 tracking-tight">
              Example Description
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="h-14 mb-4">
              <TextField
                fullWidth
                id="email"
                label="Email address"
                variant="outlined"
                color="primary"
                onChange={(e) => (email.current = e.target.value)}
              />
            </div>

            <div className="h-14 mb-4">
              <TextField
                fullWidth
                id="password"
                label="Password"
                variant="outlined"
                color="primary"
                type="password"
                onChange={(e) => (password.current = e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="w-full h-[50px] bg-primary rounded shadow py-3 my-4 text-white text-[15px] font-medium uppercase leading-relaxed tracking-wide"
            >
              Sign in
            </button>
          </form>

          <div className="self-stretch h-5 justify-center flex">
            <div>
              <span className="text-black text-opacity-90 text-sm font-normal leading-tight tracking-[0.17px]">
                Don't have an account?
              </span>

              <Link
                href={"/signup"}
                className="px-1 text-black text-opacity-90 text-sm font-bold leading-tight tracking-[0.17px]"
              >
                Sign up for free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
