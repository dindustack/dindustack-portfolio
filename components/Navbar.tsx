import React, { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import navbarLogo from "../public/icons/dindustack-navbar-header.svg";
import menu from "../public/icons/menu-fill.svg";
import close from "../public/icons/close-fill.svg";
import rectangle from "../public/icons/rectangle.svg";
import { socialItems } from "@/constants/socials";

type NavItem = {
  label: string;
  path: string;
};

const navItems: NavItem[] = [
  { label: "Intro", path: "intro" },
  { label: "About", path: "about" },
  { label: "Services", path: "services" },
  // { label: "Projects", path: "projects" },
  { label: "Contact", path: "contact" },
];

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const matchedValue = router.asPath.split("#")[1];

  const [activeNavItem, setActiveNavItem] = useState<NavItem>(
    (router && navItems.find((item) => item.path === matchedValue)) ||
      navItems[0]
  );

  const closeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = useCallback(
    (path: string) => {
      setIsMenuOpen(!isMenuOpen);
      setActiveNavItem(
        navItems.find((item) => item.path === path) || navItems[0]
      );
    },
    [isMenuOpen]
  );

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
    <nav className="w-full fixed md:relative font-neue-ultrabold uppercase z-[9999]">
      <div className="pt-8 px-4 md:px-8 bg-transparent backdrop-blur-[5px] md:backdrop-blur-none">
        <div className="flex justify-between">
          <Image src={navbarLogo} alt="Dindustack Logo" />
          <div
            className="flex md:hidden justify-center items-center w-[2.875rem] h-[2.875rem] bg-gray-900 rounded-[1.4375rem] navbar-icon-shadow"
            onClick={closeMenu}
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
          <div className="grid grid-cols-6">
            <div className="col-start-1 col-end-1 pl-4">
              <div className="flex items-end h-[90%] fixed  overflow-x-hidden">
                <div className="flex flex-col gap-[1.5rem]">
                  {React.Children.toArray(
                    socialItems.map((item) => (
                      <a href={item.href} target="_blank">
                        <Image
                          src={item.imgSrc}
                          alt={`Chinwendu Agbaetuo - ${item.name}`}
                          width={30}
                          height={30}
                        />
                      </a>
                    ))
                  )}
                </div>
              </div>
            </div>
            <div className="col-start-2 col-end-7 -ml-[0.5rem]">
              <div className="border-l border-black top-[4.4rem] h-full fixed  overflow-x-hidden">
                <div className="flex flex-col gap-[2rem] mt-[6.25rem] pl-6">
                  {navItems.map(({ label, path }) => (
                    <div
                      key={path}
                      className="text-[1.875rem] tracking-[2.4px]"
                    >
                      <a
                        key={path}
                        href={`#${path}`}
                        className={` ${
                          activeNavItem.path === path
                            ? "navbar-item-active"
                            : "navbar-item"
                        }`}
                        onClick={() => handleClick(path)}
                        data-scroll-to
                      >
                        <span>{label}</span>
                        {activeNavItem && activeNavItem.path === path && (
                          <span className="fixed indicator mt-2">
                            <Image src={rectangle} alt="rectangle" />
                          </span>
                        )}
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
