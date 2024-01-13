"use client";
import Loading from "@/components/Loading";
import UnauthenticatedScreen from "@/components/UnauthenticatedScreen";
import { signOut, useSession } from "next-auth/react";
import React from "react";
import { useRouter } from "next/navigation";

export default function InsideScreen() {
  const { data: session, status } = useSession();
  const router = useRouter();

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
          <button
            onClick={() => {
              signOut({ redirect: false }).then(() => router.push("/"));
            }}
            className="outline outline-1 rounded font-light hover:cursor-pointer hover:bg-white hover:text-primary transition-colors hover:font-medium text-center"
          >
            Sign out
          </button>
        </div>
      </div>
    );
  }
}
