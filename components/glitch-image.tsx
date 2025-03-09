"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"

interface GlitchImageProps {
  src: string
  alt: string
}

export default function GlitchImage({ src, alt }: GlitchImageProps) {
  const [isGlitching, setIsGlitching] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const triggerGlitch = () => {
      setIsGlitching(true)

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        setIsGlitching(false)
      }, 500)
    }

    // Trigger glitch effect randomly
    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        triggerGlitch()
      }
    }, 3000)

    return () => {
      clearInterval(interval)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" />

      {isGlitching && (
        <>
          <div
            className="absolute inset-0 bg-red-500 mix-blend-screen opacity-30"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 10%, 0 10%, 0 20%, 100% 20%, 100% 30%, 0 30%, 0 40%, 100% 40%, 100% 50%, 0 50%, 0 60%, 100% 60%, 100% 70%, 0 70%, 0 80%, 100% 80%, 100% 90%, 0 90%, 0 100%, 100% 100%)",
              transform: "translateX(10px)",
            }}
          />
          <div
            className="absolute inset-0 bg-blue-500 mix-blend-screen opacity-30"
            style={{
              clipPath:
                "polygon(0 5%, 100% 5%, 100% 15%, 0 15%, 0 25%, 100% 25%, 100% 35%, 0 35%, 0 45%, 100% 45%, 100% 55%, 0 55%, 0 65%, 100% 65%, 100% 75%, 0 75%, 0 85%, 100% 85%, 100% 95%, 0 95%)",
              transform: "translateX(-10px)",
            }}
          />
          <div
            className="absolute inset-0 bg-green-500 mix-blend-screen opacity-30"
            style={{
              clipPath:
                "polygon(0 2%, 100% 2%, 100% 12%, 0 12%, 0 22%, 100% 22%, 100% 32%, 0 32%, 0 42%, 100% 42%, 100% 52%, 0 52%, 0 62%, 100% 62%, 100% 72%, 0 72%, 0 82%, 100% 82%, 100% 92%, 0 92%)",
              transform: "translateY(5px)",
            }}
          />
        </>
      )}
    </div>
  )
}

