"use client";
import { signIn, useSession } from "next-auth/react";

export default function DashboardPage() {
  const session = useSession();
  console.log("sesssssssion data", session.data, session.status);
  //protect page using useSession hook
  if (session.status === "unauthenticated") {
    signIn();
  }

  if (session.status == "loading") return <h3>Loading....</h3>;
  return <>Dashboard Page</>;
}
