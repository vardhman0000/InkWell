import React from 'react'
import HeroSection from './Home/HeroSection'
import FeatureSection from './Home/FeatureSection'
import Stats from './Home/Stats'
import Testimonial from './Home/Testimonial'
import Footer from './Home/Footer'
import CTA from './Home/CTA'

const Home = () => {
  return (
    <div>
      <section className="hero">
        <HeroSection/>
      </section>

      <section className="features">
        <FeatureSection/>
      </section>

      <section className="cta">
        <CTA/>
      </section>

      <section className="stats">
        <Stats/>
      </section>

      <section className="testimonial">
        <Testimonial/>
      </section>

    <section className="footer">
      <Footer/>
    </section>

    </div>

  )
}

export default Home


