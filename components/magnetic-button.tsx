"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"

interface MagneticButtonProps {
  children: ReactNode
  onClick?: () => void
}

export default function MagneticButton({ children, onClick }: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const { clientX, clientY } = e
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect()

    const centerX = left + width / 2
    const centerY = top + height / 2

    const distanceX = clientX - centerX
    const distanceY = clientY - centerY

    // Calculate the magnetic pull (stronger when closer to center)
    const magneticPull = 0.4

    setPosition({
      x: distanceX * magneticPull,
      y: distanceY * magneticPull,
    })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.button
      ref={buttonRef}
      className="relative inline-block px-8 py-4 bg-white text-black font-bold overflow-hidden group"
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-white z-0" />
      <span className="absolute inset-0 bg-gradient-to-tr from-[#FF5470] via-[#5CE5D5] to-[#FFBD59] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
    </motion.button>
  )
}

