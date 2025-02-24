import { StaticImageData } from "next/image";
import imageOne from "../public/images/image1.png";
import imageSix from "../public/images/quin.png";
import imageTwo from "../public/images/folo.png";
import imageThree from "../public/images/mojola.png";
import imageFive from "../public/images/formify.png";
import image7 from "../public/images/image2.png";
import image8 from "../public/images/tcnjesutedo.webp";
import image9 from "../public/images/modupesf.webp";

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
    projectName: "Modupe Sapiential Foundation",
    imgSrc: image9,
    content:
      "Non-profit organization website made with React, Typescript, Tailwind, Framer Motion, Next & Prismic",
    url: "https://www.modupesf.org/",
  },
  {
    id: "02 -",
    projectName: "TCN Jesutedo",
    imgSrc: image8,
    content:
      "Religious organization website made with React, Typescript, Tailwind, Framer Motion, Next & Prismic",
    url: "https://www.tcnjesutedo.org/",
  },
  {
    id: "03 -",
    projectName: "Mojolaoluwa Olunaike",
    imgSrc: imageThree,
    content:
      "Public health professional portfolio landing page using React, Typescript, Framer Motion, Next, Prismic & Tailwind",
    url: "https://www.mojolaoluwaolunaike.com/",
  },
  {
    id: "04 -",
    projectName: "Folorunso Dideolu",
    imgSrc: imageTwo,
    content:
      "Pastel Artist portfolio using React, Typescript, Prismic & Tailwind",
    url: "https://www.folorunsodideolu.com/",
  },
  {
    id: "05 -",
    projectName: "Capital Cruise",
    imgSrc: imageOne,
    content:
      "Construction agency website made with React, Typescript, Tailwind, Next & Prismic",
    url: "https://www.capitalcruiseng.com/",
  },
  {
    id: "06 -",
    projectName: "Quintessence Homes",
    imgSrc: imageSix,
    content:
      "Real estate developer website made with React, Typescript, Tailwind, Next & Prismic",
    url: "https://www.quintessencehomes.com/",
  },
  {
    id: "07 -",
    projectName: "Formify",
    imgSrc: imageFive,
    content:
      "Form builder using React, Typescript , Dnd-Kit, PostgreSQL, Prisma & Tailwind",
    url: "https://formify-lake.vercel.app/",
  },
  {
    id: "08 -",
    projectName: "Venuefy",
    imgSrc: image7,
    content:
      "Venue booking web app using React, Typescript, Prisma, MongoDB, NextAuth & Tailwind",
    url: "https://venuefy.vercel.app/",
  },
];
