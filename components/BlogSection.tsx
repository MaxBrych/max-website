import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";
import ClientSideRoute from "./ClientSideRoute";
import urlFor from "../lib/urlFor";
import Image from "next/image";

type Props = {
  posts: Post[];
};

export default function BlogSection({ posts }: Props) {
  return (
    <div className="py-8 md:px-16 md:py-14">
      <div className="flex justify-between py-2">
        <h1 className="mb-4 text-3xl font-medium">Blog Posts</h1>
        <a
          href="/blog"
          className="h-10 px-4 py-2 text-black bg-white dark:bg-gray-800 dark:text-white rounded-full dark:hover:dark:bg-gray-800 hover:bg-gray-200"
        >
          Mehr sehen
        </a>
      </div>
      <div className="grid grid-cols-1 md:gap-8 md:grid-cols-3 gap-y-8 md:gap-y-16">
        {/* Posts */}
        {posts.map((post: any) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="flex flex-col cursor-pointer group">
              <div className="relative w-full h-56 border border-gray-800 rounded-xl">
                <Image
                  className="object-cover object-left rounded-xl"
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  fill
                />
                <div className="absolute bottom-0 flex justify-between invisible w-full p-5 bg-opacity-20 rounded-b-2xl">
                  <div>
                    <p className="text-lg font-medium">{post.title}</p>
                    <p>
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 mt-4 ">
                <h1 className="mb-1 text-xl font-medium leading-5">
                  {post.title}
                </h1>
                <p className="line-clamp-3 text-sm mt-2">{post.description}</p>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}
