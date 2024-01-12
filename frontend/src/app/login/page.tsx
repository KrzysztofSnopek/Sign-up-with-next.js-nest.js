"use client";

import { TextField } from "@mui/material";
import { signIn } from "next-auth/react";
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
      {/* Welcome board - left content - make reusable for sign in form */}
      <div className="w-1/3 h-screen px-3 bg-primary justify-end items-center flex">
        <div className="px-6 pt-12">
          <h1 className="slab text-neutral-50 text-5xl leading-[56.02px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <div className="w-4 bg-white bg-opacity-0 flex-col justify-start items-start flex">
            <div className="w-4 h-8 relative bg-white bg-opacity-0">
              <div className="w-4 h-8 left-0 top-0 absolute"></div>
            </div>
          </div>
          <div className="text-neutral-50 text-base font-normal leading-normal tracking-tight">
            — John Doe
          </div>
        </div>
      </div>

      {/* Right content - form part */}
      <div className="w-2/3 h-screen flex justify-center items-center">
        <div className="w-3/5 p-6">
          <div className="">
            <div className="h-[92px]">
              {/* Welcome msg */}
              <div className="">
                <div className="">
                  <div className="slab text-center text-black/90 text-2xl font-normal leading-loose">
                    Welcome
                  </div>
                </div>
              </div>
              <div className="">
                <div className="text-center text-black/60 text-base font-normal leading-7 tracking-tight">
                  Example Description
                </div>
              </div>
            </div>

            {/* Space above input - padding */}
            <div className="h-4 bg-white bg-opacity-0 flex-col justify-start items-start flex">
              <div className="w-8 h-4 relative bg-white bg-opacity-0">
                <div className="w-8 h-4 left-0 top-0 absolute"></div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Email input */}
              <div className="self-stretch h-14 gap-[3px]">
                <TextField
                  fullWidth
                  id="email"
                  label="Email address"
                  variant="outlined"
                  color="primary"
                  onChange={(e) => (email.current = e.target.value)}
                />
              </div>

              {/* Space between inputs - padding */}
              <div className="h-4 bg-white bg-opacity-0 flex-col justify-start items-start flex">
                <div className="w-8 h-4 relative bg-white bg-opacity-0">
                  <div className="w-8 h-4 left-0 top-0 absolute"></div>
                </div>
              </div>

              {/* Password input */}
              <div className="self-stretch h-14 gap-[3px]">
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

              {/* 2x space under password input - padding */}
              <div className="h-4 bg-white bg-opacity-0 flex-col justify-start items-start flex">
                <div className="w-8 h-4 relative bg-white bg-opacity-0">
                  <div className="w-8 h-4 left-0 top-0 absolute"></div>
                </div>
              </div>
              <div className="h-4 bg-white bg-opacity-0 flex-col justify-start items-start flex">
                <div className="w-8 h-4 relative bg-white bg-opacity-0">
                  <div className="w-8 h-4 left-0 top-0 absolute"></div>
                </div>
              </div>

              {/* Sign in button */}
              {/* <div className="self-stretch h-[50px] bg-primary rounded shadow flex-col justify-center items-center flex">
                <div className="px-[22px] py-3 justify-center items-center gap-2 inline-flex"> */}
              <button
                type="submit"
                className="self-stretch h-[50px] bg-primary rounded shadow py-3 text-white text-[15px] font-medium uppercase leading-relaxed tracking-wide"
              >
                Sign in
              </button>
              {/* </div> */}
              {/* </div> */}
            </form>

            {/* Space under sign in button - padding */}
            <div className="h-4 bg-white bg-opacity-0 flex-col justify-start items-start flex">
              <div className="w-8 h-4 relative bg-white bg-opacity-0">
                <div className="w-8 h-4 left-0 top-0 absolute"></div>
              </div>
            </div>

            {/* Sign up footer */}
            <div className="self-stretch h-5 justify-center flex">
              <div>
                <span className="text-black text-opacity-90 text-sm font-normal leading-tight tracking-tight">
                  Don't have an account?
                </span>

                {/* button for sign up */}
                <span className="text-black text-opacity-90 text-sm font-bold leading-tight tracking-tight">
                  Sign up for free
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
