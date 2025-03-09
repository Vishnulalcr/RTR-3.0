"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

interface Destination {
  id: number
  name: string
  country: string
  description: string
  image: string
  color: string
}

interface DestinationCardProps {
  destination: Destination
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-xl group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
        <div className="w-1/3 relative h-32">
          <Image src={destination.image || "/placeholder.svg"} alt={destination.name} fill className="object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-r ${destination.color} opacity-70`} />
        </div>

        <div className="w-2/3 p-4">
          <h3 className="text-xl font-bold text-white">{destination.name}</h3>
          <p className="text-sm text-white/70 mb-2">{destination.country}</p>
          <p className="text-sm text-white/80">{destination.description}</p>
        </div>

        <div className="absolute right-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <ArrowRight className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

