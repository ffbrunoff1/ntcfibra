import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recipientEmail: 'contato@ntcbrasil.com.br'
        })
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      details: "(11) 5242-4280",
      link: "tel:(11)5242-4280"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: "(19) 98361-0020",
      link: "https://wa.me/5519983610020"
    },
    {
      icon: Mail,
      title: "E-mail",
      details: "contato@ntcbrasil.com.br",
      link: "mailto:contato@ntcbrasil.com.br"
    }
  ]

  return (
    <section id="contato" className="section-padding bg-white">
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
            Entre em <span className="gradient-text">Contato</span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Transforme suas obras com a NTCFibra. Nossa equipe de especialistas está pronta 
            para fornecer as melhores soluções em fibras de polipropileno para seu projeto.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            className="space-y-8"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Fale Conosco
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Estamos aqui para ajudá-lo a escolher a melhor solução em fibras para seu projeto. 
                Entre em contato conosco e receba um atendimento personalizado com orçamento exclusivo.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.a
                    href={info.link}
                    className="flex items-center space-x-4 group"
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <div className="bg-gradient-accent rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-800 group-hover:text-accent-600 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                        {info.details}
                      </p>
                    </div>
                  </motion.a>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-xl p-6"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-gray-800 mb-3">
                Horário de Atendimento
              </h4>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">Segunda a Sexta:</span> 8h às 18h</p>
                <p><span className="font-semibold">Sábado:</span> 8h às 12h</p>
                <p><span className="font-semibold">WhatsApp:</span> 24h por dia</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-gray-50 rounded-3xl p-8 lg:p-12"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Solicite um Orçamento
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent transition-all duration-300"
                  placeholder="Digite seu nome completo"
                />
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent transition-all duration-300"
                  placeholder="Digite seu e-mail"
                />
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-600 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Conte-nos sobre seu projeto e qual tipo de fibra você precisa..."
                />
              </motion.div>

              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center space-x-2 ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 text-green-800 border border-green-200' 
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {submitStatus === 'success' 
                    ? <CheckCircle className="h-5 w-5" />
                    : <AlertCircle className="h-5 w-5" />
                  }
                  <span>
                    {submitStatus === 'success' 
                      ? 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
                      : 'Erro ao enviar mensagem. Tente novamente ou entre em contato diretamente conosco.'}
                  </span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-accent text-white hover:shadow-lg hover:scale-105'
                }`}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </motion.button>
            </form>

            <motion.div
              className="mt-8 text-center"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 mb-4">Ou entre em contato diretamente via WhatsApp</p>
              <motion.a
                href="https://wa.me/5519983610020"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="h-5 w-5" />
                <span>Conversar no WhatsApp</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}