"use client";
import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isRotated, setRotated] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setRotated(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      // Close the menu when the screen size becomes larger
      if (window.innerWidth >= 768 && isMenuOpen) {
        setMenuOpen(false);
      }
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-gray-600 p-2">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Logo and Hamburger Icon */}
        <div className="flex justify-between items-center md:w-auto">
          <Image src="/logo_new.png" width={200} height={200} />

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              id="iconButton"
              onClick={toggleMenu}
              className={isRotated ? "rotate-icon" : "rotate-icon-two"}
            >
              <svg
                className="w-6 h-6 text-white cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 8h16M4 16h16"
                  vectorEffect="non-scaling-stroke"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Search Input */}
        <input
          type="text"
          className={`text-black p-2 rounded-lg focus:outline-black md:w-1/3 ${
            isMenuOpen ? "hidden" : "md:block"
          }`}
          placeholder="Search"
        />

        {/* Navigation Links */}
        <ul
          className={`md:flex items-center ${
            isMenuOpen ? "flex flex-col" : "hidden"
          }`}
        >
          <Link className="p-3" href="/">
            Home
          </Link>
          <Link className="p-3" href="/">
            Products
          </Link>
          <Link className="p-3" href="/">
            Favourites
          </Link>
          <Link className="p-3" href="/">
            Contact
          </Link>
          <button className="bg-gray-500 p-3 rounded-lg">Cart</button>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
