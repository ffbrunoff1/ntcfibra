import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Award, Zap, MessageCircle } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="min-h-screen pt-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent-50/30 to-primary-100/20"></div>
      
      <div className="container-custom section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gray-800">Reforce suas</span>
              <br />
              <span className="gradient-text">Construções</span>
              <br />
              <span className="text-gray-800">com</span>
              <span className="text-primary-600"> Confiança</span>
            </motion.h1>

            <motion.p
              className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Micro e macrofibras de polipropileno que garantem 
              <span className="font-semibold text-accent-600"> durabilidade</span> e 
              <span className="font-semibold text-accent-600"> resistência superior</span> 
              para seus projetos de construção civil.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                onClick={() => scrollToSection('produtos')}
                className="btn-primary flex items-center justify-center space-x-2 text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Ver Produtos</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>

              <motion.a
                href="https://wa.me/5519983610020"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center space-x-2 text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </motion.a>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-8 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Shield className="h-8 w-8 text-accent-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">100%</div>
                <div className="text-sm text-gray-600">Confiável</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-accent-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">15+</div>
                <div className="text-sm text-gray-600">Anos</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Zap className="h-8 w-8 text-accent-600" />
                </div>
                <div className="text-2xl font-bold text-gray-800">Superior</div>
                <div className="text-sm text-gray-600">Qualidade</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-accent rounded-full flex items-center justify-center"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Zap className="h-12 w-12 text-white" />
              </motion.div>

              <motion.div
                className="space-y-6"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-gray-800">
                  Tecnologia Avançada em Fibras
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-accent-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Microfibras</h4>
                      <p className="text-gray-600">Alta resistência e durabilidade para aplicações precisas</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-accent-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Macrofibras</h4>
                      <p className="text-gray-600">Reforço estrutural superior para grandes projetos</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-accent-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Polipropileno</h4>
                      <p className="text-gray-600">Material de qualidade premium com certificação</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-200 rounded-full opacity-60"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  )
}