"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function ExperimentalCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest("a") || target.closest("button")) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener("mousemove", mouseMove)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      window.removeEventListener("mouseover", handleMouseOver)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      mixBlendMode: "difference" as const,
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      mixBlendMode: "difference" as const,
    },
  }

  if (isMobile) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-50 rounded-full pointer-events-none"
        variants={variants}
        animate={isHovering ? "hover" : "default"}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="fixed top-0 left-0 z-50 rounded-full pointer-events-none bg-white"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          height: 8,
          width: 8,
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 40 }}
      />
    </>
  )
}

