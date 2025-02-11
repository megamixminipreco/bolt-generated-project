import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { FaCheck, FaTimes } from 'react-icons/fa'

const Pricing = () => {
  const { t } = useTranslation()
  const [billingCycle, setBillingCycle] = useState('monthly')

  const plans = [
    {
      name: t('pricing.basic.name'),
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        t('pricing.basic.feature1'),
        t('pricing.basic.feature2'),
        t('pricing.basic.feature3'),
      ],
      recommended: false,
    },
    {
      name: t('pricing.pro.name'),
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        t('pricing.pro.feature1'),
        t('pricing.pro.feature2'),
        t('pricing.pro.feature3'),
        t('pricing.pro.feature4'),
      ],
      recommended: true,
    },
    {
      name: t('pricing.enterprise.name'),
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      features: [
        t('pricing.enterprise.feature1'),
        t('pricing.enterprise.feature2'),
        t('pricing.enterprise.feature3'),
        t('pricing.enterprise.feature4'),
        t('pricing.enterprise.feature5'),
      ],
      recommended: false,
    },
  ]

  return (
    <section id="pricing" className="py-24 gradient-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-white">
          {t('pricing.title')}
        </h2>
        
        {/* Billing Cycle Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 rounded-full p-1 flex items-center">
            <button
              className={`px-6 py-2 rounded-full transition-colors ${
                billingCycle === 'monthly' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full transition-colors ${
                billingCycle === 'annual' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setBillingCycle('annual')}
            >
              Annual
              <span className="ml-2 bg-green-500 text-xs px-2 py-1 rounded-full">
                Save 10%
              </span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`glass-card p-8 rounded-xl relative overflow-hidden 
                         transform transition-all duration-300 
                         ${plan.recommended ? 'border-2 border-primary scale-105' : ''}
                         hover:shadow-2xl`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-primary text-white px-4 py-2 transform rotate-45 translate-x-1/4 -translate-y-1/2">
                  Recommended
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-4 text-white">
                {plan.name}
              </h3>
              <div className="text-4xl font-bold mb-6 text-primary">
                {typeof plan.monthlyPrice === 'number' 
                  ? `$${billingCycle === 'monthly' 
                      ? plan.monthlyPrice 
                      : plan.annualPrice}/mo` 
                  : plan.monthlyPrice}
              </div>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li 
                    key={featureIndex} 
                    className="flex items-center text-gray-300"
                  >
                    <FaCheck className="text-green-500 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full btn btn-primary">
                {t('pricing.selectPlan')}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
