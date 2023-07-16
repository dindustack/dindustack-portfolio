import React, { useRef } from "react";
import { Power2, gsap } from "gsap";
import arrowLink from "../../public/icons/arrow-link.svg";
import Image from "next/image";

type ProjectItemProps = {
	serialNumber: string;
	projectName: string;
	content: string;
	index: number;
	onEnter: (index: number) => void;
	onMove: (data: { x: number; y: number; index: number }) => void;
};

export default function ProjectItem({
	index,
	serialNumber,
	projectName,
	content,
	onEnter,
	onMove,
}: ProjectItemProps) {
	const textRef = useRef() as React.MutableRefObject<HTMLAnchorElement>;

	const handleEnter = () => {
		onEnter(index);
		gsap.killTweensOf(textRef.current);

		gsap.to(textRef.current, {
			// paddingLeft: "9rem",
			duration: 0.335,
			ease: Power2.easeInOut,
		});
	};

	const handleLeave = () => {
		gsap.killTweensOf(textRef.current);

		gsap.to(textRef.current, {
			// paddingLeft: 0,
			duration: 0.335,
			ease: Power2.easeInOut,
		});
	};

	const handleMove = (event: { clientY: number; clientX: number }) => {
		const { left, top, width, height } =
			textRef.current.getBoundingClientRect();

		const progressionY = (1 / height) * (event.clientY - top);
		const progressionX = (1 / width) * (event.clientX - left);

		const x = gsap.utils.interpolate(-1, 1, progressionX);
		const y = gsap.utils.interpolate(-1, 1, progressionY);

		onMove({ x, y, index });
	};

	return (
		<div>
			<a
				href="#"
				ref={textRef}
				className="relative flex py-[1.5rem] md:py-[2.5rem] cursor-pointer border-b border-gray-300 w-[100%] border-t z-20"
				onMouseEnter={handleEnter}
				onMouseLeave={handleLeave}
				onMouseMove={handleMove}
			>
				<div className="flex flex-col lg:flex-row items-start gap-y-2 md:gap-y-8 lg:gap-x-4">
					<span className="font-eastman text-gray-300 text-[1.125rem] translate-y-[0.4rem] md:translate-y-3">
						{serialNumber}
					</span>
					<p className="font-eastman lg:font-eastman-offset text-[1.75rem] md:text-[4rem] text-gray-900 leading-[40px] normal-case pointer-events-none">
						{projectName}
					</p>

					<span className="block lg:hidden font-eastman text-gray-500 text-[0.875rem] leading-[1.25rem]">
						{content}
					</span>
				</div>

				<div className="block lg:hidden absolute top-8 right-4">
					<Image src={arrowLink} alt="arrow link" />
				</div>
			</a>
		</div>
	);
}
