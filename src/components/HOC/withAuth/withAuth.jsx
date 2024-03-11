"use client";
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

export default function withAuth(Component) {
  return function AuthWrapper(props) {
    const session = useSession({
      required: true,
      onUnauthenticated() {
        redirect("/signin");
      },
    });

    console.log("Checking session");

    if (!session.data) {
      return <p>Loading...</p>;
    }

    return <Component {...props} session={session} />;
  };
}