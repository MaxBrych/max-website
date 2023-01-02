import Link from "next/link";
import { RxTwitterLogo, RxInstagramLogo } from "react-icons/rx";
import { HiMenuAlt4 } from "react-icons/hi";
import { FaTiktok } from "react-icons/fa";
import { linkSync } from "fs";

const style = { color: "white", size: "2rem" };

function Header() {
  const links = [
    {
      icon: <RxTwitterLogo style={style} />,
      href: "/",
      id: 1,
    },
    {
      icon: <RxInstagramLogo style={style} />,
      href: "/",
      id: 2,
    },
    {
      icon: <FaTiktok style={style} />,
      href: "/",
      id: 3,
    },
  ];
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
          {links.map((link) => (
            <li className="px-2 py-2  rounded-full hover:bg-gray-700">
              <Link href={link.href} key={link.id}>
                {link.icon}
              </Link>
            </li>
          ))}
        </ul>
        {/* Nav links go here */}
        {/* <ul className="flex items-center">
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
        </ul> */}
      </nav>
    </div>
  );
}

export default Header;
