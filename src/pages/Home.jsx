import React from "react";
import Hero from '../components/Hero'
import Services from '../components/Services'
import BeforeAfter from '../components/BeforeAfter'
import Testimonials from '../components/Testimonials'
import DoctorSection from '../components/DoctorSection'
import CTABanner from '../components/CTABanner'
import LocationMap from "../components/Locationmap";

export default function Home() {
  return (
    <>
      <Hero />
      <DoctorSection />
      <Services />
      <BeforeAfter />
      <Testimonials />
      <CTABanner />
      <LocationMap />
    </>
  )
}
