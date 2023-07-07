import { StaticImageData } from "next/image";
import next from "../public/icons/next.svg";
import react from "../public/icons/react.svg";
import graphql from "../public/icons/graphql.svg";
import typescript from "../public/icons/typescript.svg";
import reactQuery from "../public/icons/react-query.svg";
import tailwind from "../public/icons/tailwind.svg";
import storybook from "../public/icons/storybook.svg";
import figma from "../public/icons/figma.svg";

type Tools = {
  name: string;
  imgSrc: StaticImageData;
};

export const toolItems: Tools[] = [
  {
    name: "Figma",
    imgSrc: figma,
  },
  {
    name: "React",
    imgSrc: react,
  },
  {
    name: "GraphQL",
    imgSrc: graphql,
  },
  {
    name: "NEXT",
    imgSrc: next,
  },
  {
    name: "React Query",
    imgSrc: reactQuery,
  },
  {
    name: "Storybook",
    imgSrc: storybook,
  },
  {
    name: "Tailwind",
    imgSrc: tailwind,
  },
  {
    name: "TypeScript",
    imgSrc: typescript,
  },
];
