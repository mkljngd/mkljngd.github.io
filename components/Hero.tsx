'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'

export default function Hero() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  
  const roles = [
    'Full Stack Developer',
    'Software Engineer',
    'Backend Engineer',
    'Problem Solver'
  ]

  const { text: displayText, isDeleting } = useTypewriter({
    words: roles,
    typeSpeed: 100,
    deleteSpeed: 50,
    pauseTime: 2000,
    loop: true
  })

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      
      // Hide chevron when scrolled past 20% of viewport height
      setShowScrollIndicator(scrollPosition < windowHeight * 0.2)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-start relative overflow-hidden">
      <div className="w-full text-left relative z-10 pl-8 sm:pl-12 lg:pl-16 xl:pl-[108px]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl text-text-secondary mb-4"
          >
            Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-[34px] sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6"
          >
            <span className="gradient-text text-shadow-lg">Mukul Jangid</span>
          </motion.h1>

          {/* Dynamic Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="h-12 sm:h-16 flex items-center justify-start mb-6 sm:mb-8"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl sm:text-2xl md:text-3xl font-semibold text-text-primary text-left font-mono"
            >
              {displayText}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-primary-500"
              >
                |
              </motion.span>
            </motion.span>
          </motion.div>

          {/* Description */}
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg sm:text-xl text-text-secondary mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
          >
            MS Computer Science graduate from Boston University with expertise in full-stack development, 
            cloud architecture, and DevOps. Passionate about building scalable solutions and solving complex problems.
          </motion.p> */}

          {/* CTA Buttons */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-start items-start mb-12 sm:mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center justify-center space-x-2 w-full sm:w-auto min-h-[48px] text-base sm:text-lg"
            >
              <span>View My Work</span>
            </motion.a>
            
            <motion.a
              href="/Mukul_Jangid_Resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center justify-center space-x-2 w-full sm:w-auto min-h-[48px] text-base sm:text-lg"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.a>
          </motion.div> */}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex justify-start space-x-4 sm:space-x-6 mb-12 sm:mb-16"
          >
            <motion.a
              href="https://github.com/mkljngd"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 sm:p-4 glass rounded-full text-text-secondary hover:text-text-primary transition-colors duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center"
            >
              <Github size={20} className="sm:w-6 sm:h-6" />
            </motion.a>
            
            <motion.a
              href="https://linkedin.com/in/mkljngd"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 sm:p-4 glass rounded-full text-text-secondary hover:text-text-primary transition-colors duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </motion.a>
            
            <motion.a
              href="mailto:mkljngd@bu.edu"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 sm:p-4 glass rounded-full text-text-secondary hover:text-text-primary transition-colors duration-300 min-h-[48px] min-w-[48px] flex items-center justify-center"
            >
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </motion.a>
          </motion.div>

        </motion.div>

      {/* Scroll Indicator - Fixed position, hidden when scrolled down */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center z-50"
        >
          <motion.button
            onClick={scrollToAbout}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="p-2 glass rounded-full text-text-secondary hover:text-text-primary transition-colors duration-300"
          >
            <ChevronDown size={24} />
          </motion.button>
        </motion.div>
      )}
      </div>
    </section>
  )
}
