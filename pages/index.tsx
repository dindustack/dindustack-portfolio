import Head from "next/head";
import React, { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";
import MarqueeSection from "@/components/Marquee";
import Services from "@/components/Services";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

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
        <div className="text-[#e7e7e7] uppercase">
          <CustomCursor />
          <Navbar />
          <Hero />
          <MarqueeSection />
          <Services />
          <Footer />
        </div>
      )}
    </>
  );
}
