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
  const query = groq`*[_type == 'post']
    {
        slug
    }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

async function Post({ params: { slug } }: Props) {
  const query = groq`
  *[_type == 'post' && slug.current == $slug] [0]
  {
    ...,
    author->,
    categories[]->
  }
  `;
  const post: Post = await client.fetch(query, { slug });

  return (
    <div className="flex flex-col items-center w-full font-modern md:p-8 sm:py-14">
      <div className="py-20 md:py-18 sm:w-2/3">
        <div className="px-4 ">
          <div>
            <h1 className="text-5xl font-medium tracking-tight md:text-6xl leading-16">
              {post.title}
            </h1>
            <div className="flex justify-between py-6 sm:py-8 ">
              <div className="flex flex-row items-center ">
                <Image
                  className="h-12 rounded-full"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  width={44}
                  height={44}
                />
                <p className="items-center px-2 font-semibold text-m">
                  {" "}
                  {post.author.name}
                </p>
              </div>
              <p className="text-m ">
                {new Date(post._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div>
              <Image
                className="object-cover object-center mx-auto rounded-xl"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                width={560}
                height={160}
              />
            </div>
            <p className="py-6 text-lg sm:text-xl">{post.description}</p>
            <div>{/* TODO: CATEGORIES */}</div>
          </div>
          <div className="py-6 text-lg md:py-8 sm:text-lg">
            <PortableText value={post.body} components={RichTextComponents} />
          </div>
        </div>
        <div className="absolute right-6 top-24">
          <h1 className="invisible text-white md:visible">Sidebar</h1>
        </div>
        <div className="absolute invisible left-4 top-20 sm:left-6 sm:top-24 md:visible">
          <Link href="/blog">
            <MdArrowBackIosNew className="w-12 h-12 p-3 border border-gray-300 rounded-full hover:bg-gray-200" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Post;
