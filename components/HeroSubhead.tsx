import React from "react";
import { BiSpa, BiMap, BiArrowBack } from "react-icons/bi";

const icon = { color: "white", size: "3rem" };

export const HeroSubhead = () => {
  return (
    <div>
      {" "}
      <section className="flex w-full text-white align-middle sm:items-center sm:justify-center py-14">
        <div className="flex flex-col justify-between sm:w-1/2 sm:flex-row">
          <div className="flex justify-center py-4 align-middle">
            <div className="flex flex-col items-center justify-center p-1 bg-gray-700 rounded-full h-9 w-9">
              <BiSpa style={icon} />
            </div>
            <h5 className="w-full px-4 text-2xl tracking-tight">
              Designer who codes
            </h5>
          </div>
          <div className="flex justify-center py-4 align-middle">
            <div className="flex flex-col items-center justify-center p-1 bg-gray-700 rounded-full h-9 w-9">
              <BiMap style={icon} />
            </div>
            <h5 className="w-full px-4 text-2xl tracking-tight">
              Aus Deutschland
            </h5>
          </div>
        </div>
      </section>
    </div>
  );
};
