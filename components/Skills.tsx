'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  Database, 
  Cloud, 
  Server, 
  Cpu, 
  GitBranch,
  FileCode,
  Coffee,
  FileText,
  Zap,
  Terminal,
  Container,
  Globe,
  Layers
} from 'lucide-react'

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'Python', level: 95, icon: FileCode },
        { name: 'Django', level: 95 },
        { name: 'Java', level: 90, icon: Coffee },
        { name: 'Spring Boot', level: 85 },
        { name: 'TypeScript', level: 85, icon: FileText },
        { name: 'Angular', level: 85 },
        { name: 'Node.js', level: 85, icon: Terminal },
        { name: 'React', level: 80, icon: Zap },
        { name: 'Shell Scripting', level: 80 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Docker', level: 90, icon: Container },
        { name: 'AWS', level: 85, icon: Globe },
        { name: 'Kubernetes', level: 85, icon: Layers },
        { name: 'GCP', level: 80 },
        { name: 'CI/CD Pipelines', level: 85 },
        { name: 'GitHub Actions', level: 85 },
        { name: 'Jenkins', level: 85 }
      ]
    },
    {
      title: 'Databases & Tools',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MySQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'Redis', level: 70 },
        { name: 'Git', level: 90, icon: GitBranch },
        { name: 'Linux', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'Microservices', level: 80 },
        { name: 'Celery', level: 80 },
        { name: 'Elasticsearch', level: 65 },
      ]
    },
    {
      title: 'Development Practices',
      icon: Server,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Code Refactoring', level: 95 },
        { name: 'Performance Tuning', level: 90 },
        { name: 'Code Review', level: 90 },
        { name: 'Agile', level: 85 },
        { name: 'Testing', level: 80 },
        { name: 'Documentation', level: 85 },
        { name: 'Mentoring', level: 80 }
      ]
    }
  ]

  const achievements = [
    {
      title: 'Performance Optimization',
      description: 'Reduced server load by 30% through code refactoring',
      icon: Cpu
    },
    {
      title: 'Team Leadership',
      description: 'Mentored junior developers, reducing delivery time by 20%',
      icon: GitBranch
    },
    {
      title: 'Scalable Architecture',
      description: 'Built systems handling 100K+ users with 99.9% uptime',
      icon: Server
    },
    {
      title: 'Research Publications',
      description: 'Published 2 papers in Springer journals on ML applications',
      icon: Database
    }
  ]

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications across the full technology stack.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="glass p-4 sm:p-6 lg:p-8 rounded-2xl"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-3 sm:mr-4`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: categoryIndex * 0.2 + skillIndex * 0.05 }}
                        className="group cursor-pointer"
                      >
                        <div className="bg-white/5 rounded-lg p-3 sm:p-4 hover:bg-white/10 transition-all duration-300">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              {SkillIcon && <SkillIcon className="w-4 h-4 text-primary-400" />}
                              <span className="text-xs sm:text-sm font-medium text-white">{skill.name}</span>
                            </div>
                            <span className="text-xs text-gray-400">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : {}}
                              transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.05 + 0.5 }}
                              className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-8 text-white">Key Achievements</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                  className="glass p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{achievement.title}</h4>
                  <p className="text-sm text-gray-300">{achievement.description}</p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Technology Stack Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="glass p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-white">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Frontend', techs: ['React', 'Angular', 'TypeScript', 'Tailwind'] },
              { name: 'Backend', techs: ['Node.js', 'Python', 'Java', 'Django'] },
              { name: 'Database', techs: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL'] },
              { name: 'Cloud', techs: ['AWS', 'GCP', 'Docker', 'Kubernetes'] },
              { name: 'DevOps', techs: ['Jenkins', 'GitHub Actions', 'CI/CD', 'Monitoring'] },
              { name: 'Tools', techs: ['Git', 'Linux', 'REST APIs', 'Testing'] }
            ].map((stack, index) => (
              <motion.div
                key={stack.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="text-center"
              >
                <h4 className="font-semibold text-white mb-3">{stack.name}</h4>
                <div className="space-y-2">
                  {stack.techs.map((tech, techIndex) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 1.6 + index * 0.1 + techIndex * 0.05 }}
                      className="flex items-center space-x-2 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
                    >
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex-shrink-0 group-hover:w-2 group-hover:h-2 transition-all duration-300" />
                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
