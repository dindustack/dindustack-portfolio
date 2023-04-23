import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image, { StaticImageData } from 'next/image';

interface RotatingCircularTextProps {
  text: string;
  radius: number;
  speed: number;
  imageSrc: StaticImageData;
}

const RotatingCircularText: React.FC<RotatingCircularTextProps> = ({ text, radius, speed, imageSrc }) => {
  const textRef = useRef<SVGSVGElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    const text = textRef.current;

    if (image && text) {
      const letters = Array.from(text.children);
      const totalLetters = letters.length;
      const slice = (2 * Math.PI) / totalLetters;

      letters.forEach((letter, index) => {
        const x = radius * Math.cos(slice * index);
        const y = radius * Math.sin(slice * index);
        const rotation = -((360 / totalLetters) * index);

        gsap.set(`#letter-${index}`, {
          x,
          y,
          rotation,
          transformOrigin: 'center center',
        });

        gsap.to(`#letter-${index}`, {
          duration: speed,
          rotation: rotation - 360,
          repeat: -1,
          ease: 'none',
        });
      });
    }
  }, [text, radius, speed]);

  return (
    <div style={{ position: 'relative' }}>
      <Image ref={imageRef} src={imageSrc} alt="Rotating Image" className="w-[4rem] h-[4rem] rounded-[50%] max-w-[100%] object-fill" />
      <svg ref={textRef} viewBox={`-${radius + 10} -${radius + 10} ${2 * (radius + 10)} ${2 * (radius + 10)}`}>
        {Array.from(text).map((letter, index) => (
          <text key={index} id={`letter-${index}`} x="0" y="0" className="text-white text-3xl font-bold tracking-wider">
            {letter}
          </text>
        ))}
      </svg>
    </div>
  );
};

export default RotatingCircularText;
