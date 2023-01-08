import post from "../schemas/post";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import category from "../schemas/category";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  projects: Project[];
};

function ProjectList({ projects }: Props) {
  {
    /*console.log(posts.length);*/
  }

  return (
    <div className="">
      <div className="grid grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:px-16 gap-y-16">
        {/* Posts */}
        {projects.map((project) => (
          <ClientSideRoute key={project._id} route={project.link}>
            <div className="flex flex-col cursor-pointer group">
              <div className="relative w-full h-56">
                <Image
                  className="object-cover object-left rounded-2xl"
                  src={urlFor(project.mainImage).url()}
                  alt={project.title}
                  fill
                />
                <div className="absolute bottom-0 flex justify-between invisible w-full p-5 text-white bg-black dark:text-black dark:bg-white bg-opacity-20 rounded-b-2xl">
                  <div>
                    <p className="text-lg font-bold">{project.title}</p>
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
              <div className="flex-1 mt-4 text-white">
                <h1 className="mb-1 text-xl font-semibold leading-5">
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

export default ProjectList;
