"use client";
import { signOut, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import withAuth from "../components/HOC/withAuth/withAuth";

function Home() {
  const session = useSession({
    required: true,
  });

  return (
    <div className="p-8 text-white">
      <div >{session?.data?.user?.email}</div>
      <button onClick={() => signOut()}>
        Logout button
      </button>
      <div></div>
    </div>
  );
}

export default withAuth(Home);
