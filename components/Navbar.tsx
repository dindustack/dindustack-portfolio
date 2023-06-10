export const Navbar: React.FC = () => {
  return (
    <nav className="w-full relative z-50 bg-[#FFFEF4]">
      <div className="pt-8 pl-8">
        <div className="max-w-[6.875rem] text-center">
          <span className="inline-block  ml-2 uppercase font-eastman-bold text-gray-900 text-[1.3125rem] leading-[0] tracking-[0.28em]">
            dindu
          </span>
          <br />
          <span className="bg-gray-900 pl-[0.375rem] pt-[0.25rem] pb-[0.0625rem] text-[#FFFEF4] inline-block uppercase font-eastman-offset text-[1.3125rem] leading-[1.3rem] tracking-[0.28em]">
            stack
          </span>
        </div>
      </div>
    </nav>
  );
};
