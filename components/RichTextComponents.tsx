import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="realtive w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
            src={urlFor(value).url()}
            alt="Blog Post Image"
            width={324}
            height={200}
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="text-white ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className=" text-white mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-white text-5xl py-10 font-semibold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-white text-4xl py-10 font-semibold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-white text-3xl py-10 font-semibold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-white text-2xl py-10 font-semibold">{children}</h4>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="border-l-white text-white border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className=" text-white underline decoration-white hover:decoration-gray"
        >
          {children}
        </Link>
      );
    },
  },
};
