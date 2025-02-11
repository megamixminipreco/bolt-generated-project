import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaRocket, FaChartLine, FaUserFriends } from 'react-icons/fa'

const Benefits = () => {
  const { t } = useTranslation()

  const benefits = [
    {
      icon: <FaRocket className="text-5xl mb-4 text-primary" />,
      title: t('benefits.speed.title'),
      description: t('benefits.speed.description'),
    },
    {
      icon: <FaChartLine className="text-5xl mb-4 text-primary" />,
      title: t('benefits.efficiency.title'),
      description: t('benefits.efficiency.description'),
    },
    {
      icon: <FaUserFriends className="text-5xl mb-4 text-primary" />,
      title: t('benefits.collaboration.title'),
      description: t('benefits.collaboration.description'),
    },
  ]

  return (
    <section id="benefits" className="py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">
          {t('benefits.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="glass-card p-8 rounded-xl text-center 
                         transform transition-all duration-300 
                         hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex justify-center mb-6 text-primary">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {benefit.title}
              </h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
