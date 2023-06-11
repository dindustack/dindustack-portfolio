import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MarqueeSection } from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { SplashScreen } from "@/components/SplashScreen";
import { Projects } from "@/components/Projects";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);

  /**
   * Display Splash Screen
   */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4800);
    // }, 0);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Head>
        <title>Chinwendu Agbaetuo | Frontend Developer</title>
        <meta
          name="description"
          content="Portfolio showcasing frontend experience"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>

      {isLoading ? (
        <SplashScreen />
      ) : (
        <LocomotiveScrollProvider
          options={{
            smooth: true,
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <main
            data-scroll-container
            ref={containerRef}
            className="text-[#202020] bg-[#fffef4]"
          >
            <Navbar />
            <Hero />
            <MarqueeSection />
            <About />
            <Services />
            <Projects />
            <Footer />
          </main>
        </LocomotiveScrollProvider>
      )}
    </>
  );
}
