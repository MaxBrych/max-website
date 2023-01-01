import Link from "next/link";
import { BiHomeAlt, BiGridAlt, BiCollection } from "react-icons/bi";
import { HiMenuAlt4 } from "react-icons/hi";

const style = { color: "white", size: "1.5rem" };

function Header() {
  return (
    <div className="fixed top-0 z-50 w-full md:static">
      <nav className="flex items-center justify-between h-16 px-4 text-white bg-black border-b-2 border-gray-800 md:px-16 ">
        <Link
          href="/"
          className="px-3 py-1 font-sans  text-gray-200 rounded-full hover:bg-gray-800"
        >
          Max Brych
        </Link>
        <HiMenuAlt4 style={style} className="invisible" />
        <ul className="flex items-center">
          <li>
            <Link
              href="./blog"
              className="px-3 py-1 text-gray-200 rounded-full hover:bg-gray-700"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="./projects"
              className="px-3 py-1 text-gray-200 rounded-full hover:bg-gray-700"
            >
              Projekte
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="px-3 py-1 text-gray-200 rounded-full hover:bg-gray-800"
            >
              Über Mich
            </Link>
          </li>
        </ul>
        {/* Nav links go here */}
      </nav>
    </div>
  );
}

export default Header;
