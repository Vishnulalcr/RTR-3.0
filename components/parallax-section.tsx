"use client"

import { useRef, type ReactNode } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: ReactNode
  offset?: number[]
  speed?: number
  bgColor?: string
}

export default function ParallaxSection({
  children,
  offset = [0, 1],
  speed = 0.2,
  bgColor = "bg-[#F5F7F9]",
}: ParallaxSectionProps) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, offset, [speed * 100, -speed * 100])

  return (
    <section ref={ref} className={`relative overflow-hidden py-32 px-4 ${bgColor}`}>
      <motion.div style={{ y }} className="relative z-10">
        {children}
      </motion.div>
    </section>
  )
}

