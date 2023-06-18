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
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("scroll", entry.target.id);
          setActiveLink(entry.target.id);
        }
      });
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
    <div className="grid grid-cols-12 min-h-screen px-8">
      <div className="flex col-start-1 col-end-1">
        <div className="flex max-w-[3.25rem] flex-col justify-center items-center p-0 gap-[4.5rem] h-full fixed z-10 border-r-2 border-gray-500 top-0 overflow-x-hidden">
          {navItems.map(({ label, path }) => (
            <a
              key={path}
              href={`#${path}`}
              className={`sidebar-item ${
                activeLink === path && "font-eastman-bold text-gray-900"
              }`}
              data-scroll-to
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <div className="col-start-2 col-end-13" data-scroll-container>
        {children}
      </div>
      <ScrollDownArrow />
    </div>
  );
}
