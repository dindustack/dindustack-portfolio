import Link from "next/link";
import React, { forwardRef } from "react";

export type NavItem = {
  label: string;
  path: string;
};

interface ISidebarProps {
  activeLink: string;
  handleScroll: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
}

const navItems: NavItem[] = [
  { label: "Intro", path: "hero" },
  { label: "About", path: "about" },
  { label: "Services", path: "services" },
  { label: "Projects", path: "projects" },
  { label: "Contact", path: "contact" },
];

export const Sidebar = forwardRef<HTMLDivElement, ISidebarProps>(
  function Sidebar({ activeLink, handleScroll }) {
    return (
      <div className="lg:col-span-1 hidden md:block">
        <div className="flex max-w-[3.25rem] justify-center items-center  h-full fixed z-10 border-r-2 border-gray-500 top-0 overflow-x-hidden">
          <ul
            className="flex transform -rotate-90  p-0 gap-[1.5rem] font-eastman uppercase text-gray-900 text-[0.875rem]"
            dir="rtl"
          >
            {navItems.map(({ label, path }, key) => {
              return (
                <li
                  key={key}
                  id={label}
                  className={`${
                    activeLink === path && "sidebar-item-active"
                  } cursor-pointer`}
                >
                  <Link href={`#${path}`} onClick={handleScroll}>
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
);
