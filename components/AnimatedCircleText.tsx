import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Image, { StaticImageData } from 'next/image';

type Props = {
  imageSrc: StaticImageData;
  imageAlt: string;
  text: string;
};

const AnimatedCircularText: React.FC<Props> = ({ imageSrc, imageAlt, text }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const textContent = text.split('');
    const radius = 200;
    const angle = (Math.PI * 2) / textContent.length;

    textContent.forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      container?.appendChild(span);

      const x = Math.cos(angle * i) * radius;
      const y = Math.sin(angle * i) * radius;

      gsap.to(span, {
        x,
        y,
        duration: 2,
        ease: 'elastic',
        delay: i * 0.05,
        rotation: 360,
        repeat: -1,
      });
    });
  }, [text]);

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 flex items-center justify-center">
        <Image src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div ref={containerRef} className="text-center">
          {text}
        </div>
      </div>
    </div>
  );
};

export default AnimatedCircularText;
