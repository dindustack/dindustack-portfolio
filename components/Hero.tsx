import React from "react";

export default function Hero() {
  return (
    <div className="relative pt-[15rem] pb-[7.5rem]">
      <div className="py-0 px-[1.3rem] md:px-[2.5rem] md:max-w-[90rem] mx-auto my-0">
        <div className="grid grid-cols-3 gap-4 ">
          <h1 >grid-cols-4</h1>
          <div>grid-cols-4</div>
          <div>grid-cols-4</div>
        </div>
      </div>
    </div>
    // <div className='absolute bottom-0 left-[50%] z-[-1] -translate-x-[50%]'>Hero</div>
  );
}
