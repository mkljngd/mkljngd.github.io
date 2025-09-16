import { useState, useEffect, useRef } from 'react'

interface UseTypewriterOptions {
  words: string[]
  typeSpeed?: number
  deleteSpeed?: number
  pauseTime?: number
  loop?: boolean
}

export function useTypewriter({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  pauseTime = 2000,
  loop = true
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const timeoutRef = useRef<NodeJS.Timeout>()

  // Check for reduced motion preference
  const prefersReducedMotion = useRef(
    typeof window !== 'undefined' && 
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    // If user prefers reduced motion, just show the first word
    if (prefersReducedMotion.current) {
      setDisplayText(words[0])
      return
    }

    const tick = () => {
      const currentWord = words[currentWordIndex]
      
      if (isDeleting) {
        setDisplayText(prev => prev.slice(0, -1))
      } else {
        setDisplayText(prev => currentWord.slice(0, prev.length + 1))
      }
    }

    const timer = setTimeout(tick, isDeleting ? deleteSpeed : typeSpeed)
    timeoutRef.current = timer

    return () => clearTimeout(timer)
  }, [currentWordIndex, displayText, isDeleting, words, typeSpeed, deleteSpeed])

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    
    if (!isDeleting && displayText === currentWord) {
      // Finished typing, pause then start deleting
      const pauseTimer = setTimeout(() => setIsDeleting(true), pauseTime)
      return () => clearTimeout(pauseTimer)
    } else if (isDeleting && displayText === '') {
      // Finished deleting, move to next word
      setIsDeleting(false)
      setCurrentWordIndex(prev => {
        const nextIndex = prev + 1
        return loop ? nextIndex % words.length : Math.min(nextIndex, words.length - 1)
      })
    }
  }, [currentWordIndex, displayText, isDeleting, words, pauseTime, loop])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return {
    text: displayText,
    currentWordIndex,
    isDeleting
  }
}