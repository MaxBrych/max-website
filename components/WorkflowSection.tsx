import React from "react";
import { BiCodeAlt, BiGlobe, BiPen, BiVolume } from "react-icons/bi";

const icon = { color: "black", size: "2rem" };

export const WorkflowSection = () => {
  const data = [
    {
      icon: <BiPen className="w-6 h-6 mb-3 text-black dark:text-white" />,
      title: "Design",
      descr: "Design Systems und Prototypen erstelle ich in Figma.",
      link: "https://src.com",
    },
    {
      icon: <BiCodeAlt className="w-6 h-6 mb-3 text-black dark:text-white" />,
      title: "Build",
      descr:
        "Ich baue Websites mit Webflow. Coden tue ich mit Frameworks wie NextJS .",
      link: "https://src.com",
    },
    {
      icon: <BiGlobe className="w-6 h-6 mb-3 text-black dark:text-white" />,
      title: "Publish",
      descr:
        "Designs veröffentliche ich auf meinem Figma Account und Code auf Github.",
      link: "https://src.com",
    },
  ];
  return (
    <div className="py-14 md:px-16 md:py-14">
      <section className="space-y-12 md:space-y-0 md:space-x-8 md:grid md:grid-cols-3 md:items-start md:pr-4">
        {data.map((obj) => (
          <div className="h-full p-6 border border-gray-500 rounded-lg">
            {obj.icon}
            <h1 className="mb-2 text-2xl font-medium">{obj.title}</h1>
            <p className="text-lg text-gray-300">{obj.descr}</p>
            {/*  <a
              href={obj.link}
              className="px-6 py-2 mt-4 text-base font-semibold rounded-full"
            >
              Erfahre Mehr
            </a>*/}
          </div>
        ))}
      </section>
    </div>
  );
};
