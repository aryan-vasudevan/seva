import React from "react";

export default function Home() {
   return (
       <div className="min-h-screen bg-black">
           <div className="h-screen flex flex-col justify-center place-items-center">
               <h1 className="text-center relative z-10 text-[4em] text-white">
                   <span>
                       <button className="transition-all hover:scale-105 hover:text-theme-blue hover:translate-y-2 duration-500 ease-in-out transform">Uniting</button>
                   </span>{" "}
                   <span>
                       <button className="transition-all hover:rotate-24 hover:text-theme-blue duration-500 hover:translate-x-3 ease-in-out transform">Volunteers,</button>
                   </span>{" "}
                   <br />
                   <span>
                       <button className="transition-all hover:skew-x-12 hover:text-theme-blue duration-500 ease-in-out transform">Transforming</button>
                   </span>{" "}
                   <span>
                       <button className="transition-all hover:translate-y-2 hover:text-theme-blue duration-500 ease-in-out transform">Communities</button>
                   </span>
               </h1>
               <h1 className="text-center absolute opacity-20 text-theme-blue text-[30em] select-none">
                        SEVA
                    </h1>	
           </div>
       </div>     
   );
}
