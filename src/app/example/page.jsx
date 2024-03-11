"use client";
import withAuth from "../../components/HOC/withAuth/withAuth";
import { useSession } from "next-auth/react";


 function page() {
   const session = useSession({
     required: true,
   });

   return (
     <div className="text-white">
       This is a example on how you would use the withAuth HOC(higher-order
       component) to protect a page or see home page.
       <div>logged user email: {session?.data?.user?.email}</div>
     </div>
   );
 }

export default withAuth(page);