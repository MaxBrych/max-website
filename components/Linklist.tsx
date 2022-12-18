import Link from "./Link.jsx";
import React from "react";

import { FiFigma } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";

const Linklist = () => {
  const data = [
    {
      title: "Figma",
      icon: <FiFigma />,
      link: "https://www.figma.com/@maxbrych",
      id: 1,
    },
    {
      title: "Github",
      icon: <AiFillGithub />,
      link: "https://github.com/MaxBrych",
      id: 2,
    },
  ];

  return (
    <div className="space-y-4">
      {data.map((obj) => (
        <Link key={obj.id} title={obj.title} icon={obj.icon} link={obj.link} />
      ))}
    </div>
  );
};

export default Linklist;
