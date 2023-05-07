import React, { useState } from "react";
import Image from "next/image";
import { Link } from "react-scroll";

import close from "../public/icons/close-outline.svg";
import menu from "../public/icons/menu-outline.svg";

type NavItem = {
  label: string;
  path: string;
};

const navItems: NavItem[] = [
  { label: "About", path: "about" },
  { label: "Services", path: "services" },
  { label: "Projects", path: "projects" },
  { label: "Contact", path: "contact" },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative w-full bg-black">
      <div className="px-[0.75rem] md:px-[2.5rem] mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] md:text-[30px]">
                dindustack
              </div>
            </div>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {navItems.map(({ label, path }) => (
                <Link
                  key={path}
                  activeClass=""
                  className="cursor-pointer"
                  to={path}
                  spy={true}
                  smooth="easeInQuad"
                  duration={200}
                >
                  <a className="hover:underline underline-offset-[6px] decoration-2 decoration-[#E7E7E7] mx-1 md:block hidden mix-blend-difference font-monument font-bold text-[30px] tracking-[0.05em]">
                    {label}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div className=" flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
              onClick={handleClick}
            >
              {isMenuOpen ? (
                <Image
                  src={close}
                  className="w-9 object-contain invert"
                  alt=""
                />
              ) : (
                <Image
                  src={menu}
                  className="w-9 object-contain invert"
                  alt=""
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden absolute left-0 top-[10rem] h-screen w-[100%] bg-black z-[22] overflow-hidden">
          <div className="px-[0.75rem] pt-2 pb-3 text-center space-y-16">
            {navItems.map(({ label, path }) => (
              <Link
                key={path}
                activeClass=""
                className="block cursor-pointer"
                to={path}
                spy={true}
                smooth="easeInQuad"
                duration={200}
                onClick={handleClick}
              >
                <a className="hover:underline hover:decoration-2 decoration-[#E7E7E7] hover:underline-offset-[6px] block text-[#e7e7e7] px-3 py-2 font-monument font-semibold text-[20px] tracking-[0.15em]">
                  {label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
