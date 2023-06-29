export const Navbar: React.FC = () => {
  return (
    <nav className="w-full relative z-50 font-neue-ultrabold uppercase">
      <div className="pt-8 pl-8">
        <div className="flex justify-between">
          <div className="max-w-[6.625rem] flex flex-col text-center before:block before:absolute before:-inset-y-2 before:-inset-x-2 before:-rotate-[174deg] before:rounded-[2px] before:flex-shrink-0 before:w-[6.75rem] before:h-[1.8rem] before:bg-[#F9C200] relative mb-0">
            <span className="relative inline-block text-black text-[1.2rem] font-[800] leading-[0] tracking-[4.2px] mb-1">
              dindu
            </span>
            <span className="before:block mt-0 before:absolute  before:-rotate-[7deg]  before:rounded-[15px] before:flex-shrink-0 before:w-[6.75rem] before:h-[1.1rem] before:bg-gray-900 before:border-2 before:border-[#000] relative inline-block">
              <span className="relative inline-block text-[#FFFEF4] text-[1.2rem] leading-[0] tracking-[4.2px]">
                stack
              </span>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
