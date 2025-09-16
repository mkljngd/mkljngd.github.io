'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CodeAnimations() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])


  const binaryChars = ['0', '1']

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">

      {/* Mouse-Responsive Code Particles */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-500/30 rounded-full"
            animate={{
              x: mousePosition.x + (Math.cos(i * 45 * Math.PI / 180) * 50),
              y: mousePosition.y + (Math.sin(i * 45 * Math.PI / 180) * 50),
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>


    </div>
  )
}
