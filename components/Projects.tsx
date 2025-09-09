'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ExternalLink, 
  Github, 
  Calendar,
  Users,
  Database,
  Cloud,
  Cpu,
  Brain,
  Utensils,
  Route,
  BarChart3,
  Heart
} from 'lucide-react'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: 'Smart Meal Planner',
      description: 'A comprehensive full-stack meal planning and inventory management system designed to reduce food waste and streamline meal organization.',
      longDescription: 'Built with Angular frontend, Node.js/Express backend, and PostgreSQL database. Features JWT-based role authentication, real-time inventory tracking, and intelligent meal suggestions based on available ingredients.',
      image: '/api/placeholder/600/400',
      technologies: ['Angular', 'Node.js', 'Express', 'PostgreSQL', 'JWT', 'TypeScript'],
      features: [
        'Role-based authentication system',
        'Real-time inventory tracking',
        'Meal suggestion algorithms',
        'Expiry date notifications',
        'Responsive web interface'
      ],
      icon: Utensils,
      color: 'from-green-500 to-emerald-500',
      timeline: 'Sep - Dec 2024',
      status: 'Completed',
      impact: 'Reduces food waste through intelligent planning',
      github: '#',
      demo: '#'
    },
    {
      title: 'Route Optimization System',
      description: 'High-performance routing system handling 1M+ nodes using advanced graph algorithms and multithreading for optimal resource efficiency.',
      longDescription: 'Implemented Dijkstra and Bellman-Ford algorithms in Java with comprehensive test suite achieving 95% coverage. Includes Python visualization tools for real-time routing diagnostics and performance monitoring.',
      image: '/api/placeholder/600/400',
      technologies: ['Java', 'Python', 'JUnit', 'Graph Theory', 'Multithreading', 'Algorithms'],
      features: [
        'Handles 1M+ nodes efficiently',
        'Multiple algorithm implementations',
        '95% test coverage with JUnit',
        'Real-time visualization',
        'Performance benchmarking'
      ],
      icon: Route,
      color: 'from-blue-500 to-cyan-500',
      timeline: 'Feb - May 2024',
      status: 'Completed',
      impact: 'Optimized routing for large-scale applications',
      github: '#',
      demo: '#'
    },
    {
      title: 'LLM Performance Benchmarking',
      description: 'Comprehensive benchmarking suite for Large Language Models including Falcon, Llama2, Vicuna, and Mistral across 50+ test sessions.',
      longDescription: 'Developed intuitive GUI for real-time performance assessment, optimizing model selection based on performance metrics. Tested models ranging from 7B to 40B parameters with detailed resource usage analysis.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Machine Learning', 'GUI Development', 'Performance Analysis', 'Data Visualization'],
      features: [
        '50+ benchmarking sessions',
        'Models from 7B to 40B parameters',
        'Real-time performance GUI',
        'Resource usage optimization',
        'Comprehensive metrics analysis'
      ],
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      timeline: 'Sep - Dec 2023',
      status: 'Completed',
      impact: 'Improved model selection efficiency',
      github: '#',
      demo: '#'
    },
  ]

  const researchPapers = [
    {
      title: 'Heart Disorder Prognosis Employing KNN, ANN, ID3, and SVM',
      journal: 'Springer - AMLTA 2020',
      description: 'Machine Learning based heart disorder detection system validated on clinical datasets',
      icon: Heart
    },
    {
      title: 'Ensemble Method Combination: Bagging and Boosting',
      journal: 'Springer - ICACTA 2020',
      description: 'Applied Bagging and Boosting techniques to reduce variance and bias in ML models',
      icon: BarChart3
    }
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical projects spanning full-stack development, machine learning, and system optimization.
          </p>
        </motion.div>

        {/* Main Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300"
              >
                {/* Project Header */}
                <div className={`h-48 bg-gradient-to-r ${project.color} p-6 flex items-center justify-between`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <div className="flex items-center space-x-4 text-white/80 text-sm">
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{project.timeline}</span>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          project.status === 'Completed' ? 'bg-green-500/20' : 'bg-blue-500/20'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Impact */}
                  <div className="mb-4 p-3 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-2 text-sm">
                      <Cpu className="w-4 h-4 text-primary-400" />
                      <span className="text-gray-300">Impact: </span>
                      <span className="text-white font-medium">{project.impact}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={inView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1.5 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-400/30 rounded-full text-xs font-medium text-primary-300 hover:from-primary-500/30 hover:to-secondary-500/30 hover:border-primary-400/50 hover:text-primary-200 transition-all duration-300 shadow-sm hover:shadow-primary-500/25"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          initial={{ opacity: 0, x: -10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.2 + featureIndex * 0.1 }}
                          className="text-sm text-gray-300 flex items-center space-x-3 group"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex-shrink-0 group-hover:shadow-lg group-hover:shadow-green-400/50 transition-all duration-300" />
                          <span className="group-hover:text-white transition-colors duration-300">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 btn-secondary flex items-center justify-center space-x-2 text-sm"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 btn-primary flex items-center justify-center space-x-2 text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Research Publications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-white">Research Publications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {researchPapers.map((paper, index) => {
              const Icon = paper.icon
              return (
                <motion.div
                  key={paper.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{paper.title}</h4>
                      <p className="text-sm text-primary-400 mb-2">{paper.journal}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">{paper.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
        </motion.div>
      </div>
    </section>
  )
}
