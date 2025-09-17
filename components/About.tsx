"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import {
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

        {/* My Journey - With Code Animation */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12">
          {/* Left Column - Code Animation */}
          <div className="relative h-96 hidden lg:block">
            <SimplifiedCodeAnimation inView={inView} />
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

// Code snippet interface and data
interface CodeSnippet {
  id: string;
  title: string;
  language: string;
  code: string;
  position: { x: string; y: string };
}

const codeSnippets: CodeSnippet[] = [
    {
      id: 'react-component',
      title: 'React Component',
      language: 'tsx',
      code: `const Portfolio = () => {
  const [skills, setSkills] = useState([]);
  
  useEffect(() => {
    fetchSkills().then(setSkills);
  }, []);
  
  return (
    <div className="portfolio">
      {skills.map(skill => 
        <SkillCard key={skill.id} {...skill} />
      )}
    </div>
  );
};`,
      position: { x: '10%', y: '20%' }
    },
    {
      id: 'python-algorithm',
      title: 'Python Data Processing',
      language: 'py',
      code: `def analyze_performance(data):
    metrics = {
        'total': len(data),
        'success_rate': sum(1 for x in data if x.success) / len(data),
        'avg_response_time': sum(x.time for x in data) / len(data)
    }
    
    return {
        **metrics,
        'grade': 'A' if metrics['success_rate'] > 0.95 else 'B'
    }`,
      position: { x: '10%', y: '20%' }
    },
    {
      id: 'node-api',
      title: 'Node.js API',
      language: 'js',
      code: `app.post('/api/projects', async (req, res) => {
  try {
    const project = await Project.create({
      ...req.body,
      userId: req.user.id
    });
    
    await project.populate('technologies');
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});`,
      position: { x: '10%', y: '20%' }
    },
    {
      id: 'docker-config',
      title: 'Docker Configuration',
      language: 'dockerfile',
      code: `FROM node:18-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]`,
      position: { x: '10%', y: '20%' }
    }
  ];

// Simplified Code Animation Component - Shows only 1 window at a time
function SimplifiedCodeAnimation({ inView }: { inView: boolean }) {
  const [activeSnippets, setActiveSnippets] = useState<CodeSnippet[]>([]);
  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    if (!inView) return;

    // Clear existing snippets
    setActiveSnippets([]);
    
    // Show only one snippet at a time
    const currentSnippet = codeSnippets[currentSet];
    
    const timer = setTimeout(() => {
      setActiveSnippets([currentSnippet]);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [currentSet, inView]);

  // Rotate through all 4 snippets every 15 seconds
  useEffect(() => {
    if (!inView) return;

    const rotateTimer = setInterval(() => {
      setCurrentSet(prev => (prev + 1) % 4); // Cycle through all 4 snippets
    }, 15000);

    return () => clearInterval(rotateTimer);
  }, [inView]);

  const getLanguageColor = (language: string) => {
    const colors = {
      tsx: '#61DAFB',
      py: '#3776AB',
      js: '#F7DF1E',
      dockerfile: '#2496ED'
    };
    return colors[language as keyof typeof colors] || '#FF4D00';
  };

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <AnimatePresence>
        {activeSnippets.map((snippet, index) => (
          <motion.div
            key={snippet.id}
            className="absolute pointer-events-auto"
            style={{
              left: snippet.position.x,
              top: snippet.position.y
            }}
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 30
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: -30
            }}
            transition={{
              duration: 0.6
            }}
          >
            {/* Code Window */}
            <div className="glass p-6 rounded-2xl overflow-hidden min-w-[500px]">
              {/* Window Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-background-border/30">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/80"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/80"></div>
                  </div>
                  <span className="text-xs text-text-secondary font-medium">
                    {snippet.title}
                  </span>
                </div>
                <div 
                  className="text-[10px] px-1.5 py-0.5 rounded text-background-black font-medium"
                  style={{ backgroundColor: getLanguageColor(snippet.language) }}
                >
                  {snippet.language}
                </div>
              </div>
              
              {/* Code Content */}
              <div>
                <pre className="text-xs font-mono text-text-primary leading-tight overflow-hidden">
                  <TypewriterCode 
                    code={snippet.code} 
                    delay={200} 
                  />
                </pre>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// Typewriter effect for code
function TypewriterCode({ code, delay }: { code: string; delay: number }) {
  const [displayedCode, setDisplayedCode] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset when code changes
  useEffect(() => {
    setDisplayedCode('');
    setCurrentIndex(0);
  }, [code]);

  useEffect(() => {
    if (currentIndex < code.length) {
      const typingDelay = currentIndex === 0 ? delay : 30;
      const timer = setTimeout(() => {
        setDisplayedCode(code.slice(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }, typingDelay);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, code, delay]);

  return (
    <span>
      {displayedCode}
      {currentIndex < code.length && (
        <motion.span
          className="text-primary-500"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          |
        </motion.span>
      )}
    </span>
  );
}
