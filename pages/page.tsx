"use client"

import Navbar from "@/components/navbar";
import "../styles/global.css"

export default function Home() {
   return (
       <div className="min-h-screen z-0 bg-black">
           <div className="h-full flex flex-col justify-between">
               <div className="h-3/4 flex justify-center place-items-center">
                   <h1 className="text-center z-10 text-white">
                       Uniting Volunteers,<br />Transforming Communities
                   </h1>
                   <h1 className="text-center z-0 absolute opacity-20 text-aqua text-[30em] select-none">
                       SEVA
                   </h1>


               </div>
           </div>
       </div>     
   );
}
