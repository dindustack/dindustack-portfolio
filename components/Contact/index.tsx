import { DevTool } from "@hookform/devtools";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

export const Contact = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit, reset, formState, trigger } = form;
  const { errors, isDirty, isValid, isSubmitting, isSubmitSuccessful } = formState;


  async function onSubmit(data: FormValues) {
    const response = await fetch('https://formsubmit.co/8478e357829ce9d5a95c6a6a1288ab7c', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (response.ok) {
      console.log('Form submitted successfully!');
    } else {
      console.error('Form submission failed:', response.statusText);
    }
  }

  

  useEffect(() => {
    if(isSubmitSuccessful) {
      reset();
    }

  }, [isSubmitSuccessful, reset]);

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
              target="_blank"
              className="space-y-[3rem]"
              onSubmit={handleSubmit(onSubmit)}
              // onSubmit={onSubmit}
              method="POST"
              action="https://formsubmit.co/8478e357829ce9d5a95c6a6a1288ab7c"
              noValidate
            >
              <div className="inline-block w-full">
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className={`bg-transparent  tracking-[0.1rem] text-[#E7E7E7] font-monument border-b border-t-0 border-l-0 border-r-0 border-[#E7E7E7] ${
                    errors.name !== undefined
                      ? "border-red-600"
                      : "border-[#E7E7E7]"
                  } text-sm leading-[1.5rem] focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-0 placeholder-[#e7e7e7] focus:outline-none`}
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is required",
                    },
                  })}
                />
                <p className="normal-case text-red-600 mt-[0.8rem]">
                  {errors.name?.message}
                </p> 
              </div> 

              <div className="inline-block w-full">
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className={`bg-transparent text-[#E7E7E7] tracking-[0.1rem] font-monument border-b border-t-0 border-l-0 border-r-0 border-[#E7E7E7] ${
                    errors.email !== undefined
                      ? "border-red-600"
                      : "border-[#E7E7E7]"
                  } text-sm leading-[1.5rem] focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-0 placeholder-[#e7e7e7] focus:outline-none`}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email format",
                    },
                    validate: {
                      notBlacklisted: (value) => {
                        const blacklistedEmails = [
                          "baddomain.com",
                          "example.com",
                        ];
                        return (
                          !blacklistedEmails.includes(value) ||
                          "This domain is not supported"
                        );
                      },
                    },
                  })}
                />
                <p className="normal-case text-red-600 mt-[0.8rem]">
                  {errors.email?.message}
                </p> 
              </div> 
                

              <div className="inline-block w-full">
                <textarea
                  placeholder={`${errors?.message ? errors?.message?.message : "Your Message" }`}
                  id="message"
                  rows={4}
                  cols={50}
                  className={`bg-transparent text-[#E7E7E7] tracking-[0.1rem] font-monument border-b  border-[#E7E7E7] ${
                    errors.message !== undefined
                      ? "border-b-red-600"
                      : "border-[#E7E7E7]"
                  } text-sm leading-[1.5rem] focus:ring-blue-500 focus:border-blue-500 w-full pt-[1.5rem] pb-[5rem] px-0 placeholder-[#e7e7e7] focus:outline-none`}
                  {...register("message", {
                    required: "Message is required",
                    maxLength: {
                      value: 2000,
                      message: "Message cannot exceed 2000 characters",
                    },
                  })}
                ></textarea>
                <p className="normal-case text-red-600 mt-[0.8rem]">
                  {errors.message?.message}
                </p> 
              </div> 
                

              <button type="submit" disabled={!isDirty || !isValid || isSubmitting} className="px-[1.2rem] py-[1.75rem] w-[17rem] border-[#E7E7E7] border-[1px] cursor-pointer rounded-[4rem] bg-transparent hover:bg-[#E7E7E7] hover:text-black transition duration-500">
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
