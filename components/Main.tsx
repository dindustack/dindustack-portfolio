import React, { useRef, useState } from "react";
import { InView } from "react-intersection-observer";
import { About } from "./About";
import { Hero } from "./Hero";
import { MarqueeSection } from "./Marquee";
import { Projects } from "./Projects";
import { ScrollDownArrow } from "./ScrollDownArrow";
import { Services } from "./Services";
import { NavItem, Sidebar } from "./Sidebar";

const sectionInfo = [
  {
    id: "hero",
    component: Hero,
  },
  {
    id: "about",
    component: About,
  },

  {
    id: "services",
    component: Services,
  },
  {
    id: "projects",
    component: Projects,
  },
];

const navItems: NavItem[] = [
  { label: "Intro", path: "hero" },
  { label: "About", path: "about" },
  { label: "Services", path: "services" },
  { label: "Projects", path: "projects" },
  { label: "Contact", path: "contact" },
];

export function Main() {
  const [activeLink, setActiveLink] = useState(navItems[0].label);

  const sidebarRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const setInView = (inView: boolean, entry: any) => {
    if (inView) {
      setActiveLink(entry.target.getAttribute("id"));
    }
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <div className="grid grid-cols-12 min-h-screen px-4 md:px-8">
      <Sidebar
        ref={sidebarRef}
        activeLink={activeLink}
        handleScroll={handleScroll}
      />

      <main className="col-span-12 md:col-span-11">
        {sectionInfo.map(({ id, component: SectionComponent }, index) => (
          <InView onChange={setInView} threshold={0.5} key={index}>
            {({ ref: InViewRef }) => {
              return <SectionComponent id={id} ref={InViewRef} />;
            }}
          </InView>
        ))}
      </main>

      <ScrollDownArrow />
    </div>
  );
}
