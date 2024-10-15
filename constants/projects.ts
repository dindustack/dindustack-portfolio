import { StaticImageData } from "next/image";
import imageOne from "../public/images/image1.png";
import imageSix from "../public/images/quin.png";
import imageTwo from "../public/images/image2.png";
import imageThree from "../public/images/image3.png";
import imageFour from "../public/images/image4.png";
import imageFive from "../public/images/formify.png";

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
    projectName: "Capital Cruise",
    imgSrc: imageOne,
    content:
      "Construction agency website made with React, Typescript, Tailwind, Next & Prismic",
    url: "https://www.capitalcruiseng.com/",
  },
  {
    id: "02 -",
    projectName: "Quintessence Homes",
    imgSrc: imageSix,
    content:
      "Real estate developer website made with React, Typescript, Tailwind, Next & Prismic",
    url: "https://www.quintessencehomes.com/",
  },
  {
    id: "03 -",
    projectName: "Formify",
    imgSrc: imageFive,
    content:
      "Form builder using React, Typescript , Dnd-Kit, PostgreSQL, Prisma & Tailwind",
    url: "https://formify-lake.vercel.app/",
  },
  {
    id: "04 -",
    projectName: "Venuefy",
    imgSrc: imageTwo,
    content:
      "Venue booking platform built with Next.js 13 App Router: React, Tailwind, Prisma, MongoDB, NextAuth",
    url: "https://venuefy.vercel.app/",
  },
  {
    id: "05 -",
    projectName: "Scroll Magic",
    imgSrc: imageThree,
    content: "Scroll animation using Vite and GSAP",
    url: "https://scroll-magic-nine.vercel.app/",
  },
  {
    id: "06 -",
    projectName: "Flexilist",
    imgSrc: imageFour,
    content:
      "Task board built with React, Typescript, Dnd-Kit, Prisma & Tailwind",
    url: "https://flexilist.vercel.app/",
  },
];
