import React from 'react'
import { motion } from 'framer-motion'
import { Target, Users, Lightbulb, Award, TrendingUp, CheckCircle } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Target,
      title: "Precisão Técnica",
      description: "Desenvolvemos fibras com especificações técnicas rigorosas para garantir o melhor desempenho em cada aplicação."
    },
    {
      icon: Users,
      title: "Experiência Comprovada",
      description: "Mais de 15 anos no mercado de construccão civil, atendendo os mais diversos tipos de projetos."
    },
    {
      icon: Lightbulb,
      title: "Inovação Constante",
      description: "Investimos continuamente em pesquisa e desenvolvimento para oferecer as melhores soluções em fibras."
    }
  ]

  const benefits = [
    "Resistência superior a fissuras",
    "Maior durabilidade do concreto",
    "Facilidade de aplicação",
    "Redução de custos de manutenção",
    "Sustentabilidade ambiental",
    "Conformidade com normas técnicas"
  ]

  return (
    <section id="sobre" className="section-padding bg-white">
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
            Sobre a <span className="gradient-text">NTCFibra</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Especialistas em desenvolvimento e fabricação de micro e macrofibras de polipropileno, 
            oferecemos soluções inovadoras para reforço estrutural na construção civil com qualidade 
            e confiabilidade incomparáveis.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            className="space-y-8"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">
                Durabilidade e Resistência: A Base de Cada Projeto
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Na NTCFibra, compreendemos que cada projeto de construção possui necessidades específicas. 
                Por isso, desenvolvemos uma linha completa de fibras de polipropileno que atendem desde 
                aplicações residenciais até grandes empreendimentos industriais.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Nossas fibras são produzidas com tecnologia de ponta e rigoroso controle de qualidade, 
                garantindo que cada produto atenda aos mais altos padrões técnicos e de segurança.
              </p>
            </div>

            <motion.div
              className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl p-6"
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-4">
                <Award className="h-8 w-8 text-accent-600" />
                <h4 className="text-xl font-bold text-gray-800">Garantia de Qualidade</h4>
              </div>
              <p className="text-gray-700">
                Todos os nossos produtos são testados e certificados, garantindo desempenho 
                superior e conformidade com as normas técnicas da construção civil.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid gap-8"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-accent rounded-lg p-3">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-3xl p-8 relative overflow-hidden">
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-accent-200 rounded-full opacity-60"
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-200 rounded-full opacity-40"
                animate={{ scale: [1.2, 1, 1.2], rotate: [360, 0, 360] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="relative z-10">
                <TrendingUp className="h-12 w-12 text-accent-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Crescimento Sustentável
                </h3>
                <p className="text-gray-700 text-lg">
                  Nossa empresa tem crescido constantemente, sempre mantendo nosso 
                  compromisso com a qualidade e inovação que nos tornou referência 
                  no mercado de fibras para construção civil.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800">
              Vantagens das Nossas Fibras
            </h3>
            
            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CheckCircle className="h-6 w-6 text-accent-600 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8 p-6 bg-accent-50 rounded-xl"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Compromisso com a Excelência
              </h4>
              <p className="text-gray-700">
                Cada fibra que produzimos passa por rigorosos testes de qualidade, 
                garantindo que nossos clientes recebam produtos que superam as expectativas 
                e contribuem para o sucesso de seus projetos.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}