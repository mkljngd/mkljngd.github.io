"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import {
  Bug,
  Code,
  Coffee,
  FileCode,
  FileText,
  Terminal,
  Zap,
  Cloud,
  Container,
  Globe,
  Layers,
  GitBranch,
  Database,
  Server,
  Cpu,
  Gauge,
  BookOpen,
  Users,
  ClipboardCheck,
  Settings,
  Monitor,
  GitCommit,
  Workflow,
  Activity,
  FileCog,
  PlayCircle,
  Search,
  ChevronDown,
} from "lucide-react";

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "Python", level: 95, icon: FileCode },
        { name: "Django", level: 95, icon: Server },
        { name: "Java", level: 90, icon: Coffee },
        { name: "Angular", level: 85, icon: Monitor },
        { name: "TypeScript", level: 85, icon: FileText },
        { name: "Spring Boot", level: 85, icon: Settings },
        { name: "Node.js", level: 80, icon: Terminal },
        { name: "React", level: 80, icon: Zap },
        { name: "Tailwind", level: 80, icon: Activity },
        { name: "Shell Scripting", level: 80, icon: Terminal },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Docker", level: 90, icon: Container },
        { name: "AWS", level: 80, icon: Globe },
        { name: "Kubernetes", level: 80, icon: Layers },
        { name: "GCP", level: 75, icon: Cloud },
        { name: "CI/CD Pipelines", level: 85, icon: Workflow },
        { name: "GitHub Actions", level: 85, icon: GitCommit },
        { name: "Jenkins", level: 80, icon: PlayCircle },
      ],
    },
    {
      title: "Databases & Tools",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "PostgreSQL", level: 85, icon: Database },
        { name: "MySQL", level: 80, icon: Database },
        { name: "MongoDB", level: 75, icon: Database },
        { name: "Redis", level: 70, icon: Database },
        { name: "Git", level: 90, icon: GitBranch },
        { name: "Linux", level: 85, icon: Terminal },
        { name: "REST APIs", level: 90, icon: Server },
        { name: "Microservices", level: 75, icon: Cpu },
        { name: "Celery", level: 75, icon: Gauge },
        { name: "Elasticsearch", level: 65, icon: Search },
      ],
    },
    {
      title: "Development Practices",
      icon: Server,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Code Refactoring", level: 95, icon: FileCog },
        { name: "Performance Tuning", level: 90, icon: Gauge },
        { name: "Debugging", level: 90, icon: Bug },
        { name: "Code Review", level: 90, icon: ClipboardCheck },
        { name: "SDLC", level: 85, icon: Workflow },
        { name: "Agile", level: 85, icon: Workflow },
        { name: "Testing", level: 85, icon: Activity },
        { name: "Mentoring", level: 80, icon: Users },
        { name: "System Design", level: 85, icon: Cpu },
        { name: "Documentation", level: 75, icon: BookOpen },
      ],
    },
  ];

  const achievements = [
    {
      title: "Performance Optimization",
      description: "Reduced server load by 30% through code refactoring",
      icon: Cpu,
    },
    {
      title: "Team Leadership",
      description: "Mentored junior developers, reducing delivery time by 20%",
      icon: GitBranch,
    },
    {
      title: "Scalable Architecture",
      description: "Built systems handling 100K+ users with 99.9% uptime",
      icon: Server,
    },
    {
      title: "Research Publications",
      description: "Published 2 papers in Springer journals on ML applications",
      icon: Database,
    },
  ];

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
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
            across the full technology stack.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16 items-start">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            const isExpanded = expandedCard === categoryIndex;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                className="glass rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setExpandedCard(isExpanded ? null : categoryIndex)}
                onMouseEnter={() => setExpandedCard(categoryIndex)}
                onMouseLeave={() => setExpandedCard(null)}
              >
                {/* Header - Always Visible */}
                <div className="flex items-center justify-between p-4 sm:p-6 lg:p-8">
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-3 sm:mr-4`}
                    >
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-text-primary">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Expand/Collapse Icon */}
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-text-secondary" />
                  </motion.div>
                </div>

                {/* Expandable Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          {category.skills.map((skill, skillIndex) => {
                            const SkillIcon = skill.icon;
                            return (
                              <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                  duration: 0.4,
                                  delay: skillIndex * 0.05,
                                }}
                                className="group"
                              >
                                <div className="bg-background-dark/20 rounded-lg p-3 sm:p-4 hover:bg-background-dark/30 transition-all duration-300">
                                  <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center space-x-2">
                                      {SkillIcon && (
                                        <SkillIcon className="w-4 h-4 text-primary-400" />
                                      )}
                                      <span className="text-xs sm:text-sm font-medium text-text-primary">
                                        {skill.name}
                                      </span>
                                    </div>
                                    <span className="text-xs text-text-secondary">
                                      {skill.level}%
                                    </span>
                                  </div>
                                  <div className="w-full bg-background-border rounded-full h-2">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={{ width: `${skill.level}%` }}
                                      transition={{
                                        duration: 0.8,
                                        delay: skillIndex * 0.05 + 0.2,
                                      }}
                                      className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                                    />
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold mb-8 text-text-primary">
            Key Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
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
                  <h4 className="font-semibold text-text-primary mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-text-secondary">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
