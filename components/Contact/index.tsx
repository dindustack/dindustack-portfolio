import { DevTool } from "@hookform/devtools";
import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState

  console.log("skip", errors.name)

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  };

  return (
    <div className="relative py-[6.25rem] px-0">
      <div className="px-[0.75rem] md:px-[2.5rem] mx-auto 2xl:mx-0">
        <div className="grid grid-cols-1 xl:grid-cols-2">
          <div className="flex flex-col justify-center items-start space-y-[3rem]">
            <div className="space-y-4 md:space-y-2">
              <h2 className="text-[3rem] md:text-[3.5rem] font-monument font-bold leading-none tracking-wider">
                Let&apos;s Chat
              </h2>
              <p className="text-xl font-migra normal-case leading-[1.5rem]">
                I would love to hear from you about a project, collaboration or
                idea
              </p>
            </div>
            <form
              className="space-y-[3rem]"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="bg-transparent tracking-[0.1rem] text-[#E7E7E7] font-monument border-b border-t-0 border-l-0 border-r-0 border-[#E7E7E7] text-sm leading-[1.5rem] focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-0 placeholder-[#e7e7e7] focus:outline-none"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  }
                })}
              />

              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="bg-transparent text-[#E7E7E7] tracking-[0.1rem] font-monument border-b border-t-0 border-l-0 border-r-0 border-[#E7E7E7] text-sm leading-[1.5rem] focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-0 placeholder-[#e7e7e7] focus:outline-none"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                })}
              />

              <textarea
                placeholder="Your Message"
                id="message"
                className="bg-transparent text-[#E7E7E7] tracking-[0.1rem] font-monument border-b border-t-0 border-l-0 border-r-0 border-[#E7E7E7] text-sm leading-[1.5rem] focus:ring-blue-500 focus:border-blue-500 w-full pt-[1.5rem] pb-[5rem] px-0 placeholder-[#e7e7e7] focus:outline-none"
                {...register("message")}
              ></textarea>

              <button className="px-[1.2rem] py-[1.75rem] w-[17rem] border-[#E7E7E7] rounded-[4rem]">
                Send me a message
              </button>
            </form>
            <DevTool control={control} />
          </div>

          <div className="flex justify-center items-center"></div>
        </div>
      </div>
    </div>
  );
};
