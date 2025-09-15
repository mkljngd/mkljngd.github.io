'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, MapPin, Calendar, Award, Code, Cloud, Database } from 'lucide-react'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    { icon: GraduationCap, label: 'Education', value: 'MS Computer Science', detail: 'Boston University' },
    { icon: MapPin, label: 'Location', value: 'Boston, MA', detail: 'Open to relocate' },
    { icon: Calendar, label: 'Experience', value: '3+ Years', detail: 'Software Development' },
    { icon: Award, label: 'Research', value: '2 Publications', detail: 'Springer Journals' },
  ]

  const interests = [
    { icon: Code, title: 'Full Stack Development', description: 'Building end-to-end applications with modern frameworks' },
    { icon: Cloud, title: 'Cloud & DevOps', description: 'Designing scalable infrastructure and automation pipelines' },
    { icon: Database, title: 'Data Engineering', description: 'Creating efficient data processing and ML pipelines' },
  ]

  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A passionate software engineer with a strong foundation in computer science and hands-on experience in building scalable applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-white">My Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I&apos;m a recent MS Computer Science graduate from Boston University with a passion for building 
                  innovative software solutions. My journey began with a Bachelor&apos;s in Computer Engineering from 
                  Mumbai University, where I developed a strong foundation in programming and system design.
                </p>
                <p>
                  During my professional experience at Klaar Digital Solutions, I spearheaded the development 
                  of a SaaS-based Surveys module that generated $200K ARR for Fortune 500 companies. This experience 
                  taught me the importance of scalable architecture and user-centric design.
                </p>
                <p>
                  Currently, I&apos;m leading a frontend React development team at IpserLab LLC, where I mentor team 
                  members and oversee project deliverables. My research background includes published work on 
                  machine learning applications in healthcare, demonstrating my ability to bridge theory and practice.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="glass p-3 sm:p-4 rounded-xl text-center"
                  >
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-400 mx-auto mb-2" />
                    <div className="text-xs sm:text-sm text-gray-400 mb-1">{stat.label}</div>
                    <div className="font-semibold text-white text-sm sm:text-base">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.detail}</div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right Column - Interests & Skills Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white">What I Do</h3>
              <div className="space-y-6">
                {interests.map((interest, index) => {
                  const Icon = interest.icon
                  return (
                    <motion.div
                      key={interest.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{interest.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{interest.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            {/* Key Strengths */}
            <div className="glass p-4 sm:p-6 rounded-2xl">
              <h4 className="text-base sm:text-lg font-semibold text-white mb-4">Key Strengths</h4>
              <div className="space-y-3">
                {[
                  'Problem Solving',
                  'Team Leadership',
                  'Code Review',
                  'System Design',
                  'Mentoring',
                  'Performance Optimization'
                ].map((strength, index) => (
                  <motion.div
                    key={strength}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.05 }}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-secondary-400 to-accent-400 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-xs sm:text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{strength}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
