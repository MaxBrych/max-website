import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";
import ClientSideRoute from "./ClientSideRoute";
import urlFor from "../lib/urlFor";
import Image from "next/image";

type Props = {
  projects: Project[];
};

export default function ProjectSection({ projects }: Props) {
  return (
    <div className="py-8 md:px-16 md:py-14">
      <div className="flex justify-between">
        <h1 className="mb-4 text-3xl font-medium">Projekte</h1>
        <a
          href="/projects"
          className="h-10 px-4 py-2 text-black bg-white dark:bg-gray-800 dark:text-white rounded-full hover:bg-gray-200"
        >
          Mehr sehen
        </a>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 gap-y-8 md:gap-y-16">
        {/* Posts */}
        {projects.map((project: any) => (
          <ClientSideRoute key={project._id} route={project.link}>
            <div className="flex flex-col cursor-pointer group">
              <div className="relative w-full h-56 border border-gray-800 md:h-80 rounded-xl">
                <Image
                  className="object-cover object-left rounded-xl"
                  src={urlFor(project.mainImage).url()}
                  alt={project.title}
                  fill
                />
                <div className="absolute bottom-0 flex justify-between invisible w-full p-5 bg-opacity-20 rounded-b-2xl">
                  <div>
                    <p className="text-lg font-medium">{project.title}</p>
                    <p>
                      {new Date(project._createdAt).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 mt-4 ">
                <h1 className="mb-1 text-xl font-medium leading-5">
                  {project.title}
                </h1>
                <p className="line-clamp-3">{project.description}</p>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}
