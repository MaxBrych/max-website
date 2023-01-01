import React from "react";

export const Skills = (props: any) => {
  return (
    <div className="flex">
      <div className="w-full">
        <div>
          <div className="p-4 rounded-full bg-[#333333]">{props.icon}</div>
          <h5 className="mt-3">{props.name}</h5>
        </div>
      </div>
      <div className="w-full"></div>
    </div>
  );
};
