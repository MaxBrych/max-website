import Link from "next/link";
import { BiHomeAlt, BiGridAlt, BiCollection, BiUser } from "react-icons/bi";

const style = { color: "white", fontSize: "1.5em" };

function Header() {
  return (
    <div>
      <nav className="px-4 md:px-16 flex items-center justify-between h-16 text-white bg-gray-900 border-b-2 border-gray-800 ">
        <Link
          href="/"
          className="px-3 py-1 font-sans text-gray-200 rounded-full hover:bg-gray-800"
        >
          Max Brych
        </Link>
      </nav>

      <div className="fixed bottom-0 md:top-0 z-50 w-full sm:static border border-t-1 border-l-0 border-r-0 border-b-0 sm:border-t-0 border-gray ">
        <nav className="px-4 md:px-16 flex items-center justify-between h-16 text-white bg-gray-900 border-b-2 border-gray-800 ">
          <Link
            href="/"
            className="px-3 py-1 invisible sm:visible font-sans text-gray-200 rounded-full hover:bg-gray-800"
          >
            Max Brych
          </Link>
          <ul className="flex items-center justify-between w-full sm:w-auto">
            <li className="flex flex-col items-center">
              <BiHomeAlt style={style} className="sm:invisible" />
              <Link
                href="/"
                className="px-3 py-1 text-gray-200 rounded-full hover:bg-gray-800"
              >
                Home
              </Link>
            </li>
            <li className="flex flex-col items-center">
              <BiCollection style={style} className="sm:invisible" />
              <Link
                href="./blog"
                className="px-3 py-1 text-gray-200 rounded-full hover:bg-gray-700"
              >
                Blog
              </Link>
            </li>
            <li className="flex flex-col items-center">
              <BiUser style={style} className="sm:invisible " />
              <Link
                href="/about"
                className="px-3 py-1 text-gray-200 rounded-full hover:bg-gray-800 "
              >
                About
              </Link>
            </li>
          </ul>

          {/* Nav links go here */}
        </nav>
      </div>
    </div>
  );
}

export default Header;
