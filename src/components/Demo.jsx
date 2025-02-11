import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaPaintBrush, FaShoppingCart } from 'react-icons/fa'

const Demo = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null)

  const templates = [
    { 
      name: 'Portfolio', 
      description: 'Professional personal portfolio website',
      icon: <FaCode className="text-5xl text-primary" />,
      features: [
        'Responsive Design',
        'Project Showcase',
        'Contact Form',
        'Dark Mode'
      ]
    },
    { 
      name: 'E-commerce', 
      description: 'Modern online store template',
      icon: <FaShoppingCart className="text-5xl text-primary" />,
      features: [
        'Product Catalog',
        'Shopping Cart',
        'Payment Integration',
        'Inventory Management'
      ]
    },
    { 
      name: 'Creative Agency', 
      description: 'Sleek design for creative professionals',
      icon: <FaPaintBrush className="text-5xl text-primary" />,
      features: [
        'Portfolio Gallery',
        'Service Listings',
        'Client Testimonials',
        'Animated Transitions'
      ]
    },
  ]

  return (
    <section id="demo" className="py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">
          AI Website Templates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((template, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`glass-card p-8 rounded-xl cursor-pointer 
                         transform transition-all duration-300 
                         ${selectedTemplate === index 
                           ? 'border-2 border-primary scale-105' 
                           : 'hover:scale-105'}
                         text-center`}
              onClick={() => setSelectedTemplate(index)}
            >
              <div className="flex justify-center mb-6">
                {template.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {template.name}
              </h3>
              <p className="text-gray-300 mb-6">{template.description}</p>
              <div className="space-y-2 mb-6">
                {template.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex} 
                    className="text-gray-400 flex items-center justify-center"
                  >
                    <span className="mr-2 text-green-500">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
              <button className="btn btn-primary w-full">
                Select Template
              </button>
            </motion.div>
          ))}
        </div>

        {selectedTemplate !== null && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 glass-card p-10 rounded-xl text-center"
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              AI Customization for {templates[selectedTemplate].name}
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our advanced AI will help you customize this template to perfectly match 
              your unique brand identity, content, and business goals.
            </p>
            <button className="btn btn-secondary">
              Start AI Customization
            </button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Demo
