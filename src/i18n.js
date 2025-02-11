import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      // Existing English translations
    }
  },
  es: {
    translation: {
      // Existing Spanish translations
    }
  },
  'pt-BR': {
    translation: {
      header: {
        features: 'Recursos',
        pricing: 'Preços',
        demo: 'Demonstração',
        blog: 'Blog',
      },
      hero: {
        title: 'Revolucione o Desenvolvimento Web com IA',
        subtitle: 'Crie sites incríveis em minutos com nossa plataforma alimentada por IA',
        tryDemo: 'Experimentar Demo',
        viewPricing: 'Ver Preços',
      },
      features: {
        title: 'Recursos Principais',
        ai: {
          title: 'Design Alimentado por IA',
          description: 'Nossos algoritmos avançados de IA criam designs bonitos e responsivos adaptados às suas necessidades.',
        },
        ml: {
          title: 'Otimização de Aprendizado de Máquina',
          description: 'Melhore continuamente o desempenho do seu site com nossa otimização baseada em ML.',
        },
        web: {
          title: 'Desenvolvimento Baseado em Navegador',
          description: 'Crie e implante sites diretamente do seu navegador, sem necessidade de instalação.',
        },
      },
      // Add more translations as needed
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt-BR', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
