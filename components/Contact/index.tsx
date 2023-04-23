import React from "react";
// import contactPhoto from "../../images/Chinwendu Agbaetuo_contact.jpeg";
import Image from "next/image";
import RotatingCircularText from "../RotatingCircularText";

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

            <button className="px-[1.2rem] py-[1.75rem]">
              Send me a message
            </button>
          </div>

          <div className="flex justify-center items-center">
            {/* <RotatingCircularText text="Hello World!" radius={30} speed={5} imageSrc={contactPhoto} /> */}
            {/* <div className="relative">
              <Image
                className="w-[29rem] h-[29rem] rounded-[50%] max-w-[100%] object-fill"
                src={contactPhoto}
                alt="Chinwendu Agbaetuo"
              />
              <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
