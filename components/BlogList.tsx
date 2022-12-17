import post from "../schemas/post";
import Image from "next/image";
import urlFor from "../lib/urlFor";
import category from "../schemas/category";
import ClientSideRoute from "./ClientSideRoute";

type Props = {
  posts: Post[];
};

function BlogList({ posts }: Props) {
  console.log(posts.length);

  return (
    <div>
      <hr className="border-gray mb-10" />

      <div className=" grid grid-cols-1 md:grid-cols-2 px-4 md:px-16 gap-10 gap-y-16 pb-16">
        {/* Posts */}
        {posts.map((post) => (
          <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
            <div className="flex flex-col group cursor-pointer">
              <div className="relative w-full h-80">
                <Image
                  className="object-cover object-left"
                  src={urlFor(post.mainImage).url()}
                  alt={""}
                  fill
                />
                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black flex justify-between p-5 text-white">
                  <div>
                    <p className=" font-bold">{post.title}</p>
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
              <div className="mt-5 flex-1 text-white">
                <p>{post.title}</p>
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
