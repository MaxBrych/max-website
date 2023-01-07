import Link from "next/link";

import BlogSection from "../../components/BlogSection";

import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import ClientSideRoute from "../../components/ClientSideRoute";
import urlFor from "../../lib/urlFor";
import Image from "next/image";
import ProjectSection from "../../components/ProjectSection";
import { BiArrowBack } from "react-icons/bi";
import { HeroSection } from "../../components/HeroSection";
import { WorkflowSection } from "../../components/WorkflowSection";
import AboutSection from "../../components/AboutSection";
import { Footer } from "../../components/Footer";

const icon2 = { color: "black", size: "3rem" };

const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc) 
`;

const query2 = groq`
*[_type=='project']{
  ...,
  author->,
  categories[]->
} | order(_createdAt desc) 
`;

const query3 = groq`
*[_type=='author']{
  ...,
  author,
} 
`;

export const revalidate = 30;

export default async function HomePage() {
  const posts = await client.fetch(query);
  const projects = await client.fetch(query2);
  const author = await client.fetch(query3);
  return (
    <div>
      <main className="flex-col items-center justify-center w-full min-h-screen px-4 py-24 align-middle font-modern ">
        <HeroSection />
        <ProjectSection projects={projects} />
        <BlogSection posts={posts} />
        <AboutSection author={author} />
        <WorkflowSection />
      </main>
    </div>
  );
}
