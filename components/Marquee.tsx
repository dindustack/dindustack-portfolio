import React from "react";
import Marquee from "react-fast-marquee";

export default function MarqueeSection() {
  return (
    <div className="pt-8 pb-8">
      <Marquee
        gradient={false}
        speed={100}
        pauseOnHover={true}
        className="relative flex w-full border-white border-t border-b"
      >
        <div className="py-8">
          <span className="text-base leading-none mx-4">Frontend engineer</span>
          <span className="text-base leading-none mx-4">•</span>
          <span className="text-base leading-none mx-4">ui engineer</span>
          <span className="text-base leading-none mx-4">•</span>
          <span className="text-base leading-none mx-4">designer</span>
          <span className="text-base leading-none mx-4">•</span>
          <span className="text-base leading-none mx-4">Frontend engineer</span>
          <span className="text-base leading-none mx-4">•</span>
          <span className="text-base leading-none mx-4">ui engineer</span>
          <span className="text-base leading-none mx-4">•</span>
          <span className="text-base leading-none mx-4">designer</span>
          <span className="text-base leading-none mx-4">•</span>
        </div>

        <div className="py-8">
          <span className="text-base leading-none mx-4">Frontend engineer</span>
          <span className="text-base leading-none mx-4">•</span>
          <span className="text-base leading-none mx-4">ui engineer</span>
          <span className="text-base leading-none mx-4">•</span>
          <span className="text-base leading-none mx-4">designer</span>
          <span className="text-base leading-none mx-4">•</span>
          <span className="text-base leading-none mx-4">Frontend engineer</span>
          <span className="text-base leading-none mx-4">•</span>
          <span className="text-base leading-none mx-4">ui engineer</span>
          <span className="text-base leading-none mx-4">•</span>
          <span className="text-base leading-none mx-4">designer</span>
          <span className="text-base leading-none mx-4">•</span>
        </div>
      </Marquee>
    </div>
  );
}
