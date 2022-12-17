import Link from "./Link.jsx";
import React from "react";

import { FiFigma } from "react-icons/fi";

const Linklist = () => {
  const data = [
    {
      title: "Figma",
      icon: <FiFigma />,
      link: "https://www.figma.com/@maxbrych",
    },
    {
      title: "Ligma",
      icon: <FiFigma />,
      link: "https://www.figma.com/@maxbrych",
    },
  ];

  return (
    <div className="space-y-4">
      {data.map((obj) => (
        <Link title={obj.title} icon={obj.icon} link={obj.link} />
      ))}
    </div>
  );
};

export default Linklist;
