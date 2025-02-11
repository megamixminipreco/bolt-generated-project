import React from 'react'
import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Startup Founder',
      quote: 'AI Bot System transformed our web development process. What used to take weeks now takes hours!',
      image: 'https://via.placeholder.com/100'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director',
      quote: 'The AI-powered design tools are incredibly intuitive. Our website looks professional and modern.',
      image: 'https://via.placeholder.com/100'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Freelance Designer',
      quote: 'As a designer, this tool has become an essential part of my workflow. Highly recommended!',
      image: 'https://via.placeholder.com/100'
    }
  ]

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <FaQuoteLeft className="text-primary text-3xl mb-4" />
              <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials  // Ensure this line is present
