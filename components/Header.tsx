import Link from "next/link";
import { BiHomeAlt, BiGridAlt, BiCollection } from "react-icons/bi";
import { HiMenuAlt4 } from "react-icons/hi";

const style = { color: "white", size: "1.5rem" };

function Header() {
  return (
    <div className="fixed top-0 z-50 w-full md:static">
      <nav className="px-4 md:px-16 flex items-center justify-between h-16 text-white bg-gray-900 border-b-2 border-gray-800 ">
        <Link
          href="/"
          className=" py-1 font-sans text-gray-200 rounded-full hover:bg-gray-800"
        >
          Max Brych
        </Link>
        <HiMenuAlt4 style={style} className="invisible" />
        <ul className="flex items-center">
          <li>
            <Link
              href="/"
              className=" py-1 text-gray-200 rounded-full hover:bg-gray-800"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="px-3 py-1 text-gray-200 rounded-full hover:bg-gray-800"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="./blog"
              className="px-3 py-1 text-gray-200 rounded-full hover:bg-gray-700"
            >
              Blog
            </Link>
          </li>
        </ul>
        {/* Nav links go here */}
      </nav>
    </div>
  );
}

export default Header;
