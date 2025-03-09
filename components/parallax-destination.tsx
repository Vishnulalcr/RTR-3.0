"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface Destination {
  id: number
  name: string
  image: string
  description: string
}

interface ParallaxDestinationProps {
  destination: Destination
  reverse?: boolean
}

export default function ParallaxDestination({ destination, reverse = false }: ParallaxDestinationProps) {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${reverse ? "md:flex-row-reverse" : ""}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className={reverse ? "md:order-2" : ""}>
        <motion.div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-2xl" style={{ scale }}>
          <motion.div style={{ y }} className="absolute inset-0">
            <Image src={destination.image || "/placeholder.svg"} alt={destination.name} fill className="object-cover" />
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className={reverse ? "md:order-1 md:pr-12" : "md:pl-12"}
        style={{ opacity }}
        initial={{ x: reverse ? -50 : 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-4">{destination.name}</h3>
        <p className="text-lg text-muted-foreground mb-6">{destination.description}</p>
        <Button className="group">
          Explore Destination
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>
    </motion.div>
  )
}

