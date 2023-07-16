import React from "react";
import Image from "next/image";
import footerLogo from "../public/icons/dindustack-footer-logo.svg";
import footerMobileLogo from "../public/icons/dindustack-footer-mobile.svg";
import { socialItems } from "@/constants/socials";

export function Footer() {
	return (
		<div
			className="bg-[#070707] rounded-t-[3.75rem] md:rounded-none text-[#FFFEF4] px-8 pt-[3.75rem] pb-8 md:pb-[2.5rem] relative z-[9900] overflow-hidden"
			data-scroll-section
			id="contact"
		>
			<div className="flex justify-center mb-11 md:my-[3.75rem]">
				<div className="hidden md:flex">
					<Image src={footerLogo} alt="Dindustack Logo" />
				</div>

				{/* mobile view logo */}
				<div className="flex md:hidden">
					<Image src={footerMobileLogo} alt="Dindustack Logo" />
				</div>
			</div>

			{/* Large screens */}
			<div className="hidden md:flex flex-row items-center justify-center gap-24 uppercase text-white text-[0.875rem]">
				<div className="font-eastman-bold hidden md:flex">socials</div>
				{React.Children.toArray(
					socialItems.map((item) => (
						<a
							href={item.href}
							className="font-eastman hover:underline"
							target="_blank"
						>
							{item.name}
						</a>
					))
				)}
			</div>

			{/* Small screens */}
			<div className="flex md:hidden flex-row items-center justify-center gap-12 uppercase text-white text-[0.875rem] ">
				{React.Children.toArray(
					socialItems.map((item) => (
						<a href={item.href} target="_blank">
							<Image
								src={item.imgSrc}
								alt={`Chinwendu Agbaetuo - ${item.name}`}
							/>
						</a>
					))
				)}
			</div>

			<div className="flex flex-col-reverse lg:flex-row mt-12 md:mt-16 items-center md:justify-between font-eastman-offset text-[0.75rem]">
				<div className="mt-8 lg:my-0">
					Made with 💚 in <span className="font-eastman-bold">Nigeria</span>
				</div>
				<div className="uppercase">
					all rights reserved. copyright 2023 — ds
				</div>
			</div>
		</div>
	);
}
