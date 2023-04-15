import { StaticImageData } from "next/image";
import imageOne  from "../images/image1.jpeg";
import imageTwo  from "../images/image2.jpeg";
import imageThree  from "../images/image3.jpeg";
import imageFour  from "../images/image4.jpeg";

export type Project = {
  id: string;
  projectName: string;
  imgSrc: StaticImageData;
};


export const projects: Project[] = [
  {
    id: "01",
    projectName: "Bridge Uplift",
    imgSrc: imageOne,
  },
  {
    id: "02",
    projectName: "Happy Camper",
    imgSrc: imageTwo,
  },
  {
    id: "03",
    projectName: "Wealthy Smiles",
    imgSrc: imageThree,
  },
  {
    id: "04",
    projectName: "Joyful Degree",
    imgSrc: imageFour,
  },
];
