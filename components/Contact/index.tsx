import React from "react";

export default function Contact() {
  return (
    <div className="relative py-[6.25rem] px-0">
      <div className="px-[0.75rem] md:px-[2.5rem] mx-auto 2xl:mx-0">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="flex flex-col justify-center items-start space-y-[3rem]">
            <div>
              <h2 className="text-[3.5rem] font-monument font-bold leading-none tracking-wider">
                Let&apos;s Chat
              </h2>
              <p className="text-base font-migra normal-case leading-[1.5rem]">
                I would love to hear from you about a project, collaboration or
                idea
              </p>
            </div>
            <input
              type="text"
              placeholder="Your Name"
              className="bg-transparent tracking-[0.1rem] text-[#E7E7E7] font-monument border-b border-t-0 border-l-0 border-r-0 border-[#E7E7E7] text-sm leading-[1.5rem] focus:ring-blue-500 focus:border-blue-500 block w-full py-4 px-0 placeholder-[#e7e7e7] focus:outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-transparent text-[#E7E7E7] tracking-[0.1rem] font-monument border-b border-t-0 border-l-0 border-r-0 border-[#E7E7E7] text-sm leading-[1.5rem] focus:ring-blue-500 focus:border-blue-500 block w-full py-4 px-0 placeholder-[#e7e7e7] focus:outline-none"
            />

            <textarea
              placeholder="Your Message"
              className="bg-transparent text-[#E7E7E7] tracking-[0.1rem] font-monument border-b border-t-0 border-l-0 border-r-0 border-[#E7E7E7] text-sm leading-[1.5rem] focus:ring-blue-500 focus:border-blue-500 block w-full pt-[1.5rem] pb-[5rem] px-0 placeholder-[#e7e7e7] focus:outline-none"
            ></textarea>
          </div>

          <div>
            <p>able</p>
          </div>
        </div>
      </div>
    </div>
  );
}
