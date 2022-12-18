import Image from "next/image";
import Link from "next/link";
import urlFor from "../lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="w-full m-10 mx-auto realtive h-96">
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
      <ul className="py-4 ml-10 space-y-5 text-white list-disc">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="text-white list-decimal mt-lg">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="py-6 text-4xl font-semibold text-white sm:py-10">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="py-6 text-4xl font-semibold text-white sm:py-10">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="py-6 text-3xl font-semibold text-white sm:py-10">
        {children}
      </h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="py-4 text-2xl font-semibold text-white sm:py-6">
        {children}
      </h4>
    ),
    p: ({ children }: any) => (
      <p className="py-6 text-xl font-semibold text-white sm:py-10">
        {children}
      </p>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className="py-4 pl-4 my-5 text-white border-l-4 sm:py-5 border-l-white">
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
          className="text-white underline decoration-white hover:decoration-gray"
        >
          {children}
        </Link>
      );
    },
  },
};
