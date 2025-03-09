"use client"

import { useRef, type ReactNode } from "react"
import { motion, useInView } from "framer-motion"

interface TextRevealProps {
  children: ReactNode
}

export default function TextReveal({ children }: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

