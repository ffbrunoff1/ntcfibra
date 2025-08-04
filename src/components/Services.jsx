import React from 'react'
import { motion } from 'framer-motion'
import { Layers, Building, Shield, ArrowRight, Zap, CheckCircle } from 'lucide-react'

export default function Services() {
  const products = [
    {
      id: 1,
      name: "Microfibra",
      description: "A microfibra é um material inovador e versátil, ideal para diversas aplicações, desde limpeza doméstica até em indústrias automotivas. Composta por fibras ultrafinas, essa tecnologia garante alto poder de absorção, suavidade e eficiência na remoção de sujeira sem riscar superfícies. Além disso, é durável e reutilizável, permitindo economia e sustentabilidade. Na confecção de roupas, a microfibra oferece conforto, respirabilidade e leveza. Escolha a microfibra para um desempenho superior em suas tarefas diárias, assegurando praticidade e resultados excepcionais.",
      image: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754333325349_8wndqxo9cf5_fibra-de-polipropileno-para-concreto-microfibra-506x372.jpg",
      icon: Layers,
      benefits: [
        "Alta resistência e durabilidade",
        "Ideal para aplicações precisas",
        "Excelente aderência ao concreto",
        "Redução significativa de fissuras"
      ],
      applications: [
        "Pisos residenciais e comerciais",
        "Lajes e contrapisos",
        "Painéis pré-moldados",
        "Argamassas especiais"
      ]
    },
    {
      id: 2,
      name: "Macrofibra",
      description: "Macrofibra é uma solução inovadora para reforço de concreto, proporcionando maior resistência e durabilidade a construções. Indicada para diversas aplicações, como lajes, pisos industriais e pré-moldados, a macrofibra melhora a capacidade de carga e a flexibilidade estrutural, reduzindo fissuras. Sua incorporação ao concreto é simples e eficiente, dispensando a necessidade de armaduras metálicas tradicionais. Além de otimizar o processo construtivo, oferece segurança e economia a longo prazo, tornando-se a escolha ideal para projetos que exigem alto desempenho e qualidade.",
      image: "https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/1754333324353_vv0jnuin6u_fibra-de-polipropileno-para-concreto-macrofibra-506x372.jpg",
      icon: Building,
      benefits: [
        "Reforço estrutural superior",
        "Ideal para grandes projetos",
        "Substitui armaduras tradicionais",
        "Maior flexibilidade estrutural"
      ],
      applications: [
        "Pisos industriais",
        "Grandes lajes e estruturas",
        "Obras de infraestrutura",
        "Concreto projetado"
      ]
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="produtos" className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          className="text-center mb-16"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Nossos <span className="gradient-text">Produtos</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Descubra o futuro da construção com nossas micro e macrofibras de polipropileno, 
            desenvolvidas para proporcionar máxima resistência e durabilidade aos seus projetos.
          </motion.p>
        </motion.div>

        <div className="space-y-20">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:gap-0' : 'lg:gap-0'}`}>
                <motion.div
                  className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: index % 2 === 1 ? 30 : -30 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gradient-accent rounded-xl p-3">
                      <product.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {product.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-accent-600" />
                        Benefícios
                      </h4>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 text-accent-600 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                        <Zap className="h-5 w-5 mr-2 text-accent-600" />
                        Aplicações
                      </h4>
                      <ul className="space-y-2">
                        {product.applications.map((application, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="h-4 w-4 text-accent-600 mr-2 flex-shrink-0" />
                            {application}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                    <motion.button
                      onClick={() => scrollToSection('contato')}
                      className="btn-primary flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Solicitar Orçamento</span>
                      <ArrowRight className="h-5 w-5" />
                    </motion.button>

                    <motion.a
                      href="https://wa.me/5519983610020"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>WhatsApp</span>
                    </motion.a>
                  </div>
                </motion.div>

                <motion.div
                  className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: index % 2 === 1 ? -30 : 30 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="h-96 lg:h-full relative overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    
                    <motion.div
                      className="absolute bottom-4 left-4 right-4"
                      whileInView={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                        <h5 className="font-bold text-gray-800 mb-1">
                          {product.name} de Polipropileno
                        </h5>
                        <p className="text-sm text-gray-600">
                          Preço sob consulta - Entre em contato conosco
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-accent-600 to-accent-800 rounded-3xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Garanta Qualidade e Desempenho Superior
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como nossas fibras podem revolucionar seus projetos de construção civil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => scrollToSection('contato')}
                className="bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Entrar em Contato</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}