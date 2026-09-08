import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import AboutCED from './components/sections/AboutCED'
import HowItWorks from './components/sections/HowItWorks'
import OurWork from './components/sections/OurWork'
import Services from './components/sections/Services'
import Clients from './components/sections/Clients'
import CinematicHook from './components/sections/CinematicHook'
import Packages from './components/sections/Packages'
import Reviews from './components/sections/Reviews'
import FAQ from './components/sections/FAQ'
import Contact from './components/sections/Contact'
import WhatsAppButton from './components/common/WhatsAppButton'
import Footer from './components/layout/Footer'

function App() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#050706] pb-0 text-white">
      <Navbar />
      <Hero />
      <AboutCED />
      <HowItWorks />
      <OurWork />
      <Services />
      <Clients />
      <CinematicHook />
      <Packages />
      <Reviews />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}

export default App
