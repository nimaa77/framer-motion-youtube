"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
  {
    name: "About Us",
    path: "/about",
  },
];

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="px-4 py-3">
      <ul className="space-x-3">
        {navItems.map((item) => {
          const isActive = pathname === item.path;

          return (
            <li className="inline-block" key={item.path}>
              <Link className="mx-1" href={item.path}>
                {item.name}
              </Link>
              {isActive && (
                <span className="mt-2 h-0.5 bg-pink-500 w-full block" />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
