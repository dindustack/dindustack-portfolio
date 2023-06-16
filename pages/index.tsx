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
import { Projects } from "@/components/Projects";

const HomePage = () => {
  const containerRef = useRef(null);

  const options = {
    smooth: true,
  };


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

      <LocomotiveScrollProvider options={options}>
        <main data-scroll-container ref={containerRef}>
          <Navbar />
          <Hero />
          <MarqueeSection />
          <About />
          <Services />
          <Projects />
          <Footer />
        </main>
      </LocomotiveScrollProvider>
    </>
  );
};

HomePage.displayName = "HomePage";

export default HomePage;
