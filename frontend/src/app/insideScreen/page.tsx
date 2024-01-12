"use client";
import Loading from "@/components/Loading";
import UnauthenticatedScreen from "@/components/UnauthenticatedScreen";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function InsideScreen() {
  const { data: session, status } = useSession();
  console.log(status);
  console.log(session);
  console.log(session?.user?.name);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "unauthenticated") {
    return <UnauthenticatedScreen />;
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
