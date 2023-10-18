import { StaticImageData } from "next/image";
import imageOne from "../public/images/image1.png";
import imageTwo from "../public/images/image2.png";
import imageThree from "../public/images/image3.png";
// import imageFour from "../public/images/image4.jpeg";

export type Project = {
  id: string;
  projectName: string;
  imgSrc: StaticImageData;
  content: string;
  url: string;
};

export const projects: Project[] = [
  {
    id: "01 -",
    projectName: "Twitter Clone",
    imgSrc: imageOne,
    content:
      "Twitter clone with React, Tailwind, Next, Prisma, Mongo, NextAuth & Vercel",
    url: "https://twitter-clone-gamma-three-44.vercel.app/",
  },
  {
    id: "02 -",
    projectName: "Venuefy",
    imgSrc: imageTwo,
    content:
      "Venue booking platform built with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth",
    url: "https://venuefy.vercel.app/",
  },
  {
    id: "03 -",
    projectName: "Scroll Magic",
    imgSrc: imageThree,
    content: "Scroll animation using Vite and GSAP",
    url: "https://scroll-magic-nine.vercel.app/",
  },
  // {
  //   id: "03 -",
  //   projectName: "Wealthy Smiles",
  //   imgSrc: imageThree,
  //   content:
  //     "Build responsive websites using modern tools; and optimise for speed and performance.",
  // },
  // {
  //   id: "04 -",
  //   projectName: "Joyful Degree",
  //   imgSrc: imageFour,
  //   content:
  //     "Build responsive websites using modern tools; and optimise for speed and performance.",
  // },
];
