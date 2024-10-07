"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();

  if (session.status == "loading") return <h2>Loading...</h2>;
  return (
    <div>
      <h1>
        {session.status == "authenticated"
          ? `Welcome ${session.data.user?.name} to Home Page`
          : "Home Page"}
      </h1>
    </div>
  );
}
