import { StaticImageData } from "next/image";
import github from "../public/icons/github.svg";
import linkedin from "../public/icons/linkedin.svg";
import twitter from "../public/icons/twitter.svg";
import dribbble from "../public/icons/dribbble.svg";

type Socials = {
  name?: string;
  href: string;
  imgSrc: StaticImageData;
};

export const socialItems: Socials[] = [
  {
    name: "github",
    href: "https://www.github.com/dindustack/",
    imgSrc: github,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/dindustack/",
    imgSrc: linkedin,
  },
  { name: "twitter", href: "https://twitter.com/dindustack", imgSrc: twitter },
  {
    name: "dribbble",
    href: "https://dribbble.com/dindustack",
    imgSrc: dribbble,
  },
];
