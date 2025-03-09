"use client"

import { type ReactNode, useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface PixelTransitionProps {
  children: ReactNode
}

export default function PixelTransition({ children }: PixelTransitionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Create a grid of pixels for the transition
  const gridSize = 10
  const pixels = []

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      pixels.push({ x: i, y: j })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div className="relative w-full h-full">
          {children}

          <motion.div
            className="absolute inset-0 z-20 pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <div className="relative w-full h-full grid grid-cols-10 grid-rows-10">
              {pixels.map((pixel, index) => (
                <motion.div
                  key={index}
                  className="bg-black"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + Math.random() * 0.5,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

