import React from "react";
import { BiCodeAlt, BiGlobe, BiPen, BiVolume } from "react-icons/bi";

const icon = { color: "black", size: "2rem" };

export const WorkflowSection = () => {
  const data = [
    {
      icon: <BiPen className="w-6 h-6 text-black dark:text-white mb-3" />,
      title: "Design",
      descr: "Design Systems und Prototypen erstelle ich in Figma.",
      link: "https://src.com",
    },
    {
      icon: <BiCodeAlt className="w-6 h-6 text-black dark:text-white mb-3" />,
      title: "Build",
      descr:
        "Ich baue Websites in Webflow. Coden tuh ich mit React und Next.js.",
      link: "https://src.com",
    },
    {
      icon: <BiGlobe className="w-6 h-6 text-black dark:text-white mb-3" />,
      title: "Publish",
      descr:
        "Designs veröffentliche ich auf meinem Figma Account und Code auf Github.",
      link: "https://src.com",
    },
  ];
  return (
    <div className="py-14 md:px-16 md:py-14">
      <section className=" space-y-12 md:space-x-8 md:grid md:grid-cols-3 md:pr-4">
        {data.map((obj) => (
          <div className="p-6 rounded-lg border border-gray-500">
            {obj.icon}
            <h1 className="text-2xl font-medium mb-2">{obj.title}</h1>
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
