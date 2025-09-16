"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Award,
  Code,
  Cloud,
  Database,
} from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const interests = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building end-to-end applications with modern frameworks",
    },
    {
      icon: Database,
      title: "Backend / Software Engineering",
      description: "Building robust server-side systems and scalable architectures",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Designing scalable infrastructure and automation pipelines",
    }
  ];

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
        </motion.div>

        {/* My Journey - With Left Blank Space */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
          {/* Left Column - Blank Space */}
          <div className="space-y-6">
            {/* Left space intentionally left blank */}
          </div>

          {/* Right Column - My Journey */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass p-6 rounded-2xl">
              <div className="space-y-4 text-text-secondary leading-relaxed text-justify">
                <p>
                  I&apos;m passionate software engineer and recent MS in
                  Computer Science graduate from Boston University, with
                  hands-on experience in building scalable, user-centric
                  applications.
                </p>
                <p>
                  At Klaar Digital Solutions, I spearheaded development of a
                  SaaS Surveys module that generated $200K ARR for Fortune 500
                  clients, and I now lead a React development team at IpserLab,
                  mentoring engineers and driving project success.
                </p>
                <p>
                I combine attention to detail, technical rigor, and practical industry experience to craft clean, innovative, and maintainable software.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What I Do and Key Strengths - Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - What I Do */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-7 text-text-primary">
                What I Do
              </h3>
              <div className="space-y-4">
                {interests.map((interest, index) => {
                  const Icon = interest.icon;
                  return (
                    <motion.div
                      key={interest.title}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-text-primary mb-2">
                          {interest.title}
                        </h4>
                        <p className="text-text-secondary text-sm leading-relaxed">
                          {interest.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Key Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="glass p-6 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-text-primary">
                Key Strengths
              </h3>
              <div className="space-y-4">
                {[
                  "Problem Solving",
                  "Team Leadership",
                  "Code Review",
                  "System Design",
                  "Mentoring",
                  "Performance Optimization",
                ].map((strength, index) => (
                  <motion.div
                    key={strength}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-secondary-400 to-accent-400 rounded-full flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                      {strength}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
