import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'

export default function Home() {
  return (
    <>
      <Head>
        <title>Holter Cleaning - Professional Cleaning Services NYC</title>
        <meta name="description" content="Professional commercial and residential cleaning services in NYC. Restaurants, hotels, theaters, and more. Get your free quote today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <Services />
      </main>
    </>
  )
}


