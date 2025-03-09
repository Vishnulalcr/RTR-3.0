"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Experience {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
  color: string
}

interface ExperienceSliderProps {
  experiences: Experience[]
}

export default function ExperienceSlider({ experiences }: ExperienceSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length)
    }, 5000)
  }

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
  }

  useEffect(() => {
    startAutoplay()
    return () => stopAutoplay()
  }, [])

  const nextSlide = () => {
    stopAutoplay()
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length)
    startAutoplay()
  }

  const prevSlide = () => {
    stopAutoplay()
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + experiences.length) % experiences.length)
    startAutoplay()
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  return (
    <div className="relative h-[500px] overflow-hidden">
      <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Previous experience"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Next experience"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>

      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          <div className="relative h-full">
            <Image
              src={experiences[currentIndex].image || "/placeholder.svg"}
              alt={experiences[currentIndex].title}
              fill
              className="object-cover"
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${experiences[currentIndex].color} opacity-70`} />

            <div className="absolute inset-0 flex items-end p-8 md:p-12">
              <div className="max-w-md">
                <p className="text-white/80 mb-2">{experiences[currentIndex].subtitle}</p>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{experiences[currentIndex].title}</h3>
                <p className="text-white/90">{experiences[currentIndex].description}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-2">
          {experiences.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                stopAutoplay()
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
                startAutoplay()
              }}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/30"
              }`}
              aria-label={`Go to experience ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

