'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Calendar,
  MapPin,
  Building,
  Users,
  TrendingUp,
  Award,
  Code,
  Cloud,
  Database,
  Briefcase,
  GraduationCap,
  BookOpen
} from 'lucide-react'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      type: 'work',
      title: 'Software Engineer Intern',
      company: 'IpserLab LLC',
      location: 'Boston, MA',
      period: 'May 2025 – Present',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      achievements: [
        'Leading a frontend React development team of 5+ developers',
        'Actively developing intuitive web pages and user interfaces',
        'Overseeing project progress and deliverables management',
        'Mentoring team members through code reviews and technical guidance',
        'Meeting critical project milestones and deadlines'
      ],
      technologies: ['React', 'TypeScript', 'Team Leadership', 'Code Review', 'Project Management']
    },
    {
      type: 'work',
      title: 'Software Development Engineer 1',
      company: 'Klaar Digital Solutions Pvt Ltd',
      location: 'Mumbai, India',
      period: 'Mar 2022 – Jul 2023',
      icon: Building,
      color: 'from-purple-500 to-pink-500',
      achievements: [
        'Spearheaded development of SaaS-based Surveys module for 10 Fortune 500 companies',
        'Generated $200K ARR through innovative survey solutions',
        'Monitored AWS and GCP cloud services with Kubernetes clusters',
        'Resolved post-deployment issues ensuring 99.9% uptime for 100K+ users',
        'Revamped Django codebase and refactored 10+ APIs, reducing server load by 30%',
        'Mentored junior developers and improved onboarding efficiency by 20%'
      ],
      technologies: ['Django', 'AWS', 'GCP', 'Kubernetes', 'Python', 'PostgreSQL', 'Mentoring']
    },
    {
      type: 'work',
      title: 'Software Developer Intern',
      company: 'Man Investments Group',
      location: 'Mumbai, India',
      period: 'Mar 2021 – Jun 2021',
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
      achievements: [
        'Built and maintained complete Invoice Discounting web application using Django',
        'Translated business requirements into technical specifications',
        'Boosted performance efficiency by 20% through code optimization',
        'Enhanced responsive design for better user experience'
      ],
      technologies: ['Django', 'Python', 'Web Development', 'Performance Optimization']
    },
    {
      type: 'work',
      title: 'Web Development Intern',
      company: 'PromoDome Digital LLP',
      location: 'Mumbai, India',
      period: 'Dec 2020 – Feb 2021',
      icon: Cloud,
      color: 'from-orange-500 to-red-500',
      achievements: [
        'Architected and launched responsive multi-page website using WordPress with Elementor',
        'Improved user engagement by 15% through better UX design',
        'Optimized page load times by 1.5 seconds, reducing bounce rates',
        'Implemented SEO best practices for better search visibility'
      ],
      technologies: ['WordPress', 'Elementor', 'SEO', 'UX Design', 'Performance Optimization']
    }
  ]

  const education = [
    {
      type: 'education',
      title: 'Master of Science in Computer Science',
      company: 'Boston University',
      location: 'Boston, MA',
      period: 'Jan 2025',
      icon: GraduationCap,
      color: 'from-indigo-500 to-purple-500',
      achievements: [
        'GPA: 3.67 / 4.0',
        'Specialized in Full-Stack Development and Cloud Computing',
        'Completed advanced coursework in Machine Learning and System Design',
        'Published research papers in Springer journals',
        'Led multiple team projects with production-grade implementations'
      ],
      technologies: ['Computer Science', 'Machine Learning', 'System Design', 'Research', 'Team Leadership']
    },
    {
      type: 'education',
      title: 'Bachelor of Engineering in Computer Engineering',
      company: 'MCT\'s Rajiv Gandhi Institute of Technology, Mumbai University',
      location: 'Mumbai, India',
      period: 'Aug 2016 – Nov 2020',
      icon: BookOpen,
      color: 'from-teal-500 to-cyan-500',
      achievements: [
        'Strong foundation in computer science fundamentals',
        'Completed projects in web development and system programming',
        'Active participation in technical competitions and hackathons',
        'Developed problem-solving and analytical thinking skills'
      ],
      technologies: ['Computer Engineering', 'Programming', 'System Design', 'Problem Solving']
    }
  ]

  const allExperiences = [...experiences, ...education].sort((a, b) => {
    // Sort by date (most recent first)
    const getDate = (period: string) => {
      if (period.includes('Present')) return new Date('2025-12-31')
      if (period.includes('2025')) return new Date('2025-01-01')
      if (period.includes('2023')) return new Date('2023-01-01')
      if (period.includes('2021')) return new Date('2021-01-01')
      if (period.includes('2020')) return new Date('2020-01-01')
      return new Date('2016-01-01')
    }
    return getDate(b.period).getTime() - getDate(a.period).getTime()
  })

  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience & Education</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A journey of continuous learning and professional growth in software development and computer science.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-secondary-500 to-accent-500 transform md:-translate-x-0.5" />

          <div className="space-y-12">
            {allExperiences.map((experience, index) => {
              const Icon = experience.icon
              const isLeft = index % 2 === 0
              
              return (
                <motion.div
                  key={`${experience.type}-${index}`}
                  initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full transform -translate-x-2 md:-translate-x-2 z-10" />

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 w-full md:w-5/12 ${
                    isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="glass p-6 rounded-2xl"
                    >
                      {/* Header */}
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${experience.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-text-primary mb-1">{experience.title}</h3>
                          <div className="flex items-center space-x-2 text-primary-400 font-semibold mb-2">
                            <Building size={16} />
                            <span>{experience.company}</span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-text-secondary">
                            <div className="flex items-center space-x-1">
                              <MapPin size={14} />
                              <span>{experience.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar size={14} />
                              <span>{experience.period}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center space-x-2">
                          <Award size={16} />
                          <span>Key Achievements</span>
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <motion.li
                              key={achievementIndex}
                              initial={{ opacity: 0, x: -20 }}
                              animate={inView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.5, delay: index * 0.2 + achievementIndex * 0.1 }}
                              className="text-sm text-text-secondary flex items-start space-x-3 group"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-110 group-hover:shadow-md group-hover:shadow-purple-400/50 transition-all duration-300" />
                              <span className="group-hover:text-text-primary transition-colors duration-300">{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-text-primary mb-3 flex items-center space-x-2">
                          <Code size={16} />
                          <span>Technologies & Skills</span>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
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
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
