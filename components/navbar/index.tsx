"use client";
import { signIn, signOut } from "next-auth/react";
import "./index.css";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="header">
      <h1 className="logo">
        <a href="#">NextAuth</a>
      </h1>
      {/* ${!session && loading ? "loading" : "loaded"} */}
      <ul className={`main-nav `}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>

        {/* {!loading && !session && ( */}
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
        {/* // )} */}
        {/* {session && ( */}
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
        {/* // )} */}
      </ul>
    </nav>
  );
}

export default Navbar;
