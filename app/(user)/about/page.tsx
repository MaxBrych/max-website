import Image from "next/image";
import Linklist from "../../../components/Linklist";

interface About {
  props: any;
}

function About({ props }: any) {
  return (
    <div>
      <main className="flex justify-center px-4 bg-gray-900 align-center">
        <section className="flex-col max-w-xl min-h-screen font-mono align-center">
          <div className="flex items-baseline justify-between my-4">
            {/* Image */}
            <a
              href=""
              className="flex items-center px-3 py-2 font-semibold text-black transition ease-in-out rounded-full hover:opacity-100 h-9 bg-gradient-to-r from-white to-primary-200 hover:bg-gradient-r hover:from-primary-200 hover:to-primary-200"
            >
              folgen
            </a>
          </div>

          <h1 className="text-3xl font-semibold leading-8 text-gray-200">
            maxbrych.eth
          </h1>
          <h6 className="mb-2 text-base font-semibold text-gray-200">
            Web3 Enthusiast Technologe und Erkunder Virtueller Welten
          </h6>
          <p className="text-base font-normal text-gray-200 ">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>

          <div>
            <div className="py-4 mb-4 border-b-2 border-gray-800">
              <h5 className="text-2xl text-gray-200">Links</h5>
            </div>
            <Linklist />
          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
