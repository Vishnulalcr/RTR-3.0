"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface CircleButtonProps {
  children: ReactNode
  onClick?: () => void
}

export default function CircleButton({ children, onClick }: CircleButtonProps) {
  return (
    <motion.button
      className="relative inline-flex items-center justify-center overflow-hidden group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      <span className="relative z-10 px-8 py-4 text-white font-medium">{children}</span>
      <span className="absolute inset-0 bg-[#F59E0B] rounded-full"></span>
      <span className="absolute top-0 left-0 w-full h-full bg-white rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
      <motion.span
        className="absolute top-0 left-0 w-full h-full rounded-full border border-white/30"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      ></motion.span>
    </motion.button>
  )
}

