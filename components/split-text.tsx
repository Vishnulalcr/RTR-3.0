"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
}

export default function SplitText({ text, className, delay = 0 }: SplitTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const words = text.split(" ")

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  }

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, index) => (
        <motion.span key={index} className="inline-block mr-[0.25em] whitespace-nowrap" variants={child}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}

