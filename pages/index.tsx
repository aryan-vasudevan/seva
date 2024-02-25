"use client"
import Navbar from "@/components/navbar";

export default function Home() {
   return (
       <div className="min-h-screen bg-black">
           <div className="h-screen flex flex-col justify-center place-items-center">
           <h1 className="text-center absolute opacity-20 text-aqua text-[30em] select-none">
                        SEVA
                    </h1>	
        <h1 className="text-center z-10 text-[4em] text-white  ">
					Uniting Volunteers,<br />Transforming Communities
				</h1>
                
           </div>
       </div>     
   );
}
