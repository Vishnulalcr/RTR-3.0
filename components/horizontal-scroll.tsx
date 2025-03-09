"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

interface Destination {
  id: number
  name: string
  tagline: string
  image: string
  color: string
}

interface HorizontalScrollProps {
  destinations: Destination[]
}

export default function HorizontalScroll({ destinations }: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToDestination = (index: number) => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.scrollWidth * (index / destinations.length)
      containerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      })
      setActiveIndex(index)
    }
  }

  const nextDestination = () => {
    const newIndex = (activeIndex + 1) % destinations.length
    scrollToDestination(newIndex)
  }

  const prevDestination = () => {
    const newIndex = (activeIndex - 1 + destinations.length) % destinations.length
    scrollToDestination(newIndex)
  }

  return (
    <section className="relative h-[80vh] bg-white overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="absolute top-1/2 left-6 z-20 transform -translate-y-1/2">
        <button
          onClick={prevDestination}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Previous destination"
        >
          <ChevronLeft size={24} />
        </button>
      </div>

      <div className="absolute top-1/2 right-6 z-20 transform -translate-y-1/2">
        <button
          onClick={nextDestination}
          className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Next destination"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div ref={containerRef} className="flex h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar">
        {destinations.map((destination, index) => (
          <div key={destination.id} className="flex-shrink-0 w-full h-full snap-center">
            <div className="h-full flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 h-1/2 md:h-full relative" style={{ backgroundColor: destination.color }}>
                <div className="absolute inset-0 flex items-center justify-center p-8 md:p-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-white max-w-xl"
                  >
                    <h3 className="text-4xl md:text-6xl font-bold mb-4">{destination.name}</h3>
                    <p className="text-xl md:text-2xl opacity-90 mb-8">{destination.tagline}</p>
                    <Button className="bg-white text-gray-900 hover:bg-white/90 rounded-full group" size="lg">
                      Explore Destination
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </div>
              </div>
              <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2">
          {destinations.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToDestination(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === activeIndex ? "bg-primary" : "bg-gray-300"
              }`}
              aria-label={`Go to destination ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

