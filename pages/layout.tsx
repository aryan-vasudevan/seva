"use client"


import { ReactNode, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";
import Head from "next/head";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
// import AiVolutionLogo from '../public/aivolution-logo.png';
import AnimatedCursor from "react-animated-cursor";


function getNames (routerPathname: string) {
   let pageTitle;
   let bgImageName;


   if (routerPathname=="/") {
       pageTitle = "Home";
       bgImageName = "home";
   } else {
       const routerName = routerPathname.slice(1);
       const words = routerName.split('-');
       const capitalizedWords = words.map((word) => {
           if (word.length > 0) {
               return word.charAt(0).toUpperCase() + word.slice(1);
           } else {
               return word;
           }
       });


       pageTitle = capitalizedWords.join(' ');
       bgImageName = routerName;
   }
  
   return {
       pageTitle: pageTitle,
       bgImageName: bgImageName,
   };
}


export default function Layout ({ children }: { children: ReactNode }) {
   return (
       <div /*ref={ref}*/ className="">
           <Head>
               <link rel="icon" href="/favicon/favicon.ico" />
               <style>
                   @import url(https://fonts.googleapis.com/css2?family=Outfit&family=Poppins&display=swap);
               </style>
           </Head>


           <div className="w-full overflow-hidden relative grid place-items-center"
               // style={{
               //     backgroundImage: `url(/background-images/${names.bgImageName}.png)`,
               //     width: '100%',
               //     height: '100%',
               // }}
           >
               <div
                   className="relative h-full w-full"
               >
                   <div className="">
                       <Navbar />
                   </div>
                   {children}
               </div>
               <AnimatedCursor
                   innerSize={0}
                   outerSize={8}
                   outerAlpha={0.2}
                   outerScale={4}
                   trailingSpeed={5}
                   color='255, 255, 255'z
                   showSystemCursor={true}
               />
           </div>
       </div>
      
      
   )
}
