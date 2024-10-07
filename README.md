# Next-Auth-TS-Lib

Journey to learn and master NextAuth Library

<hr/>

## Next Auth Library Introduction

- NextAuth.js is a complete open-source authentication solution for Next.js applications.
- It is designed from the ground up to support Next.js and Serverless.

### How to use NextAuth?

#### 1. Installation

`npm install next-auth` or `pnpm add next-auth`

#### 2. App API Route

To add NextAuth.js to a project create a file called `[...nextauth].js or [...nextauth].ts` in `pages/api/auth` if you are working with next js pages approach. <b>But </b> if you are working with next js app router approach in `app/api/auth/[...nextauth]` create this file `route.js or route.ts`
<br/>
This contains the dynamic route handler for NextAuth.js which will also contain all of your global NextAuth.js configurations.

<br/>
All requests to /api/auth/* (signIn, callback, signOut, etc.) will automatically be handled by NextAuth.js.
