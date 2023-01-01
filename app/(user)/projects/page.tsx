import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";

import PreviewBlogList from "../../../components/PreviewBlogList";
import BlogList from "../../../components/BlogList";
import PreviewSuspense from "../../../components/PreviewSuspense";

const query = groq`
*[_type=='project']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc)
`;

export const revalidate = 30; //revalidate content on this page every 39 seconds

export default async function Project() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-white">Loading Preview...</p>;
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  return (
    <div className="flex flex-col justify-between min-h-screen">
      <BlogList posts={posts} />
    </div>
  );
}
