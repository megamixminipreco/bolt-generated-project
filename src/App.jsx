import React from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import Demo from './components/Demo'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import Blog from './components/Blog'
import ChatSupport from './components/ChatSupport'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Benefits />
        <Pricing />
        <Demo />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
      <ChatSupport />
    </div>
  )
}

export default App
