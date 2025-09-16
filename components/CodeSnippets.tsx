'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CodeSnippet {
  id: string
  title: string
  language: string
  code: string
  position: { x: string; y: string }
  delay: number
}

export default function CodeSnippets() {
  const [activeSnippets, setActiveSnippets] = useState<CodeSnippet[]>([])
  const [currentSnippetIndex, setCurrentSnippetIndex] = useState(0)
  const [currentSet, setCurrentSet] = useState(0)

  const codeSnippets: CodeSnippet[] = [
    // Set 1: Python, Java, React, Node
    {
      id: 'python-function',
      title: 'Python Algorithm',
      language: 'py',
      code: `def process_data(items):
    valid = [x for x in items if x.active]
    scores = [x.score for x in valid]
    
    return {
        'count': len(valid),
        'avg': sum(scores) / len(scores),
        'top': len([s for s in scores if s > 90])
    }`,
      position: { x: '50%', y: '15%' },
      delay: 1
    },
    {
      id: 'spring-boot-api',
      title: 'Spring Boot API',
      language: 'java',
      code: `@RestController
public class UserAPI {
    @PostMapping("/users")
    public User create(@RequestBody User user) {
        return service.save(user);
    }
    
    @GetMapping("/users/{id}")
    public User get(@PathVariable Long id) {
        return service.find(id);
    }
}`,
      position: { x: '75%', y: '15%' },
      delay: 3
    },
    {
      id: 'react-component',
      title: 'React Component',
      language: 'tsx',
      code: `const App = () => {
  const skills = ['React', 'TypeScript'];
  
  return (
    <div>
      {skills.map(skill => 
        <Badge key={skill} name={skill} />
      )}
    </div>
  );
};`,
      position: { x: '50%', y: '45%' },
      delay: 5
    },
    {
      id: 'node-api',
      title: 'Node.js API',
      language: 'js',
      code: `app.post('/api/users', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.get('/api/users/:id', async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
});`,
      position: { x: '75%', y: '45%' },
      delay: 7
    },
    // Set 2: Docker, SQL, YAML, Bash
    {
      id: 'docker-config',
      title: 'Docker Setup',
      language: 'dockerfile',
      code: `FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD npm start`,
      position: { x: '50%', y: '15%' },
      delay: 1
    },
    {
      id: 'postgresql-query',
      title: 'PostgreSQL Query',
      language: 'sql',
      code: `SELECT name, COUNT(*) as total
FROM users u
JOIN orders o ON u.id = o.user_id
GROUP BY u.name
ORDER BY total DESC
LIMIT 5;`,
      position: { x: '75%', y: '15%' },
      delay: 3
    },
    {
      id: 'kubernetes-deployment',
      title: 'Kubernetes Deployment',
      language: 'yaml',
      code: `apiVersion: apps/v1
kind: Deployment
spec:
  replicas: 3
  template:
    spec:
      containers:
      - image: myapp:latest`,
      position: { x: '50%', y: '45%' },
      delay: 5
    },
    {
      id: 'bash-automation',
      title: 'Automation Script',
      language: 'bash',
      code: `#!/bin/bash
git pull
npm run build
docker build -t app .
kubectl apply -f app.yaml`,
      position: { x: '75%', y: '45%' },
      delay: 7
    }
  ]

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []
    
    // Show 4 windows at a time, rotating between sets
    const startIndex = currentSet * 4
    const endIndex = startIndex + 4
    const currentSetSnippets = codeSnippets.slice(startIndex, endIndex)
    
    // Clear existing snippets
    setActiveSnippets([])
    
    // Show each snippet in the current set with delays
    currentSetSnippets.forEach((snippet, index) => {
      const timer = setTimeout(() => {
        setActiveSnippets(prev => {
          // Make sure we don't add duplicates
          if (prev.find(s => s.id === snippet.id)) {
            return prev
          }
          return [...prev, snippet]
        })
      }, (index + 1) * 500) // 0.5s, 1s, 1.5s, 2s
      timers.push(timer)
    })

    // Cleanup function to clear all timers
    return () => {
      timers.forEach(timer => clearTimeout(timer))
    }
  }, [currentSet])

  // Simple timer to rotate sets every 12 seconds
  useEffect(() => {
    const rotateTimer = setInterval(() => {
      setCurrentSet(prev => (prev + 1) % 2) // Toggle between set 0 and set 1
    }, 15000) // 15 seconds per set

    return () => clearInterval(rotateTimer)
  }, [])

  const getLanguageColor = (language: string) => {
    const colors = {
      tsx: '#61DAFB',
      py: '#3776AB',
      js: '#F7DF1E',
      dockerfile: '#2496ED',
      java: '#ED8B00',
      sql: '#336791',
      yaml: '#CB171E',
      bash: '#4EAA25'
    }
    return colors[language as keyof typeof colors] || '#FF4D00'
  }

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
              y: 50
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: -50
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.2
            }}
          >
                   {/* Code Window */}
                   <div className="w-80 bg-background-dark/95 backdrop-blur-md border border-background-border rounded-lg shadow-2xl overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-background-black/50 border-b border-background-border">
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
                     <div className="p-3">
                       <pre className="text-xs font-mono text-text-primary leading-tight overflow-hidden">
                         <TypewriterCode 
                           code={snippet.code} 
                           delay={index * 500} 
                         />
                       </pre>
                     </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

// Typewriter effect for code
function TypewriterCode({ code, delay }: { code: string; delay: number }) {
  const [displayedCode, setDisplayedCode] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  // Reset when code changes
  useEffect(() => {
    setDisplayedCode('')
    setCurrentIndex(0)
  }, [code])

  useEffect(() => {
    if (currentIndex < code.length) {
      // Initial delay only for the first character, then consistent typing speed
      const typingDelay = currentIndex === 0 ? delay : 50
      const timer = setTimeout(() => {
        setDisplayedCode(code.slice(0, currentIndex + 1))
        setCurrentIndex(prev => prev + 1)
      }, typingDelay)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, code, delay])

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
  )
}
