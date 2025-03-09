"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Clock, Tag } from "lucide-react"

interface Experience {
  id: number
  title: string
  image: string
  description: string
  duration: string
  category: string
}

interface ParallaxExperienceProps {
  experience: Experience
  index: number
}

export default function ParallaxExperience({ experience, index }: ParallaxExperienceProps) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6])

  return (
    <motion.div
      ref={ref}
      className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="relative h-64 overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image src={experience.image || "/placeholder.svg"} alt={experience.title} fill className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center space-x-2 mb-2">
            <Tag className="h-4 w-4" />
            <span className="text-sm">{experience.category}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{experience.duration}</span>
          </div>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2">{experience.title}</h3>
        <p className="text-muted-foreground mb-6 flex-1">{experience.description}</p>
        <Button variant="outline" className="w-full mt-auto">
          View Details
        </Button>
      </div>
    </motion.div>
  )
}

