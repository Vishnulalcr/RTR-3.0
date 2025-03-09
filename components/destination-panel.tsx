"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface Destination {
  id: number
  name: string
  description: string
  color: string
  image: string
  coordinates: {
    x: number
    y: number
  }
}

interface DestinationPanelProps {
  destination: Destination
}

export default function DestinationPanel({ destination }: DestinationPanelProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="absolute w-64 h-64 cursor-pointer"
      initial={{ 
        x: `calc(50% + ${destination.coordinates.x}%)`, 
        y: `calc(50% + ${destination.coordinates.y}%)`,
        opacity: 0
      }}
      animate={{ 
        x: `calc(50% + ${destination.coordinates.x}%)`, 
        y: `calc(50% + ${destination.coordinates.y}%)`,
        opacity: 1
      }}\
        y: `calc(50% + ${destination.coordinates.y}%)`,
        opacity: 1
      }}
      transition={{ duration: 0.8, delay: destination.id * 0.2 }}
      style={{ 
        translateX: '-50%', 
        translateY: '-50%' 
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="relative w-full h-full overflow-hidden"
        animate={{ 
          scale: isHovered ? 1.1 : 1,
          boxShadow: isHovered ? '0 20px 40px rgba(0, 0, 0, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.2)'
        }}
        transition={{ duration: 0.4 }}
      >
        <Image 
          src={destination.image || "/placeholder.svg"} 
          alt={destination.name}
          fill
          className="object-cover"
        />
        <div 
          className="absolute inset-0 opacity-60"
          style={{ backgroundColor: destination.color }}
        />
        
        <motion.div 
          className="absolute inset-0 p-6 flex flex-col justify-end"
          animate={{ opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
          <p className="text-white/80 text-sm mb-4">{destination.description}</p>
          
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-white text-sm mr-2">EXPLORE</span>
            <ArrowRight className="h-4 w-4 text-white" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

