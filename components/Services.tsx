import React from 'react'

export default function Services() {
  return (
    <div className='relative py-[6.25rem] px-0 mx-auto'>
        <div className="max-w-[90rem] px-[0.75rem] md:px-[2.5rem]">
            <div className='pb-[3.75rem]'>
                <h2 className='font-monument normal-case text-[2rem] md:text-[3.58rem] leading-[1.1] -tracking-[0.02rem]'>I can help you with ...</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-[1.25rem]'>
              {/* Design */}
              <div className='before:absolute before:w-[1px] before:h-[100%] before:left-[0] before:top-[0] before:bottom-[0] before:bg-[#e7e7e7] relative pl-[2rem]'>
                <span className='block mb-20 opacity-60 text-[3.58rem] leading-[1.1] tracking-tight'>01</span>
                <h2 className='mb-[0.5rem] text-[1.59rem] leading-none tracking-normal'>Design</h2>
              </div>

              {/* Development */}
              <div className='before:absolute before:w-[1px] before:h-[100%] before:left-[0] before:top-[0] before:bottom-[0] before:bg-[#e7e7e7] relative pl-[2rem]'>
                <span className='block mb-20 opacity-60 text-[3.58rem] leading-[1.1] tracking-tight'>02</span>
                <h2 className='mb-[0.5rem] text-[1.59rem] leading-none tracking-normal'>Web Development</h2>
              </div>
            </div>
        </div>
    </div>
  )
}
