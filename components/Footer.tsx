export function Footer() {
  return (
      <div className="bg-[#070707] text-[#FFFEF4] px-8 pb-[2.5rem] relative z-20">
        <div className="hidden lg:flex mb-[1.5rem] justify-center">
          <div className="text-[11.5vmax] mt-[3.75rem] uppercase">
            <span className="font-eastman-extrabold">dindu</span>
            <span className="font-migra-extrabold">stack</span>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-center gap-24 uppercase text-white text-[0.875rem]">
          <div className="font-eastman-bold ">socials</div>
          <a
            href="https://www.github.com/dindustack/"
            className="font-eastman hover:underline"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/in/dindustack/"
            className="font-eastman hover:underline"
          >
            linkedin
          </a>
          <a
            href="https://twitter.com/dindustack"
            className="font-eastman hover:underline"
          >
            twitter
          </a>
          <a
            href="https://dribbble.com/dindustack"
            className="font-eastman hover:underline"
          >
            dribbble
          </a>
        </div>

        <div className="flex flex-col lg:flex-row lg:mt-[4.5rem] items-start lg:items-end justify-between font-eastman-offset text-[0.75rem]
        ">
          <div className="my-5 lg:my-0">
            Made with 💚 in <span className="font-eastman-bold">Nigeria</span>
          </div>
          <div className="uppercase">
            all rights reserved. copyright 2023 — ds
          </div>
        </div>
      </div>
  );
}
