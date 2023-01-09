import React from "react";
import { HeroSubhead } from "./HeroSubhead";

export const HeroSection = () => {
  return (
    <div>
      <div className="w-full h-[524px]  md:h-[596px] text-center flex sm:items-center sm:justify-center py-18 px-4 bg-gradient-center">
        {/*<p className="text-xl font-medium ">Hey✌️ </p>*/}
        <div className="absolute w-2/3 mr-4 rounded-full bg-primary-100 dark:bg-primary-900 dark:opacity-50 h-80 light:mix-blend-multiply filter blur-3xl animate-blob"></div>
        <h1 className="z-30 mt-12 md:mt-0 md:mb-8 text-7xl font-medium tracking-tight md:tracking-tighter md:text-8xl">
          Design. Build. Publish.
        </h1>
        <p className="text-xl text-gray-700 md:text-2xl"></p>
        <a href=""></a>
      </div>
    </div>
  );
};
