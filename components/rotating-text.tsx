"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

interface RotatingTextProps {
  text: string
}

export default function RotatingText({ text }: RotatingTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const chars = text.split("")
    const radius = 50
    const fontSize = 10

    // Clear any existing content
    container.innerHTML = ""

    // Create and position each character
    chars.forEach((char, i) => {
      const span = document.createElement("span")
      span.innerText = char
      span.style.position = "absolute"
      span.style.height = `${radius}px`
      span.style.transformOrigin = `0 0`
      span.style.width = `${fontSize}px`
      span.style.fontSize = `${fontSize}px`
      span.style.fontWeight = "bold"
      span.style.color = "white"

      const angle = (i / chars.length) * Math.PI * 2
      const rotate = (angle * 180) / Math.PI

      span.style.transform = `rotate(${rotate}deg) translateY(-${radius}px)`

      container.appendChild(span)
    })
  }, [text])

  return (
    <motion.div
      ref={containerRef}
      className="relative w-[120px] h-[120px]"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    />
  )
}

