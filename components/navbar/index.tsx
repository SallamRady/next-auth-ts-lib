"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import "./index.css";
import Link from "next/link";

function Navbar() {
  // session to know user is logged or not
  const session = useSession();

  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      <ul
        className={`main-nav  ${
          session.status == "loading" ? "loading" : "loaded"
        }`}
      >
        <li>
          <Link href="/">Home</Link>
        </li>
        {session.status == "authenticated" && (
          <>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </>
        )}

        {session.status == "unauthenticated" && (
          <li>
            <Link href="/api/auth/signin">
              {/* <a
              onClick={(e) => {
                e.preventDefault();
                //   signIn("github");
              }}
            > */}
              Sign In
              {/* </a> */}
            </Link>
            <button
              onClick={() => {
                signIn("github");
              }}
            >
              Login Btn
            </button>
          </li>
        )}
        {session.status == "authenticated" && (
          <li>
            <Link href="/api/auth/signout">
              {/* <a
              onClick={(e) => {
                e.preventDefault();
                //   signOut();
              }}
            > */}
              Sign Out
              {/* </a> */}
            </Link>
            <button
              onClick={() => {
                signOut();
              }}
            >
              Logout Btn
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
