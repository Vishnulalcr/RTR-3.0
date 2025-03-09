"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface Experience {
  id: number
  title: string
  description: string
  color: string
  image: string
}

interface ExperienceCardProps {
  experience: Experience
  index: number
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative aspect-[3/4] overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div className="absolute inset-0" animate={{ scale: isHovered ? 1.1 : 1 }} transition={{ duration: 0.6 }}>
        <Image src={experience.image || "/placeholder.svg"} alt={experience.title} fill className="object-cover" />
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: isHovered ? 0.8 : 0.6 }}
          transition={{ duration: 0.4 }}
          style={{ backgroundColor: experience.color }}
        />
      </motion.div>

      <motion.div
        className="absolute inset-0 p-6 flex flex-col justify-end"
        animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="text-2xl font-bold text-white mb-4">{experience.title}</h3>
        <p className="text-white/80 text-sm">{experience.description}</p>
      </motion.div>

      <motion.div
        className="absolute inset-x-0 bottom-0 h-1"
        style={{ backgroundColor: experience.color }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ originX: 0 }}
      />
    </motion.div>
  )
}

