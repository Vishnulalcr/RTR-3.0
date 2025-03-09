"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface Destination {
  id: number
  name: string
  country: string
  description: string
  image: string
  color: string
}

interface DestinationGridProps {
  destinations: Destination[]
}

export default function DestinationGrid({ destinations }: DestinationGridProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {destinations.map((destination) => (
        <motion.div key={destination.id} className="group cursor-pointer" variants={itemVariants}>
          <Link href="#">
            <div className="relative overflow-hidden">
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-30 transition-opacity duration-700 group-hover:opacity-50"
                  style={{ backgroundColor: destination.color }}
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-1">{destination.name}</h3>
                <p className="text-white/80 mb-4">{destination.country}</p>
                <div className="flex items-center opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="mr-2">Explore</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}

