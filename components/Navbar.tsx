import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import close from "../icons/close-outline.svg";
import menu from "../icons/menu-outline.svg";

type NavItem = {
  label: string;
};

const navItems: NavItem[] = [
  { label: "About" },
  { label: "Services" },
  { label: "Projects" },
  { label: "Contact" },
];

export const Navbar: React.FC = () => {
  const router = useRouter();
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
              <Link href="/" legacyBehavior>
                <div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] md:text-[30px]">
                  dindustack
                </div>
              </Link>
            </div>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              {navItems.map(({ label }, index) => (
                <Link key={index} href="#" legacyBehavior>
                  <a className="hover:underline hover:decoration-2 decoration-[#E7E7E7] hover:underline-offset-[6px] mx-1 md:block hidden mix-blend-difference font-monument font-bold text-[30px] tracking-[0.05em]">
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
        <div className="sm:hidden absolute left-0 top-[6.25rem] h-screen w-[100%] bg-black z-[22] overflow-hidden">
          <div className="px-[0.75rem] pt-2 pb-3  text-center space-y-16">
            {navItems.map(({ label }, index) => (
              <Link key={index} href="#" legacyBehavior>
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
