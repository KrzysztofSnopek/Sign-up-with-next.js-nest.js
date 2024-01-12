"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function InsideScreen() {
  const { data: session, status } = useSession();
  console.log(status);
  console.log(session);
  console.log(session?.user?.name);

  if (status === "loading") {
    return (
      <div>
        <div className="bg-primary text-white text-center">Loading...</div>
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <div>
        <div className="bg-primary text-white text-center">
          Please sign in first
        </div>
        <Link href={"/"}>Go to sign in page</Link>
      </div>
    );
  }

  if (status === "authenticated") {
    return (
      <div className="bg-primary text-white">
        <p> Welcome {session.user?.email}!</p>
        <Link href={"/"} onClick={() => signOut()}>
          Sign out
        </Link>
      </div>
    );
  }
}
