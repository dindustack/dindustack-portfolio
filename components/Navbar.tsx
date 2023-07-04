import { useEffect, useState } from "react";
import Image from "next/image";
import navbarLogo from "../public/icons/dindustack-navbar-header.svg";
import menu from "../public/icons/menu-fill.svg";
import close from "../public/icons/close-fill.svg";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling when the menu is closed
    }

    return () => {
      document.body.style.overflow = "auto"; // Revert to default scrolling when the component is unmounted
    };
  }, [isMenuOpen]);
  return (
    <nav className="w-full relative z-50 font-neue-ultrabold uppercase">
      <div className="pt-8 px-4 md:px-8">
        <div className="flex justify-between">
          <Image src={navbarLogo} alt="Dindustack Logo" />
          <div
            className="flex lg:hidden justify-center items-center w-[2.875rem] h-[2.875rem] bg-gray-900 rounded-[1.4375rem] navbar-icon-shadow"
            onClick={handleClick}
          >
            {isMenuOpen ? (
              <Image src={close} alt="close icon" />
            ) : (
              <Image src={menu} alt="menu icon" />
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden absolute left-0 top-[6rem] my-auto h-screen w-[100%] bg-[#FFFEF4] z-[9999] overflow-hidden">
          <div className="px-[0.75rem] py-[5rem] text-center space-y-16">
            <div>call</div>
          </div>
        </div>
      )}
    </nav>
  );
};
