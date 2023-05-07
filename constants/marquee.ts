import { StaticImageData } from "next/image";
import star from "../public/images/star.svg"

export type MarqueeProps = {
  firstWord: string;
  secondWord: string;
  imgSrc: StaticImageData;
};


export const marqueeContent: MarqueeProps[] = [
  {
    firstWord: "frontend",
    secondWord: "engineer",
    imgSrc: star,
  },
  {
    firstWord: "product",
    secondWord: "designer",
    imgSrc: star,
  },
  {
    firstWord: "technical",
    secondWord: "writer",
    imgSrc: star,
  },
];
