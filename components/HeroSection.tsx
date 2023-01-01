import React from "react";
import { HeroSubhead } from "./HeroSubhead";

export const HeroSection = () => {
  return (
    <div className="flex-col items-center justify-center h-96 sm:align-middle sm:text-center">
      <section className="flex-col w-full h-full text-black text-blue-500 sm:items-center sm:justify-center sm:align-middle py-18 bg-gradient-center">
        {/*<p className="text-xl font-medium ">Hey✌️ </p>*/}
        <h1 className="py-4 text-5xl font-medium tracking-tighter text-gray-200">
          Design. Build. Ship.
        </h1>
      </section>
    </div>
  );
};
