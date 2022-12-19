import { PortableText } from "@portabletext/react";
import Image from "next/image";
import React from "react";
import Linklist from "./Linklist";
import { RichTextComponents } from "./RichTextComponents";
import urlFor from "../lib/urlFor";

type Props = {
  author: Author[];
};

function Bio({ author }: Props) {
  console.log(author.length);
  return (
    <div>
      {author.map((author) => (
        <main
          key={author._id}
          className="flex justify-center px-4 bg-gray-900 align-center "
        >
          <section className="flex-col w-full  md:w-1/2 min-h-screen align-center">
            <div className="flex items-baseline justify-between py-12">
              {/* IMAGE */}
              <Image
                className="rounded-full"
                src={urlFor(author.image).url()}
                alt={author.name}
                width={96}
                height={96}
              />
              <a
                href="https://twitter.com/MaxBrych"
                className="flex items-center px-3 py-2 font-bold text-black transition ease-in-out rounded-full text-m hover:opacity-100 h-9 bg-gradient-to-r from-white to-primary-200 hover:bg-gradient-r hover:from-primary-200 hover:to-primary-200"
              >
                Folgen
              </a>
            </div>

            <h1 className="text-3xl font-semibold leading-8 text-gray-200">
              Hi, ich bin {author.name}.
            </h1>
            <h6 className="mb-2 text-base font-semibold text-gray-200">
              {author.intro}
            </h6>
            <div className="text-base font-normal text-gray-200 ">
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
          </section>
        </main>
      ))}
    </div>
  );
}

export default Bio;
