import React from "react";

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
  children?: React.ReactNode;
};

export function Sidebar({ children }: SidebarProps) {
  return (
    <div className="grid grid-cols-12 min-h-screen px-8">
      <div className="flex col-start-1 col-end-1 ">
        <div className="flex max-w-[3.25rem] flex-col justify-center items-center p-0 gap-[4.5rem] h-full fixed z-10 border-r-2 border-gray-500 top-0 overflow-x-hidden ">
          {React.Children.toArray(
            navItems.map(({ label }) => (
              <a href="#" className="sidebar-item">
                {label}
              </a>
            ))
          )}
        {/* <div className="w-[2px] bg-gray-500 p-0"></div> */}
        </div>
      </div>

      <div className="col-start-2 col-end-13">{children}</div>
    </div>
  );
}