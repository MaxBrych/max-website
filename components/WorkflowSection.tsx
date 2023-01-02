import React from "react";
import { BiCodeAlt, BiPen, BiVolume } from "react-icons/bi";

const icon = { color: "black", size: "36" };

export const WorkflowSection = () => {
  const data = [
    {
      icon: <BiPen style={icon} />,
      title: "Design",
      descr: "Design Systems und Prototypen erstelle ich in Figma.",
      link: "https://src.com",
    },
    {
      icon: <BiCodeAlt style={icon} />,
      title: "Build",
      descr:
        "Ich baue Websites in Webflow. Coden tuh ich mit React und Next.js.",
      link: "https://src.com",
    },
    {
      icon: <BiVolume style={icon} />,
      title: "Ship",
      descr: "Designs veröffentliche ich auf Dribbble und Code auf Github.",
      link: "https://src.com",
    },
  ];
  return (
    <div className="py-6 md:px-16 md:py-14">
      <section className="md:grid md:grid-cols-3 ">
        {data.map((obj) => (
          <div className="flex flex-col items-start justify-start mb-4 ">
            {obj.icon}
            <h1 className="text-2xl font-medium">{obj.title}</h1>
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
