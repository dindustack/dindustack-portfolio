import React from "react";

export default function About() {
  return (
    <div className="relative flex justify-between items-start px-[0.75rem] md:px-[2.5rem] h-[80vh]  md:h-[100vh] font-monument w-[100%] py-[6.25rem]">
      <div className="text-base md:text-5xl  normal-case space-y-8">
        <p className="indent-8 about-text leading-loose md:leading-[4.5rem] font-bold">
          As a frontend developer I create engaging and intuitive web
          applications that deliver a great user experience across all devices
          and platforms.
        </p>
        
        <p className="about-text">
          I am proficient in:
        </p>
        <p className="about-text">React</p>
        <p className="about-text">TypeScript</p>
        <p className="about-text indent-[10vw]">Next.js</p>
        <p className="about-text">React-Query</p>
        <p className="about-text indent-[10vw]">GraqhQL</p>
        <p className="about-text">TailwindCSS</p>
        <p className="about-text">Storybook</p>
      </div>
    </div>
  );
}
