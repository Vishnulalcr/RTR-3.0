"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

interface ScrollingGalleryProps {
  images: string[]
}

export default function ScrollingGallery({ images }: ScrollingGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -500])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 500])

  const firstRow = images.slice(0, Math.ceil(images.length / 2))
  const secondRow = images.slice(Math.ceil(images.length / 2))

  return (
    <div ref={containerRef} className="overflow-hidden">
      <motion.div className="flex gap-4 mb-4" style={{ x: x1 }}>
        {firstRow.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-80 h-80 relative">
            <Image src={image || "/placeholder.svg"} alt={`Gallery image ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
        {/* Duplicate for infinite scroll effect */}
        {firstRow.map((image, index) => (
          <div key={`dup-${index}`} className="flex-shrink-0 w-80 h-80 relative">
            <Image src={image || "/placeholder.svg"} alt={`Gallery image ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </motion.div>

      <motion.div className="flex gap-4" style={{ x: x2 }}>
        {secondRow.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-80 h-80 relative">
            <Image
              src={image || "/placeholder.svg"}
              alt={`Gallery image ${index + firstRow.length + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
        {/* Duplicate for infinite scroll effect */}
        {secondRow.map((image, index) => (
          <div key={`dup-${index}`} className="flex-shrink-0 w-80 h-80 relative">
            <Image
              src={image || "/placeholder.svg"}
              alt={`Gallery image ${index + firstRow.length + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

