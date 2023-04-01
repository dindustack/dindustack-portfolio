import React, { useState, useEffect } from "react";
import SplashScreen from "@/components/SplashScreen";
import Head from "next/head";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Display Splash Screen
   */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timeout)
  }, []);

  

  return (
    <>
      <Head>
        <title>DinduStack</title>
        <meta
          name="description"
          content="Portfolio showcasing frontend experience"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading ? <SplashScreen /> : <div>Hello</div>}
    </>
  );
}
