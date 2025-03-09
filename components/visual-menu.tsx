"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { X } from "lucide-react"

interface VisualMenuProps {
  onClose: () => void
}

export default function VisualMenu({ onClose }: VisualMenuProps) {
  const menuItems = [
    {
      label: "DESTINATIONS",
      image: "/placeholder.svg?height=600&width=400",
      href: "#destinations",
    },
    {
      label: "EXPERIENCES",
      image: "/placeholder.svg?height=600&width=400",
      href: "#experiences",
    },
    {
      label: "ABOUT US",
      image: "/placeholder.svg?height=600&width=400",
      href: "#about",
    },
    {
      label: "JOURNAL",
      image: "/placeholder.svg?height=600&width=400",
      href: "#journal",
    },
    {
      label: "CONNECT",
      image: "/placeholder.svg?height=600&width=400",
      href: "#contact",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md"
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <button onClick={onClose} className="absolute top-8 right-8 z-10 text-white" aria-label="Close menu">
        <X size={24} />
      </button>

      <div className="container h-full px-4 py-24 flex flex-col justify-center">
        <motion.h2 className="text-4xl font-bold text-white mb-12 text-center" variants={itemVariants}>
          EXPLORE
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.label}
              className="relative aspect-[3/4] overflow-hidden group cursor-pointer"
              variants={itemVariants}
              onClick={onClose}
            >
              <Link href={item.href} className="block h-full">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 z-10" />
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h3 className="text-white text-xl font-bold">{item.label}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

