"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TextDistortionProps {
  text: string
  className?: string
}

export default function TextDistortion({ text, className = "" }: TextDistortionProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isAnimating, setIsAnimating] = useState(false)

  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}:"<>?|'

  useEffect(() => {
    let interval: NodeJS.Timeout

    const startAnimation = () => {
      setIsAnimating(true)

      let iterations = 0
      const maxIterations = 3

      interval = setInterval(() => {
        setDisplayText((prevText) => {
          return prevText
            .split("")
            .map((char, index) => {
              if (char === " ") return " "

              // Keep original character if we've reached max iterations or randomly
              if (iterations >= maxIterations || Math.random() < 0.5) {
                return text[index]
              }

              // Otherwise return a random character
              return characters[Math.floor(Math.random() * characters.length)]
            })
            .join("")
        })

        iterations++

        if (iterations >= maxIterations) {
          clearInterval(interval)
          setDisplayText(text)
          setIsAnimating(false)
        }
      }, 70)
    }

    startAnimation()

    return () => {
      clearInterval(interval)
    }
  }, [text])

  return (
    <motion.span className={className} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {displayText}
    </motion.span>
  )
}

