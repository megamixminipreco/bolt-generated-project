import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t, i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
  }

  return (
    <header className="bg-gray-900 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl font-bold text-white">AI Bot System</h1>
        </motion.div>
        <nav>
          <motion.button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? '✕' : '☰'}
          </motion.button>
          <motion.ul
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:flex space-x-4 mt-4 md:mt-0`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <li>
              <a href="#features" className="text-white hover:text-gray-300">
                {t('header.features')}
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-white hover:text-gray-300">
                {t('header.pricing')}
              </a>
            </li>
            <li>
              <a href="#demo" className="text-white hover:text-gray-300">
                {t('header.demo')}
              </a>
            </li>
            <li>
              <a href="#blog" className="text-white hover:text-gray-300">
                {t('header.blog')}
              </a>
            </li>
            <li>
              <button
                onClick={toggleLanguage}
                className="text-white hover:text-gray-300"
              >
                {i18n.language === 'en' ? 'ES' : 'EN'}
              </button>
            </li>
          </motion.ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
