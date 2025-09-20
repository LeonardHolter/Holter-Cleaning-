import Layout from '@/components/Layout'
import Hero from '@/components/Hero'
import ValueProps from '@/components/ValueProps'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <ValueProps />
      <Services />
      <Testimonials />
      <Contact />
    </Layout>
  )
}
