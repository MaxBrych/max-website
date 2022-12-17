import { groq } from "next-sanity";
import { client } from "../../../../lib/sanity.client";
import Image from "next/image";
import urlFor from "../../../../lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "../../../../components/RichTextComponents";

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
    <article className="grid grid-cols-2 gap-4">
      <div>
        <div className="max-w-md py-16 ">
          <div>
            <h1 className="font-mono text-4xl leading-9 text-white">
              {post.title}
            </h1>
            <div className="flex justify-between">
              <div className="flex">
                <Image
                  className="rounded-full"
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  width={40}
                  height={40}
                />
                <p className="text-white"> {post.author.name}</p>
              </div>
              <p className="text-white">
                {new Date(post._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div>
              <Image
                className="object-cover object-center mx-auto"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                width={360}
                height={200}
              />
            </div>
            <p className="text-white">{post.description}</p>
            <div>{/* TODO: CATEGORIES */}</div>
          </div>
        </div>
        <PortableText value={post.body} components={RichTextComponents} />
      </div>
      <div>
        <h1 className="text-white">Sidebar</h1>
      </div>
    </article>
  );
}

export default Post;
