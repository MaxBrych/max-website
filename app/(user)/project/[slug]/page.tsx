import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents";
import Link from "next/link";
import { MdArrowBackIosNew } from "react-icons/md";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30; //revalidate content on this page every 39 seconds

export async function generateStaticParams() {
  const query = groq`*[_type == 'project']
    {
        slug
    }`;

  const slugs: Project[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function ProjectPage({ params: { slug } }: Props) {
  const query = groq`
  *[_type == 'project' && slug.current == $slug] [0]
  {
    ...,
    author->,
    categories[]->
  }
  `;
  const project: Project = await client.fetch(query, { slug });

  return (
    <div className="flex flex-col items-center w-full">
      <div className="py-8 md:py-18 sm:w-2/3">
        <div className="px-4 ">
          <div>
            <h1 className="font-mono text-4xl font-semibold tracking-tighter md:text-5xl leading-16">
              {project.title}
            </h1>
            <div className="flex justify-between py-6 sm:py-8 ">
              <div className="flex flex-row align-top">
                <Image
                  className="rounded-full"
                  src={urlFor(project.author.image).url()}
                  alt={project.author.name}
                  width={40}
                  height={40}
                />
                <p className="px-2 font-semibold text-white text-m">
                  {" "}
                  {project.author.name}
                </p>
              </div>
              <p className="text-white">
                {new Date(project._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div>
              <Image
                className="object-cover object-center mx-auto"
                src={urlFor(project.mainImage).url()}
                alt={project.author.name}
                width={560}
                height={160}
              />
            </div>
            <p className="py-6 text-lg sm:text-2xl">{project.description}</p>
            <div>{/* TODO: CATEGORIES */}</div>
          </div>
          <div className="py-6 text-lg sm:text-2xl">
            <PortableText
              value={project.body}
              components={RichTextComponents}
            />
          </div>
        </div>
        <div className="absolute right-6 top-24">
          <h1 className="invisible text-white md:visible">Sidebar</h1>
        </div>
        <div className="absolute invisible left-4 top-20 sm:left-6 sm:top-24 md:visible">
          <Link href="/blog">
            <MdArrowBackIosNew className="w-12 h-12 p-3 bg-gray-800 border border-gray-300 rounded-full hover:bg-gray-700" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
