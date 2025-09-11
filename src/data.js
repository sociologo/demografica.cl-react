import {SiOpenaigym} from 'react-icons/si'

export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "Biografía académica",
        path: '/about'
    },
    {
        name: "Visualizaciones - Hallazgos notables",
        path: '/gallery'
    },
    {
        name: "Servicios - Consultoría",
        path: '/plans'
    },
    {
        name: "Nuestros mantenedores",
        path: '/trainers'
    },
    {
        name: "Contacto",
        path: '/contact'
    }
]

export const programs = [
   {
      id: 1,
      icon: <SiOpenaigym/>,
      title: "1. Predictor de Migraciones Internas por Inteligencia Artificial",
      info: "Predice flujos de migración interna basándose en datos censales, variables económicas y sociales en tiempo real.",
      path: "/programs/111"
   },
   {
      id: 2,
      icon: <SiOpenaigym/>,
      title: "2. Sistema de Vigilancia Epidemiológica Predictiva",
      info: "Detecta patrones anómalos en reportes médicos y redes sociales para predecir brotes.",
      path: "/programs/222"
   },
   {
      id: 3,
      icon: <SiOpenaigym/>,
      title: "3. Simulador Demográfico de Alto Realismo",
      info: "Simula poblaciones futuras usando tasas de natalidad, mortalidad, migración y políticas públicas.",
      path: "/programs/333"
   },
   {
      id: 4,
      icon: <SiOpenaigym/>,
      title: "4. Mapeador de Desigualdad Social Automatizado",
      info: "Produce mapas interactivos de desigualdad combinando variables censales, educación, salud, etc.",
      path: "/programs/444"
   },
   {
      id: 5,
      icon: <SiOpenaigym/>,
      title: "5. Análisis Predictivo de Comportamientos Electorales",
      info: "Predice comportamientos de voto con base en factores demográficos, históricos y redes sociales.",
      path: "/programs/444"
   },
   {
      id: 6,
      icon: <SiOpenaigym/>,
      title: "6. Calculadora de Riesgo Epidemiológico Individualizado",
      info: "Calcula el riesgo de una persona o comunidad a ciertas enfermedades con base en variables sociales.",
      path: "/programs/444"
   },
   {
      id: 7,
      icon: <SiOpenaigym/>,
      title: "7. Sistema de Priorización de Políticas Públicas por ROI Social",
      info: "Simula diferentes políticas públicas y estima su impacto económico y social.",
      path: "/programs/444"
   },
   {
      id: 8,
      icon: <SiOpenaigym/>,
      title: "8. Plataforma de Detección de Clústeres de Desigualdad",
      info: "Detecta clústeres espaciales de pobreza, violencia o enfermedades.",
      path: "/programs/444"
   },
   {
      id: 9,
      icon: <SiOpenaigym/>,
      title: "8. 🏥 Optimizador de Camas Hospitalarias Regional",
      info: "Usa datos históricos de ocupación de camas críticas (DEIS) y modelos SIR para estimar demanda futura, comuna por comuna.",
      path: "/programs/444"
   },
   {
      id: 10,
      icon: <SiOpenaigym/>,
      title: "5. 📉 Evaluador de Impacto de la PGU en Pobreza en Adultos Mayores",
      info: "Usa la Encuesta CASEN antes y después de la implementación de la PGU para evaluar su efecto en pobreza y desigualdad entre mayores de 65.",
      path: "/programs/444"
   },
   {
      id: 11,
      icon: <SiOpenaigym/>,
      title: "2. Mapeador de Segregación Urbana en Santiago",
      info: "Procesa datos geográficos del MINVU y del Censo para visualizar segregación residencial por ingresos, nivel educativo y etnia (pueblos originarios).",
      path: "/programs/444"
   },
   {
      id: 12,
      icon: <SiOpenaigym/>,
      title: "4. 🧒 Modelo Predictivo de Abandono Escolar en Chile",
      info: "Utiliza datos del MINEDUC, JUNAEB y SIMCE para identificar estudiantes con mayor riesgo de deserción escolar.",
      path: "/programs/444"
   }
]








