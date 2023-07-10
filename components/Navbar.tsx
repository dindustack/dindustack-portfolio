import React, { useEffect, useState } from "react";
import Image from "next/image";
import navbarLogo from "../public/icons/dindustack-navbar-header.svg";
import menu from "../public/icons/menu-fill.svg";
import close from "../public/icons/close-fill.svg";
import { socialItems } from "@/constants/socials";

type NavItem = {
  label: string;
  path: string;
};

const navItems: NavItem[] = [
  { label: "Intro", path: "intro" },
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when the menu is closed
    }

    return () => {
      document.body.style.overflow = "auto"; // Revert to default scrolling when the component is unmounted
    };
  }, [isMenuOpen]);
  return (
    <nav className="w-full fixed bg-[#FFFEF4]  md:bg-inherit  md:relative font-neue-ultrabold uppercase z-[9999]">
      <div className="pt-8 px-4 md:px-8">
        <div className="flex justify-between">
          <Image src={navbarLogo} alt="Dindustack Logo" />
          <div
            className="flex lg:hidden justify-center items-center w-[2.875rem] h-[2.875rem] bg-gray-900 rounded-[1.4375rem] navbar-icon-shadow"
            onClick={handleClick}
          >
            {isMenuOpen ? (
              <Image src={close} alt="close icon" />
            ) : (
              <Image src={menu} alt="menu icon" />
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden absolute left-0 top-0 h-screen w-[100%] bg-[#FFFEF4]  overflow-hidden -z-[1]">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-start-1 col-end-1 mx-auto">
              <div className="flex items-end h-[80%] fixed  overflow-x-hidden">
                <div className="flex flex-col   gap-[1.5rem]">
                  {React.Children.toArray(
                    socialItems.map((item) => (
                      <a href={item.href} target="_blank">
                        <Image
                          src={item.imgSrc}
                          alt={`Chinwendu Agbaetuo - ${item.name}`}
                        />
                      </a>
                    ))
                  )}
                </div>
              </div>
            </div>
            <div className="col-start-2 col-end-7 ">
              <div className="border-l border-black top-[4.4rem] h-full fixed  overflow-x-hidden">
                <div className="flex flex-col gap-[2rem] mt-[6.25rem] pl-6 ">
                  {navItems.map(({ label, path }) => (
                    <div onClick={handleClick} key={path}>
                      <a
                        key={path}
                        href={`#${path}`}
                        className="font-neue text-[1.875rem] tracking-[2.4px] text-gray-900"
                        data-scroll-to
                      >
                        {label}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
