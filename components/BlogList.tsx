import post from "../schemas/post";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import category from "../schemas/category";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  {
    /*console.log(posts.length);*/
  }

  return (
    <div className="">
      <div className="grid grid-cols-1 gap-10 px-4 py-16 md:grid-cols-2 md:px-16 gap-y-16">
        {/* Posts */}
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="flex flex-col cursor-pointer group">
              <div className="relative w-full h-80">
                <Image
                  className="object-cover object-left rounded-2xl"
                  src={urlFor(post.mainImage).url()}
                  alt={post.title}
                  fill
                />
                <div className="invisible absolute bottom-0 flex justify-between w-full p-5 text-white bg-black bg-opacity-20 rounded-b-2xl">
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
              <div className="flex-1 mt-4 text-white">
                <h1 className="text-xl font-semibold leading-5 mb-1">
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

export default BlogList;
