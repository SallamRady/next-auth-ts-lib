"use client";

import Navbar from "@/components/navbar";
import { SessionProvider } from "next-auth/react";

export default function MainLayout(props: PropsType) {
    return <SessionProvider>
        <Navbar />
        {props.children}
    </SessionProvider>
}

type PropsType = {
  children: React.ReactNode;
};
