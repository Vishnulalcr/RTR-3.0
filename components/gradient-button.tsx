"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface GradientButtonProps {
  children: ReactNode
  onClick?: () => void
}

export default function GradientButton({ children, onClick }: GradientButtonProps) {
  return (
    <motion.button
      className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white rounded-full group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <span className="absolute w-full h-full bg-gradient-to-br from-primary via-purple-500 to-pink-500"></span>
      <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 opacity-30 group-hover:rotate-90 ease"></span>
      <span className="relative text-lg font-medium">{children}</span>
    </motion.button>
  )
}

