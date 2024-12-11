import { StaticImageData } from "next/image";
import imageOne from "../public/images/image1.png";
import imageSix from "../public/images/quin.png";
import imageTwo from "../public/images/folo.png";
import imageThree from "../public/images/mojola.png";
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
    projectName: "Mojolaoluwa Olunaike",
    imgSrc: imageThree,
    content:
      "Public health professional portfolio landing page using React, Typescript, Framer Motion, Prismic & Tailwind",
    url: "https://www.mojolaoluwaolunaike.com/",
  },
  {
    id: "04 -",
    projectName: "Folorunso Dideolu",
    imgSrc: imageTwo,
    content:
      "Pastel Artist portfolio using React, Typescript, Prismic & Tailwind",
    url: "https://folorunsodideolu.com/",
  },

  {
    id: "05 -",
    projectName: "Formify",
    imgSrc: imageFive,
    content:
      "Form builder using React, Typescript , Dnd-Kit, PostgreSQL, Prisma & Tailwind",
    url: "https://formify-lake.vercel.app/",
  },
];
