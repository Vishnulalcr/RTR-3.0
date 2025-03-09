"use client"

import { useRef, useState, useEffect, type ReactNode } from "react"
import { motion, useSpring } from "framer-motion"

interface MouseParallaxProps {
  children: ReactNode
  strength?: number
  className?: string
}

export default function MouseParallax({ children, strength = 0.05, className = "" }: MouseParallaxProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (!ref.current) return

    const updateDimensions = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return

      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left - dimensions.width / 2
      const y = e.clientY - rect.top - dimensions.height / 2

      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [dimensions])

  const springConfig = { damping: 25, stiffness: 150 }
  const xMotion = useSpring(mousePosition.x * strength, springConfig)
  const yMotion = useSpring(mousePosition.y * strength, springConfig)

  return (
    <motion.div ref={ref} className={className} style={{ x: xMotion, y: yMotion }}>
      {children}
    </motion.div>
  )
}

