"use client";
import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

export default function() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 bg-[#121212] shadow z-10">
      <div className="flex container py-4 flex-wrap items-center justify-between mx-auto px-4">
        <Link
          href={"/"}
          className="text-3xl md:text-5xl text-white font-bold mt-1"
        >
          Portfolio.
        </Link>
        <div className="mobile-menu block sm:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border border-violet-400 rounded text-violet-300 glowing-button"
            >
              <Bars3Icon className="h-5 w-5 scale-125" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border border-violet-400 rounded text-violet-300 glowing-button"
            >
              <XMarkIcon className="h-5 w-5 scale-125" />
            </button>
          )}
        </div>
        <div className="menu hidden sm:block sm:w-auto" id="navbar">
          <ul className="flex p-4 sm:p-0 sm:flex-row sm:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index} className="p-1">
                <Link
                  href={link.path}
                  className="block py-2 sm:text-lg sm:p-0 hover:text-white font-bold"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ?
      <ul className="flex flex-col pb-3 items-center">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.path}
              className="block py-2 sm:text-xl rounded sm:p-0 hover:text-white"
              onClick={() => setNavbarOpen(false)}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      : null}
    </nav>
  );
};
