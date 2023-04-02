import Head from "next/head";
import React, { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Display Splash Screen
   */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Head>
        <title>dindustack</title>
        <meta
          name="description"
          content="Portfolio showcasing frontend experience"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading ? (
        <SplashScreen />
      ) : (
        <div className="text-[#e7e7e7] uppercase">
          <Navbar />
        </div>
      )}
    </>
  );
}
