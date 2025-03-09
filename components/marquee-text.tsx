"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

export default function MarqueeText() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -1000])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 1000])

  const springX1 = useSpring(x1, { stiffness: 100, damping: 30 })
  const springX2 = useSpring(x2, { stiffness: 100, damping: 30 })

  return (
    <div ref={containerRef} className="py-12 bg-[#F59E0B] overflow-hidden">
      <div className="relative flex flex-col gap-4">
        <motion.div
          className="whitespace-nowrap text-[#0F172A] text-6xl md:text-8xl font-bold tracking-tighter"
          style={{ x: springX1 }}
        >
          {"DISCOVER • EXPLORE • EXPERIENCE • DISCOVER • EXPLORE • EXPERIENCE •"}
        </motion.div>

        <motion.div
          className="whitespace-nowrap text-[#0F172A] text-6xl md:text-8xl font-bold tracking-tighter"
          style={{ x: springX2 }}
        >
          {"IMMERSE • ADVENTURE • TRANSFORM • IMMERSE • ADVENTURE • TRANSFORM •"}
        </motion.div>
      </div>
    </div>
  )
}

