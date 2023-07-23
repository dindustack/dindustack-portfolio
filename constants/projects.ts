import { StaticImageData } from "next/image";
import imageOne from "../public/images/image1.jpeg";
import imageTwo from "../public/images/image2.jpeg";
import imageThree from "../public/images/image3.jpeg";
import imageFour from "../public/images/image4.jpeg";

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
    url: "https://twitter-clone-kuc7ayq5x-dindustack.vercel.app/",
  },
  // {
  //   id: "02 -",
  //   projectName: "Happy Camper",
  //   imgSrc: imageTwo,
  //   content:
  //     "Build responsive websites using modern tools; and optimise for speed and performance.",
  // },
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
