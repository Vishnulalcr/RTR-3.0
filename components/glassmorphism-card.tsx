"use client"

import { motion } from "framer-motion"
import { Map, Compass, Users } from "lucide-react"

interface GlassmorphismCardProps {
  icon: string
  title: string
  description: string
}

export default function GlassmorphismCard({ icon, title, description }: GlassmorphismCardProps) {
  const renderIcon = () => {
    switch (icon) {
      case "map":
        return <Map className="h-8 w-8 text-white" />
      case "compass":
        return <Compass className="h-8 w-8 text-white" />
      case "users":
        return <Users className="h-8 w-8 text-white" />
      default:
        return null
    }
  }

  return (
    <motion.div
      className="relative backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl overflow-hidden p-8 h-full"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full" />

      <div className="relative z-10">
        <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">{renderIcon()}</div>

        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/80">{description}</p>
      </div>
    </motion.div>
  )
}

