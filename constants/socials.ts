import { StaticImageData } from "next/image";
import github from "../public/icons/github.svg";
import x from "../public/icons/x.svg";
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
  { name: "x", href: "https://twitter.com/dindustack", imgSrc: x },
  {
    name: "dribbble",
    href: "https://dribbble.com/dindustack",
    imgSrc: dribbble,
  },
];
