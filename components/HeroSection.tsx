import React from "react";
import { HeroSubhead } from "./HeroSubhead";

export const HeroSection = () => {
  return (
    <div>
      <div className="w-full  h-80 md:h-[648px] text-center text-black text-blue-500 sm:flex sm:items-center sm:justify-center py-18 px-4 bg-gradient-center">
        {/*<p className="text-xl font-medium ">Hey✌️ </p>*/}
        <h1 className="py-4 text-6xl font-medium tracking-tighter md:text-7xl">
          Design. Build. Publish.
        </h1>
        <p className="text-xl text-gray-700 md:text-2xl">
          Hier steht ein kurzer einleite text
        </p>
        <a href="">Erfahre Mehr</a>
      </div>
    </div>
  );
};
