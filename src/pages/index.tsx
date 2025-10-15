import Head from 'next/head'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Holter Cleaning - Professional Window Cleaning Services NYC</title>
        <meta name="description" content="Professional window cleaning services in NYC Manhattan. Get crystal clear windows with our expert team. Free estimates available." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <ContactForm />
        {/* Additional sections would go here */}
      </main>
    </>
  )
}


