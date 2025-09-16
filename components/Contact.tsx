'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Download,
  ExternalLink
} from 'lucide-react'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })


  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mkljngd@bu.edu',
      href: 'mailto:mkljngd@bu.edu',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(857) 321-3168',
      href: 'tel:+18573213168',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/mkljngd',
      href: 'https://github.com/mkljngd',
      color: 'from-gray-500 to-gray-700'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/mkljngd',
      href: 'https://linkedin.com/in/mkljngd',
      color: 'from-blue-600 to-blue-800'
    }
  ] as Array<{
    icon: any;
    label: string;
    value: string;
    href: string;
    color: string;
    subtitle?: string;
  }>

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let&apos;s Connect</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Ready to discuss your next project or explore opportunities? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Get In Touch</h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                              I&apos;m always excited to work on challenging projects and collaborate with talented teams. 
              Whether you need a full-stack developer, DevOps engineer, or technical consultant, 
              I&apos;m ready to help bring your ideas to life.
              </p>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon
                  return (
                    <motion.a
                      key={contact.label}
                      href={contact.href}
                      target={contact.href.startsWith('http') ? '_blank' : undefined}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="flex items-center space-x-4 p-4 bg-background-dark/20 rounded-lg hover:bg-background-dark/30 transition-all duration-300 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${contact.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-text-secondary mb-1">{contact.label}</div>
                        <div className="text-text-primary font-medium">{contact.value}</div>
                        {contact.subtitle && (
                          <div className="text-xs text-text-secondary/70">{contact.subtitle}</div>
                        )}
                      </div>
                      {contact.href.startsWith('http') && (
                        <ExternalLink className="w-4 h-4 text-text-secondary group-hover:text-text-primary transition-colors duration-300" />
                      )}
                    </motion.a>
                  )
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 pt-8 border-t border-background-border text-center"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-text-secondary">
              © 2025 Mukul Jangid. Built with Next.js, TypeScript, and Tailwind CSS.
            </div>
            <div className="flex items-center space-x-6">
              <motion.a
                href="mailto:mkljngd@bu.edu"
                whileHover={{ scale: 1.1 }}
                className="text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                href="https://github.com/mkljngd"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/mkljngd"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-text-secondary hover:text-text-primary transition-colors duration-300"
              >
                <Linkedin size={20} />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
