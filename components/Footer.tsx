import React from "react";
import ThemeSwitch from "./ThemeSwitch";

export const Footer = () => {
  return (
    <div className="flex items-center w-full h-16 px-4 bg-gray-900 border-t border-gray-700 md:px-16">
      <div className="w-full text-gray-500">©MaxBrych</div>
      <div className="w-full flex justify-end">
        <ThemeSwitch />
      </div>
    </div>
  );
};
