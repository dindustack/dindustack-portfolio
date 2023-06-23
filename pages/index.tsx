import Head from "next/head";
import { NextPage } from "next";
import { useRef } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MarqueeSection } from "@/components/Marquee";
import { Navbar } from "@/components/Navbar";
import { Services } from "@/components/Services";
import { Projects } from "@/components/Projects";
import { ScrollTriggerProxy } from "@/components/ScrollTriggerProxy";

const HomePage: NextPage = () => {
  const containerRef = useRef(null);

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
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          lerp: 0.1,
        }}
        watch={[]}
        containerRef={containerRef}
      >
        {/* <ScrollTriggerProxy /> */}
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

export default HomePage;
