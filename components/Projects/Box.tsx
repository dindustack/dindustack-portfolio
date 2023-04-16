import { useRafFn } from "@/constants/animation";
import { gsap, Power2 } from "gsap";
import Image from "next/image";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Project } from "@/constants/projects";
import { mapRange } from "gsap/all";

type ProjectBoxProps = {
  activeIndex: number;
  projectImages: Project[];
  offsets: any;
};

export const ProjectBox = forwardRef(function ProjectBox(
  props: ProjectBoxProps,
  ref
) {
  const { activeIndex, projectImages, offsets } = props;
  /**
   * State
   */
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [wavyPosition, setWavyPosition] = useState({
    positionX: 0,
    positionY: 0,
  });
  const [previousX, setPreviousX] = useState(0);
  let [rotation, setRotation] = useState(0);

  /**
   * Refs
   */
  const boxRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const elRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const imagesRef = useRef([]) as React.MutableRefObject<HTMLDivElement[]>;

  /**
   * Effects
   */
  useEffect(() => {
    const onMouseMove = (event: any) => {
      const { clientX, clientY } = event;
      const mouseX = clientX;
      const mouseY = clientY;

      setPosition({ x: mouseX, y: mouseY });
    };
    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  const rafFn = useRafFn(() => {
    setWavyPosition({
      positionX: gsap.utils.interpolate(
        wavyPosition.positionX,
        position.x,
        0.08
      ),
      positionY: gsap.utils.interpolate(
        wavyPosition.positionY,
        position.y,
        0.08
      ),
    });

    const distance = gsap.utils.clamp(0, 100, Math.abs(previousX - position.x));
    setRotation(
      gsap.utils.interpolate(
        rotation,
        gsap.utils.mapRange(0, 100, 0, previousX - position.x < 0 ? 45 : -45, distance),
        0.08
      )
    );

    gsap.set(boxRef.current, {
      rotation,
    });

    setPreviousX(position.x);
  });

  useEffect(() => {
    // Call rafFn to start the animation
    rafFn();
  }, [rafFn]);

  useEffect(() => {
    if (activeIndex !== null) {
      gsap.to(imagesRef.current[activeIndex], {
        opacity: 1,
        duration: 0.445,
        ease: Power2.easeInOut,
      });
    }

    return () => {
      if (activeIndex !== null) {
        gsap.to(imagesRef.current[activeIndex], {
          opacity: 0,
          duration: 0.445,
          ease: Power2.easeInOut,
        });
      }
    };
  }, [activeIndex]);

  const animateIn = () => {
    gsap.killTweensOf(elRef.current);

    gsap.to(elRef.current, {
      clipPath: `inset(0% 0% 0% 0%)`,
      duration: 0.455,
      ease: Power2.easeInOut,
    });
  };

  const animateOut = () => {
    gsap.killTweensOf(elRef.current);

    gsap.to(elRef.current, {
      clipPath: `inset(0% 0% 100% 0%)`,
      duration: 0.455,
      ease: Power2.easeInOut,
    });
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        animateIn,
        animateOut,
      };
    },
    []
  );

  return (
    <div
      ref={boxRef}
      className="w-[30vw] h-[18vw] fixed top-0 left-0  z-10  -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden"
      style={{
        top: `${wavyPosition.positionY}px`,
        left: `${wavyPosition.positionX}px`,
      }}
    >
      <div
        ref={elRef}
        className="w-full h-full relative"
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        {React.Children.toArray(
          projectImages.map((image, index) => (
            <div
              className="w-full h-full absolute top-0 left-0 opacity-0"
              ref={(el) => (imagesRef.current[index] = el)}
              style={{
                transform: `translateX(${12.5 * offsets[index]?.x || 0}%) 
                translateY(${12.5 * offsets[index]?.y || 0}%) scale(1.25)
                `,
              }}
            >
              <Image
                alt=""
                src={image.imgSrc}
                className="w-full h-full object-cover"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
});
