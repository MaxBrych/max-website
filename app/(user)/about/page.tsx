import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import Image from "next/image";
import Linklist from "../../../components/Linklist";
import Bio from "../../../components/Bio";

const query = groq`
*[_type=='author']{
  ...,
  author,
} 
`;

export default async function About() {
  const author = await client.fetch(query);
  return <Bio author={author} />;
}
