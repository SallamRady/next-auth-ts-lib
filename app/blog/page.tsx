"use client";

import { getSession, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function BlobPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function ProtectPage() {
      const session = await getSession();
      if (!session) signIn();
      else setLoading(false);
    }
    ProtectPage();
  }, []);
  if (loading) return <h2>Loading...</h2>;
  return <>Blob Page</>;
}
