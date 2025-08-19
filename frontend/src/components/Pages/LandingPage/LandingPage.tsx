import About from "./About/About"
import Features from "./Features/Features"
import Hero from "./Hero/Hero"
import Navbar from "./Navbar/Navbar"
import QualitySection from "./Quality/QualitySection"



function LandingPage() {
  return (
    <div>
        <Navbar/>
        {/* Hero section */}
        <Hero/>
        {/* Key features */}
        <Features/>
        {/* Quality Section */}
        <QualitySection/>
        {/* About section */}
        <About/>
        {/* footer */}
    </div>
  )
}

export default LandingPage