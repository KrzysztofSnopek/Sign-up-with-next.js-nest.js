"use client";

import { TextField } from "@mui/material";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { BACKEND_URL } from "../helpers/Constants";

export default function SignupPage() {
  const [statusMessage, setStatusMessage] = useState<string>("");
  const email = useRef("");
  const password = useRef("");

  const handleUserRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch(BACKEND_URL + "/auth/signup", {
      method: "POST",
      body: JSON.stringify({
        email: email.current,
        password: password.current,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      setStatusMessage("User already exists");
      return;
    }
    setStatusMessage("Your account has been successfully created!");
  };

  return (
    <div className="h-screen w-full bg-primary flex justify-center items-center">
      <div className="w-1/3 bg-slate-300 rounded-lg p-4 flex flex-col items-center">
        <h2 className="text-2xl slab pb-2">
          Please fill in to create an account
        </h2>
        <form onSubmit={handleUserRegister} className="p-2 pr-6">
          <TextField
            id="email"
            label="Email address"
            variant="outlined"
            color="primary"
            onChange={(e) => (email.current = e.target.value)}
            className="m-2 w-full"
            required
          ></TextField>

          <TextField
            id="password"
            label="Password"
            variant="outlined"
            color="primary"
            type="password"
            onChange={(e) => (password.current = e.target.value)}
            className="m-2 w-full"
            required
          ></TextField>

          <button
            type="submit"
            className="m-2 p-2 outline-1 outline rounded w-full hover:bg-slate-400"
          >
            Create an account
          </button>
        </form>

        {statusMessage && (
          <p
            className={
              statusMessage.includes("already exists")
                ? "text-red-500"
                : "text-green-500"
            }
          >
            {statusMessage}
          </p>
        )}

        <Link
          href={"/"}
          className="mt-4 text-sm font-medium hover:font-extrabold"
        >
          Go back to login page
        </Link>
      </div>
    </div>
  );
}
