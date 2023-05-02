import React from "react";
import Marquee from "react-fast-marquee";

export function MarqueeSection() {
  return (
    <div className="pt-8 pb-8">
      <Marquee
        gradient={false}
        speed={100}
        className="relative flex w-full font-migra border-white border-t border-b"
      >
        <div className="py-8">
          <span className="text-base leading-none mx-4">Frontend engineer</span>
          <span className="text-base leading-none mx-4">•</span>
          <span className="text-base leading-none mx-4">technical writer</span>
          <span className="text-base leading-none mx-4">•</span>
          <span className="text-base leading-none mx-4">designer</span>
          <span className="text-base leading-none mx-4">•</span>
          <span className="text-base leading-none mx-4">Frontend engineer</span>
          <span className="text-base leading-none mx-4">•</span>
          <span className="text-base leading-none mx-4">technical writer</span>
          <span className="text-base leading-none mx-4">•</span>
          <span className="text-base leading-none mx-4">designer</span>
          <span className="text-base leading-none mx-4">•</span>
        </div>

        <div className="py-8">
          <span className="text-base leading-none mx-4">Frontend engineer</span>
          <span className="text-base leading-none mx-4">•</span>
          <span className="text-base leading-none mx-4">technical writer</span>
          <span className="text-base leading-none mx-4">•</span>
          <span className="text-base leading-none mx-4">designer</span>
          <span className="text-base leading-none mx-4">•</span>
          <span className="text-base leading-none mx-4">Frontend engineer</span>
          <span className="text-base leading-none mx-4">•</span>
          <span className="text-base leading-none mx-4">technical writer</span>
          <span className="text-base leading-none mx-4">•</span>
          <span className="text-base leading-none mx-4">designer</span>
          <span className="text-base leading-none mx-4">•</span>
        </div>
      </Marquee>
    </div>
  );
}
