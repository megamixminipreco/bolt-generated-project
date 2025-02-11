import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaRobot, FaBrain, FaGlobe } from 'react-icons/fa'

const Features = () => {
  const { t } = useTranslation()

  const features = [
    {
      icon: <FaRobot className="text-4xl mb-4 text-primary" />,
      title: t('features.ai.title'),
      description: t('features.ai.description'),
    },
    {
      icon: <FaBrain className="text-4xl mb-4 text-primary" />,
      title: t('features.ml.title'),
      description: t('features.ml.description'),
    },
    {
      icon: <FaGlobe className="text-4xl mb-4 text-primary" />,
      title: t('features.web.title'),
      description: t('features.web.description'),
    },
  ]

  return (
    <section id="features" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 text-center text-white">
          {t('features.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="glass-card p-8 rounded-xl text-center transform transition-all duration-300 hover:scale-105"
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
