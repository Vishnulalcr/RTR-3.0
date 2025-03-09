"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface SplitSectionProps {
  leftContent: ReactNode
  rightContent: ReactNode
}

export default function SplitSection({ leftContent, rightContent }: SplitSectionProps) {
  return (
    <section className="relative py-24 overflow-hidden bg-white dark:bg-gray-900">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <svg
          className="absolute h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
          stroke="rgba(79, 70, 229, 0.1)"
          strokeWidth="0.5"
        >
          <polygon points="0,0 100,100 0,100" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            {leftContent}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            {rightContent}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

