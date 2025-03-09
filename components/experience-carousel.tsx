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

interface ExperienceCarouselProps {
  experiences: Experience[]
}

export default function ExperienceCarousel({ experiences }: ExperienceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoplay = () => {
    intervalRef.current = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length)
    }, 6000)
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
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  }

  return (
    <div className="relative">
      <div className="absolute top-1/2 left-4 z-10 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Previous experience"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 z-10 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
          aria-label="Next experience"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </div>

      <div className="overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative"
          >
            <div className="aspect-[16/9] relative">
              <Image
                src={experiences[currentIndex].image || "/placeholder.svg"}
                alt={experiences[currentIndex].title}
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0 opacity-60"
                style={{ backgroundColor: experiences[currentIndex].color }}
              />

              <div className="absolute inset-0 flex items-end p-8 md:p-16">
                <div className="max-w-2xl">
                  <p className="text-white/80 text-lg mb-2">{experiences[currentIndex].subtitle}</p>
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">{experiences[currentIndex].title}</h3>
                  <p className="text-white/90 text-lg">{experiences[currentIndex].description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8">
        {experiences.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              stopAutoplay()
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
              startAutoplay()
            }}
            className={`w-3 h-3 mx-1 rounded-full transition-colors ${
              index === currentIndex ? "bg-[#F59E0B]" : "bg-white/30"
            }`}
            aria-label={`Go to experience ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

