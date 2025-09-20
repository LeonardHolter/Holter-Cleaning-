import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: React.ReactNode
  title?: string
  description?: string
}

const Layout = ({ 
  children, 
  title = 'Holter Cleaning - NYC\'s #1 Window Cleaning Service',
  description = 'Professional window cleaning in Manhattan & NYC. Trusted by 575+ customers with 5-star reviews. Get your free estimate today! Licensed & insured.'
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="window cleaning, NYC, Manhattan, residential, commercial, professional, licensed, insured" />
        <meta name="author" content="Holter Cleaning" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://holtercleaning.com" />
        <meta property="og:site_name" content="Holter Cleaning" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Viewport & Mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#16a34a" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        
        {/* Schema Markup for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Holter Cleaning",
              "description": "Professional window cleaning services in NYC",
              "url": "https://holtercleaning.com",
              "telephone": "(212) 555-CLEAN",
              "email": "info@holtercleaning.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Manhattan",
                "addressRegion": "NY",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 40.7831,
                "longitude": -73.9712
              },
              "openingHours": [
                "Mo-Fr 08:00-18:00",
                "Sa 09:00-16:00"
              ],
              "serviceArea": {
                "@type": "City",
                "name": "New York City"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "575"
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
