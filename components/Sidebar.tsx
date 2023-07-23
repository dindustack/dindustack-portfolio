import React, { useEffect, useState } from "react";
import { ScrollDownArrow } from "./ScrollDownArrow";

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

type SidebarProps = {
  children: React.ReactNode;
};

export function Sidebar({ children }: SidebarProps) {
  const [activeLink, setActiveLink] = useState(navItems[0].path);

  // make the first navitem active by default

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const visibleEntries = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target.id);

      if (visibleEntries.length !== 0) {
        setActiveLink(visibleEntries[0]);
      }
    };

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    document.querySelectorAll("*[data-scroll-section]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="grid grid-cols-12 min-h-screen px-4 md:px-8">
      <div className="md:col-span-1 hidden md:block">
        <div className="flex max-w-[3.25rem] justify-center items-center  h-full fixed z-10 border-r-2 border-gray-500 top-0 overflow-x-hidden">
          <div
            className="flex transform -rotate-90  p-0 gap-[1.5rem] font-eastman uppercase text-gray-900 text-[0.875rem]"
            dir="rtl"
          >
            {navItems.map(({ label, path }) => (
              <a
                key={path}
                href={`#${path}`}
                className={`${activeLink === path && "sidebar-item-active"}`}
                data-scroll-to
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="col-span-12 lg:col-span-11">{children}</div>
      <ScrollDownArrow />
    </div>
  );
}