export const values = [
   {
      id: 1,
      icon: <SiOpenaigym/>,
      title: "1. Manejo de datos (importación, limpieza y transformación)",
      desc: [
         "* Lectura de encuestas, censos y bases administrativas (readr, haven, readxl).",
         "* Limpieza y organización de variables (dplyr, tidyr).",
         "* Manejo de factores, etiquetas y variables categóricas típicas en ciencias sociales.",
         "* Principios de reproducibilidad: scripts claros y ordenados."
      ]
   },
   {
      id: 2,
      icon: <SiOpenaigym/>,
      title: "2. Análisis descriptivo y exploratorio",
      desc: [
         "* Estadísticas básicas (tablas, medias, medianas, proporciones).",
         "* Tabulación cruzada (similar a SPSS/Stata pero en R).",
         "* Visualización clara de desigualdades sociales (ggplot2).",
         "* Principios de data storytelling para ciencias sociales."
      ] 
   },
   {
      id: 3,
      icon: <SiOpenaigym/>,
      title: "3. Análisis inferencial y modelos estadísticos",
      desc: [
         "* Diseños muestrales y encuestas complejas (survey).",
         "* Regresiones lineales, logísticas y multinomiales aplicadas a fenómenos sociales.",
         "* Interpretación de coeficientes en lenguaje sustantivo (ej: “el efecto de ser mujer en la probabilidad de tener empleo formal”).",
         "* Pruebas de hipótesis y intervalos de confianza aplicados a desigualdad, educación, trabajo, etc. "  
      ] 
   },
   {
      id: 4,
      icon: <SiOpenaigym/>,
      title: "4. Reproducibilidad y comunicación de resultados",
      desc: [
         "* Scripts dinámicos con R Markdown / Quarto para informes.",
         "* Integración de tablas de resultados (gt, gtsummary, stargazer).",
         "* Buenas prácticas para replicar investigaciones.",
         "* Cómo pasar de un análisis técnico a un producto académico o de política pública."  
      ] 
   }
]









export const faqs = [
    {
        id: 1,
        question: "How often should I exercise?",
        answer: "Consectetur adipisicing elit. Non ipsa dolorem, rem consequatur eum omnis ex, fuga temporibus qui nesciunt odio aliquam commodi culpa inventore ut similique repellendus perferendis sint!"
    },
    {
        id: 2,
        question: "What time of day is best to work out?",
        answer: "Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui. Eos, omnis beatae? Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit."
    },
    {
        id: 3,
        question: "How long should my workouts be?",
        answer: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content."
    },
    {
        id: 4,
        question: "Do I need to warm up before my workouts?",
        answer: "Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate? Qui totam est omnis dolor nobis quisquam veritatis a!"
    },
    {
        id: 5,
        question: "Should I do strength training, cardio or both?",
        answer: "Maiores fuga, cum praesentium esse laudantium! Distinctio nihil blanditiis accusantium atque, quo maxime inventore eum! Cum dolorem quibusdam amet et qui."
    },
    {
        id: 6,
        question: "Should I lift weights for strength training?",
        answer: "Quas, est at! Molestiae quidem ab soluta exercitationem culpa nostrum iusto illum qui non a harum deserunt atque commodi at velit, consequatur quibusdam dignissimos cum labore possimus placeat consectetur nisi cupiditate."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Antonio Antón La desigualdad social ",
        quote: "Desigualdad social es un concepto relacional o comparativo. Significa la existencia de distintas oportunidades en el acceso, posesión, control y disfrute de recursos y poder, derivadas de diferentes condiciones, contextos y trayectorias.",
        job: "La desigualdad social",
        avatar: require("./images/avatar1.jpg")
    },
    {
        id: 2,
        name: "Daniel Vinyo",
        quote: "Harum quaerat hic consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum this and that odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Software Egineer",
        avatar: require("./images/avatar2.jpg")
    },
    {
        id: 3,
        name: "Edem Quist",
        quote: "Quaerat hic praesentium consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "University Lecturer",
        avatar: require("./images/avatar3.jpg")
    },
    {
        id: 4,
        name: "Grace Lavoe",
        quote: "Cupiditate deleniti sint consequuntur molestias repellat ad quo tenetur vitae rem, labore quisquam? Atque, assumenda rerum odit harum quaerat hic praesentium quisquam quae, enim iste ipsam id repellat.",
        job: "Talking Parrot",
        avatar: require("./images/avatar4.jpg")
    },
    {
        id: 5,
        name: "Nana Yaa Dankwa",
        quote: "Maxime minima cumque sit amet consectetur adipisicing elit. Praesentium ipsam facere ea a laboriosam sed? Quod vel voluptates a! Maxime minima cumque aut? In expedita numquam consectetur non officia iusto.",
        job: "Pharmacist",
        avatar: require("./images/avatar5.jpg")
    }
]







export const plans = [
    {
        id: 1,
        name: 'Silver Package',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    },
]









const Trainer1 = require('./images/trainer1.jpg')
const Trainer2 = require('./images/trainer2.jpg')
const Trainer3 = require('./images/trainer3.jpg')
const Trainer4 = require('./images/trainer4.jpg')
const Trainer5 = require('./images/trainer5.jpg')
const Trainer6 = require('./images/trainer6.jpg')


export const trainers = [
    {
        id: 1,
        image: Trainer1,
        name: 'John Doe',
        job: 'Aerobic Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Trainer2,
        name: 'Daniel vinyo',
        job: 'Speed Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Trainer3,
        name: 'Edem Quist',
        job: 'Flexibility Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Trainer4,
        name: 'Shatta Wale',
        job: 'Body Composition Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 5,
        image: Trainer5,
        name: 'Diana Ayi',
        job: 'Circuit Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 6,
        image: Trainer6,
        name: 'Wayne Carter',
        job: 'Physical Intelligence Trainer',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
]