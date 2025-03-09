"use client"

import { useEffect, useState } from "react"
import { motion, type MotionValue } from "framer-motion"

interface CustomCursorProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
  variant: string
  text: string
}

export default function CustomCursor({ mouseX, mouseY, variant, text }: CustomCursorProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  if (isMobile) return null

  const variants = {
    default: {
      height: 32,
      width: 32,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      x: mouseX,
      y: mouseY,
      mixBlendMode: "difference" as const,
    },
    text: {
      height: 80,
      width: 80,
      backgroundColor: "rgba(79, 70, 229, 1)",
      border: "none",
      color: "white",
      x: mouseX,
      y: mouseY,
      mixBlendMode: "normal" as const,
    },
  }

  return (
    <motion.div
      className="fixed top-0 left-0 z-50 flex items-center justify-center rounded-full pointer-events-none"
      variants={variants}
      animate={variant}
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {variant === "text" && <span className="text-sm font-medium">{text}</span>}
    </motion.div>
  )
}

