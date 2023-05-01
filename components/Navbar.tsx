// import React, { useEffect, useRef } from "react";

// import close from "../icons/close-outline.svg";
// import menu from "../icons/menu-outline.svg";
// import Image from "next/image";
// import gsap from "gsap";

// export default function Navbar() {
//   let resMenu = useRef(null);
//   let resMenuHeader = useRef(null);

//   let resMenuItem1 = useRef(null);
//   let resMenuItem2 = useRef(null);
//   let resMenuItem3 = useRef(null);
//   let resMenuItem4 = useRef(null);

//   const menuCollapse = gsap.timeline({
//     paused: true,
//     reversed: true,
//   });

//   useEffect(() => {
//     menuCollapse.to(resMenu.current, {
//       y: 0,
//       zIndex: 100,
//       duration: 0.2,
//     });
//     menuCollapse.from(
//       [
//         resMenuHeader.current,
//         resMenuItem1.current,
//         resMenuItem2.current,
//         resMenuItem3.current,
//         resMenuItem4.current,
//       ],
//       {
//         duration: 0.5,
//         stagger: {
//           amount: 0.4,
//         },
//         y: -50,
//       }
//     );
//   });

//   function menuOpen() {
//     // comment out
//     menuCollapse.reversed() ? menuCollapse.play() : menuCollapse.reverse();
//   }

//   return (
//     <div>
//       <div
//         ref={resMenu}
//         className="fixed w-full top-0 left-0 overflow-hidden h-screen bg-black"
//       >
//         <div
//           className="flex items-center justify-between w-[100%] h-fit py-[5px]"
//           ref={resMenuHeader}
//         >
//           <div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px]">
//             dindustack
//           </div>
//           <div
//             // onClick={menuOpen}
//             className="block md:hidden cursor-pointer mx-[5px]"
//           >
//             <Image src={close} className="w-9 object-contain invert" alt="" />
//           </div>
//         </div>
//         {/* Desktop view - Navbar */}

//         {/* <div className="mx-2 my-10 space-y-1">
//           <span className="overflow-hidden block">
//             <div
//               ref={resMenuItem1}
//               className="font-neutralFace font-bold text-[30px]"
//             >
//               about
//             </div>
//           </span>
//           <span className="overflow-hidden block">
//             <div
//               ref={resMenuItem2}
//               className="font-neutralFace font-bold text-[30px]"
//             >
//               services
//             </div>
//           </span>
//           <span className="overflow-hidden block">
//             <div
//               ref={resMenuItem3}
//               className="font-neutralFace font-bold text-[30px]"
//             >
//               projects
//             </div>
//           </span>
//           <span className="overflow-hidden block">
//             <div
//               ref={resMenuItem4}
//               className="font-neutralFace font-bold text-[30px]"
//             >
//               contact
//             </div>
//           </span>
//         </div> */}
//       </div>
//       {/* Mobile view - Navbar */}

//       <div className="absolute  bg-black px-[0.75rem] md:px-[2.5rem] top-0 py-[5px] font-monument h-[20vh] flex justify-between w-[100%] flex-col">
//         <div
//           id="header"
//           className="flex items-center justify-between w-[100%] h-fit"
//         >
//           <div className="mx-[5px] mix-blend-difference font-monument font-semibold text-[20px] md:text-[30px]">
//             dindustack
//           </div>
//           <div className="hidden xl:flex">
//             <div className="mx-1 md:block hidden mix-blend-difference font-monument font-bold text-[30px]">
//               about
//             </div>
//             <div className="mx-1 md:block hidden mix-blend-difference font-monument font-bold text-[30px]">
//               services
//             </div>
//             <div className="mx-1 md:block hidden mix-blend-difference font-monument font-bold text-[30px]">
//               projects
//             </div>
//             <div className="mx-1 md:block hidden mix-blend-difference font-monument font-bold text-[30px]">
//               contact
//             </div>
//           </div>
//           <div
//             onClick={menuOpen}
//             className="block md:hidden cursor-pointer mx-[5px]"
//           >
//             <Image alt="" src={menu} className="w-9 object-contain invert" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import close from "../icons/close-outline.svg";
import menu from "../icons/menu-outline.svg";
import Image from "next/image";

// import { FaBars, FaTimes } from 'react-icons/fa';

type NavItem = {
  label: string;
  path: string;
};

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
              onClick={handleClick}
            >
              {isMenuOpen ? (
                <Image src={close} className="w-9 object-contain invert" alt="" />
              ) : (
                <Image src={menu} className="w-9 object-contain invert" alt="" />
              )}
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <Link href="/" legacyBehavior>
                <a className="text-white font-bold text-xl">Logo</a>
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navItems.map(({ label, path }) => (
                  <Link key={path} href={path} legacyBehavior>
                    <a
                      className={`${
                        router.pathname === path
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      } px-3 py-2 rounded-md text-sm font-medium`}
                    >
                      {label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden h-[100vh] overflow-y-hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(({ label, path }) => (
              <Link key={path} href={path} legacyBehavior>
                <a
                  className={`${
                    router.pathname === path
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  } block px-3 py-2 rounded-md text-base font-medium`}
                >
                  {label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

