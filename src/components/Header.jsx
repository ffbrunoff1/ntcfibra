import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1754333331942_0.png" 
              alt="NTCFibra" 
              className={`h-12 w-auto transition-all duration-300 ${
                isScrolled ? 'filter-none' : 'filter invert-0'
              }`}
            />
          </motion.div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('inicio')}
              className={`font-medium transition-colors duration-300 hover:text-accent-600 ${
                isScrolled ? 'text-gray-800' : 'text-gray-800'
              }`}
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className={`font-medium transition-colors duration-300 hover:text-accent-600 ${
                isScrolled ? 'text-gray-800' : 'text-gray-800'
              }`}
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('produtos')}
              className={`font-medium transition-colors duration-300 hover:text-accent-600 ${
                isScrolled ? 'text-gray-800' : 'text-gray-800'
              }`}
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('contato')}
              className={`font-medium transition-colors duration-300 hover:text-accent-600 ${
                isScrolled ? 'text-gray-800' : 'text-gray-800'
              }`}
            >
              Contato
            </button>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="tel:(11)5242-4280"
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-accent-600 hover:text-white ${
                isScrolled ? 'text-gray-800 bg-gray-100' : 'text-gray-800 bg-white/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">(11) 5242-4280</span>
            </motion.a>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-gray-800' : 'text-gray-800'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <motion.div
            className="lg:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-b-lg shadow-lg">
              <button
                onClick={() => scrollToSection('inicio')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-accent-600 hover:bg-gray-50 transition-colors duration-300"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-accent-600 hover:bg-gray-50 transition-colors duration-300"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection('produtos')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-accent-600 hover:bg-gray-50 transition-colors duration-300"
              >
                Produtos
              </button>
              <button
                onClick={() => scrollToSection('contato')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-accent-600 hover:bg-gray-50 transition-colors duration-300"
              >
                Contato
              </button>
              <div className="pt-2 border-t border-gray-200">
                <a
                  href="tel:(11)5242-4280"
                  className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:text-accent-600 hover:bg-gray-50 transition-colors duration-300"
                >
                  <Phone className="h-4 w-4" />
                  <span>(11) 5242-4280</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}