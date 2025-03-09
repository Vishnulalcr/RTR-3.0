"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  location: string
  image: string
  text: string
  rating: number
}

interface TestimonialSliderProps {
  testimonials: Testimonial[]
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextTestimonial = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.5,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.5,
      rotateY: direction > 0 ? -45 : 45,
      transition: {
        duration: 0.8,
      },
    }),
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 z-10">
        <button
          onClick={prevTestimonial}
          className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
      </div>

      <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 z-10">
        <button
          onClick={nextTestimonial}
          className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="overflow-hidden h-[400px] perspective">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute w-full"
          >
            <div className="bg-muted p-8 md:p-12 rounded-2xl shadow-lg">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex flex-col items-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4">
                    <Image
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-center">{testimonials[currentIndex].name}</h4>
                  <p className="text-muted-foreground text-center">{testimonials[currentIndex].location}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <div className="md:w-2/3">
                  <svg className="h-10 w-10 text-primary/20 mb-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg md:text-xl italic mb-6">{testimonials[currentIndex].text}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1)
              setCurrentIndex(index)
            }}
            className={`w-3 h-3 mx-1 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-gray-300"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

