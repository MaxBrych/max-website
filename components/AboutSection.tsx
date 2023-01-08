import { PortableText } from "@portabletext/react";
import React from "react";
import urlFor from "../lib/urlFor";
import Linklist from "./Linklist";
import { RichTextComponents } from "./RichTextComponents";
import Image from "next/image";
import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";

type Props = {
  author: Author[];
};

export default function AboutSection({ author }: Props) {
  return (
    <div className="py-6 border md:px-16 md:py-14 border-y-gray-200 dark:border-y-gray-800 border-x-0">
      {author.map((author) => (
        <section
          className="w-full gap-12 sm:flex align-center "
          key={author._id}
        >
          <div className="flex-col items-baseline justify-between w-full py-8 md:flex-row">
            {/* IMAGE */}

            <Image
              className="rounded-full h-14 mb-3"
              src={urlFor(author.image).url()}
              alt={author.name}
              width={56}
              height={56}
            />

            <h1 className="my-2 text-3xl font-medium leading-8 ">
              Hi, ich bin {author.name}.
            </h1>
            <h6 className="mb-2 text-base font-semibold ">{author.intro}</h6>
            <PortableText value={author.bio} components={RichTextComponents} />
          </div>
          <div className="flex-col items-bottom justify-end w-full py-6 md:py-12 md:flex-row">
            {/*  <div className="pt-6 pb-4 mb-4 border-b-2 border-gray-800">
              <h5 className="text-2xl text-gray-200">Links</h5>
            </div> */}
            <Linklist />
          </div>
        </section>
      ))}
    </div>
  );
}
