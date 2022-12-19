import Link from "next/link";
import { BiSpa, BiMap, BiArrowBack } from "react-icons/bi";

const icon = { color: "white", size: "3rem" };
const icon2 = { color: "black", size: "3rem" };

export default function HomePage() {
  return (
    <div className="px-4">
      <main className=" min-h-screen py-24 flex-col w-full items-center  bg-gray-900 align-middle justify-center font-white font-sans">
        <section className="py-18 flex-col w-full  sm:items-center sm:justify-center sm:text-center">
          <p className=" text-xl font-medium">Hey✌️ </p>
          <h1 className="text-gray-200 font-medium py-4 text-5xl tracking-tighter">
            Ich gebe guten Ideen Gestalt.
          </h1>
        </section>
        <section className="flex sm:items-center w-full sm:justify-center align-middle py-14">
          <div className=" sm:w-1/2 flex flex-col sm:flex-row justify-between">
            <div className="flex justify-center align-middle py-4">
              <div className=" bg-gray-700 p-1 h-9 w-9 rounded-full flex flex-col items-center justify-center">
                <BiSpa style={icon} />
              </div>
              <h5 className="w-full text-2xl px-4 tracking-tight">
                Designer who codes
              </h5>
            </div>
            <div className="flex  justify-center align-middle py-4">
              <div className=" bg-gray-700 p-1 h-9 w-9 rounded-full flex flex-col items-center justify-center">
                <BiMap style={icon} />
              </div>
              <h5 className="w-full text-2xl px-4 tracking-tight">
                Aus Deutschland
              </h5>
            </div>
          </div>
        </section>
        <div className="w-full mt-8 flex flex-no-wrap items-center  sm:justify-center">
          <Link
            href="/about"
            className="flex flex-no-wrap bg-white font-medium px-4 py-2 rounded-full text-gray-900 "
          >
            Artikel Lesen
            <div className="transform rotate-180 flex flex-col items-center justify-center pr-2">
              <BiArrowBack style={icon2} />
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
