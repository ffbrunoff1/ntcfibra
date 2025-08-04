import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Facebook, MapPin } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const socialLinks = [
    {
      icon: Facebook,
      url: 'https://www.facebook.com/ntcbrasil',
      name: 'Facebook'
    }
  ]

  const quickLinks = [
    { name: 'Início', href: 'inicio' },
    { name: 'Sobre', href: 'sobre' },
    { name: 'Produtos', href: 'produtos' },
    { name: 'Contato', href: 'contato' }
  ]

  const contactInfo = [
    {
      icon: Phone,
      text: '(11) 5242-4280',
      href: 'tel:(11)5242-4280'
    },
    {
      icon: Phone,
      text: '(19) 98361-0020',
      href: 'tel:(19)98361-0020'
    },
    {
      icon: Mail,
      text: 'contato@ntcbrasil.com.br',
      href: 'mailto:contato@ntcbrasil.com.br'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <motion.div
            className="space-y-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <img 
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754333331942_0.png" 
                alt="NTCFibra" 
                className="h-12 w-auto filter invert"
              />
              <p className="text-gray-300 leading-relaxed">
                Especialistas em micro e macrofibras de polipropileno para construção civil. 
                Oferecemos soluções inovadoras que garantem durabilidade e resistência 
                superior para seus projetos.
              </p>
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-600 hover:bg-accent-600 p-3 rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="space-y-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white">Produtos</h3>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300">Microfibra de Polipropileno</span>
              </li>
              <li>
                <span className="text-gray-300">Macrofibra de Polipropileno</span>
              </li>
              <li>
                <span className="text-gray-300">Soluções para Construção Civil</span>
              </li>
              <li>
                <span className="text-gray-300">Reforço Estrutural</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="space-y-6"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white">Contato</h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <motion.a
                    href={contact.href}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <contact.icon className="h-5 w-5 text-accent-400 group-hover:text-accent-300" />
                    <span>{contact.text}</span>
                  </motion.a>
                </li>
              ))}
            </ul>

            <div className="space-y-2">
              <h4 className="text-lg font-semibold text-white">Horário de Atendimento</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <p>Segunda a Sexta: 8h às 18h</p>
                <p>Sábado: 8h às 12h</p>
                <p>WhatsApp: 24h por dia</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-700 mt-12 pt-8"
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} NTCFibra. Todos os direitos reservados.
            </div>
            <div className="text-gray-400 text-sm">
              Criado com <a href="https://papum.ai" target="_blank" rel="noopener noreferrer" className="text-accent-400 hover:text-accent-300 transition-colors duration-300">Papum</a>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="bg-gray-800 py-4"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container-custom">
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">
              <strong>NTCFibra</strong> - Especialistas em Fibras de Polipropileno para Construção Civil
            </p>
            <p>
              Micro e Macrofibras | Durabilidade e Resistência | Qualidade Garantida
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  )
}