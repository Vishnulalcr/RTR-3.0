"use client"

import { motion } from "framer-motion"

interface ScrollingTextProps {
  text: string
  speed?: number
  className?: string
}

export default function ScrollingText({
  text,
  speed = -20,
  className = "py-8 bg-[#A05C2E] text-white overflow-hidden",
}: ScrollingTextProps) {
  // Duplicate the text to create a seamless loop
  const repeatedText = `${text} • ${text} • ${text} • `

  return (
    <div className={className}>
      <div className="relative whitespace-nowrap flex">
        <motion.div
          className="text-2xl md:text-3xl font-serif tracking-tight"
          animate={{ x: `${speed}%` }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            duration: 20,
          }}
        >
          {repeatedText}
        </motion.div>
        <motion.div
          className="text-2xl md:text-3xl font-serif tracking-tight absolute left-full"
          animate={{ x: `${speed}%` }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            duration: 20,
          }}
        >
          {repeatedText}
        </motion.div>
      </div>
    </div>
  )
}

