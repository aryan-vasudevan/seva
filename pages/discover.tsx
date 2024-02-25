import React from "react";
import { useRouter } from "next/router";




export default function Discover() {
   const router = useRouter();
   return (
       <div className="flex flex-col pt-2 pr-14 pb-12 text-center whitespace-nowrap bg-black leading-[130%] max-md:pr-5">
           <div className="flex gap-5 justify-between w-full text-3xl text-white max-md:flex-wrap max-md:max-w-full">
               <img
                   loading="lazy"
                   srcSet="..."
                   className="max-w-full aspect-[1.89] w-[188px]"
               />
               <div className="flex gap-5 justify-between items-start my-auto max-md:flex-wrap max-md:max-w-full">
                   <div className="grow">Home</div>
                   <div>About</div>
                   <div className="flex flex-col flex-1 self-stretch">
                       <div>Discover</div>
                       <div className="shrink-0 mt-3.5 h-px rounded-3xl bg-zinc-300" />
                   </div>
                   <div className="grow">Contact</div>
               </div>
           </div>
           <div className="self-center mt-52 text-[600px] text-slate-400 text-opacity-60 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
               SEVA
           </div>
       </div>
   )
}
