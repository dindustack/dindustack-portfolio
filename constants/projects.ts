import { StaticImageData } from "next/image";
import imageOne from "../public/images/image1.png";
import imageSix from "../public/images/quin.png";
import imageTwo from "../public/images/folo.png";
import imageThree from "../public/images/mojola.png";
import image8 from "../public/images/tcnjesutedo.webp";
import image9 from "../public/images/modupesf.webp";
import image10 from "../public/images/funnerd-tutors.webp";
import image11 from "../public/images/avana-energy.webp";

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
    projectName: "Funnerd Tutors",
    imgSrc: image10,
    content:
      "English and STEM subjects tutoring business website made with React, Typescript, Tailwind, Framer Motion, Next & Prismic",
    url: "https://funnerd-tutors.netlify.app/",
  },
  {
    id: "02 -",
    projectName: "Avana Energy",
    imgSrc: image11,
    content:
      "Sustainable energy company website made with React, Typescript, Tailwind, Framer Motion, Next & Prismic",
    url: "https://avana-website.vercel.app/",
  },
  {
    id: "03 -",
    projectName: "Modupe Sapiential Foundation",
    imgSrc: image9,
    content:
      "Non-profit organization website made with React, Typescript, Tailwind, Framer Motion, Next & Prismic",
    url: "https://www.modupesf.org/",
  },
  {
    id: "04 -",
    projectName: "TCN Jesutedo",
    imgSrc: image8,
    content:
      "Religious organization website made with React, Typescript, Tailwind, Framer Motion, Next & Prismic",
    url: "https://www.tcnjesutedo.org/",
  },
  {
    id: "05 -",
    projectName: "Mojolaoluwa Olunaike",
    imgSrc: imageThree,
    content:
      "Public health professional portfolio landing page using React, Typescript, Framer Motion, Next, Prismic & Tailwind",
    url: "https://www.mojolaoluwaolunaike.com/",
  },
  {
    id: "06 -",
    projectName: "Folorunso Dideolu",
    imgSrc: imageTwo,
    content:
      "Pastel Artist portfolio using React, Typescript, Prismic & Tailwind",
    url: "https://www.folorunsodideolu.com/",
  },
  {
    id: "07 -",
    projectName: "Capital Cruise",
    imgSrc: imageOne,
    content:
      "Construction agency website made with React, Typescript, Tailwind, Next & Prismic",
    url: "https://www.capitalcruiseng.com/",
  },
  {
    id: "08 -",
    projectName: "Quintessence Homes",
    imgSrc: imageSix,
    content:
      "Real estate developer website made with React, Typescript, Tailwind, Next & Prismic",
    url: "https://www.quintessencehomes.com/",
  },
];
