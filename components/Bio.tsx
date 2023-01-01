import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import Linklist from "./Linklist";
import { RichTextComponents } from "./RichTextComponents";
import urlFor from "../lib/urlFor";
import { Footer } from "./Footer";

type Props = {
  author: Author[];
};

function Bio({ author }: Props) {
  console.log(author.length);
  return (
    <div className="px-4 pt-16 md:px-16 md:py-14">
      {author.map((author) => (
        <section key={author._id} className="min-h-screen md:flex ">
          <div className="flex items-baseline justify-between w-full mb-8">
            {/* IMAGE */}
            <Image
              className="rounded-2xl"
              src={urlFor(author.image).url()}
              alt={author.name}
              width={400}
              height={560}
            />
          </div>
          <div className="w-full">
            <h1 className="text-4xl font-semibold leading-8 text-gray-200">
              Hi, ich bin {author.name}.
            </h1>
            <h6 className="my-2 text-lg font-semibold text-gray-200">
              {author.intro}
            </h6>
            <div className="text-lg font-normal text-gray-200 ">
              <PortableText
                value={author.bio}
                components={RichTextComponents}
              />
            </div>

            <div className="mt-6">
              <div className="pt-6 pb-4 mb-4 border-b-2 border-gray-800">
                <h5 className="text-2xl text-gray-200">Links</h5>
              </div>
              <Linklist />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Bio;
