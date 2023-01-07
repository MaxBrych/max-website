import React from "react";
import { HeroSubhead } from "./HeroSubhead";

export const HeroSection = () => {
  return (
    <div>
      <div className="w-full  h-80 md:h-[628px] text-center text-black text-blue-500 sm:flex sm:items-center sm:justify-center py-18 px-4 bg-gradient-center">
        {/*<p className="text-xl font-medium ">Hey✌️ </p>*/}
        <div className="absolute w-2/3 mr-4 rounded-full bg-primary-100 h-80 mix-blend-multiply filter blur-3xl animate-blob"></div>
        <h1 className="z-30 py-4 text-6xl font-medium tracking-tight leading-12 md:tracking-tighter md:text-7xl">
          Design. Build. Publish.
        </h1>
        <p className="text-xl text-gray-700 md:text-2xl"></p>
        <a href=""></a>
      </div>
    </div>
  );
};
