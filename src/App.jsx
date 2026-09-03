import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import AboutCED from './components/sections/AboutCED'
import HowItWorks from './components/sections/HowItWorks'
import OurWork from './components/sections/OurWork'
import Services from './components/sections/Services'
import CinematicHook from './components/sections/CinematicHook'
import Reviews from './components/sections/Reviews'
// import Instagram from './components/sections/Instagram'
import Contact from './components/sections/Contact'
import WhatsAppButton from './components/common/WhatsAppButton'
import Footer from './components/layout/Footer'

function App() {
  return (
    <main className="min-h-screen bg-[#050706] pb-24 text-white lg:pb-0">
      <Navbar />

      <Hero />

      <AboutCED />

      <HowItWorks />

      <OurWork />

      <Services />

      <CinematicHook />

      <Reviews />

      {/* <Instagram /> */}

      <Contact />

      <Footer />

      <WhatsAppButton />
    </main>
  )
}

export default App