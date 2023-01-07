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
    <div className="py-6 md:px-16 md:py-14">
      <div className="flex justify-between">
        <h1 className="mb-4 text-3xl font-semibold">Blog Posts</h1>
        <a
          href="/blog"
          className="h-10 px-4 py-2 text-black bg-white rounded-full hover:bg-gray-200"
        >
          Mehr sehen
        </a>
      </div>
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3 gap-y-16">
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
                    <p className="text-lg font-bold">{post.title}</p>
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
                <h1 className="mb-1 text-xl font-semibold leading-5">
                  {post.title}
                </h1>
                <p className="line-clamp-3">{post.description}</p>
              </div>
            </div>
          </ClientSideRoute>
        ))}
      </div>
    </div>
  );
}
