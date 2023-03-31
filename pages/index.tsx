import SplashScreen from '@/components/SplashScreen'
import Head from 'next/head'



export default function HomePage() {
  return (
    <>
      <Head>
        <title>DinduStack</title>
        <meta name="description" content="Portfolio showcasing frontend experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SplashScreen />
    </>
  )
}
