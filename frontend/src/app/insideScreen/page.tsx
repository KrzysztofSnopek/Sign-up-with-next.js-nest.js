"use client";
import Loading from "@/components/Loading";
import UnauthenticatedScreen from "@/components/UnauthenticatedScreen";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function InsideScreen() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated") {
    return <UnauthenticatedScreen />;
  }

  if (status === "authenticated") {
    return (
      <div className="h-screen w-full bg-primary text-white flex justify-center items-center">
        <div className="flex flex-col gap-2">
          <p className="text-2xl slab"> Welcome {session.user?.email}!</p>
          <Link
            onClick={() => signOut()}
            href={"/"}
            className="outline outline-1 rounded font-light hover:cursor-pointer hover:bg-white hover:text-primary transition-colors hover:font-medium text-center"
          >
            Sign out
          </Link>
        </div>
      </div>
    );
  }
}
