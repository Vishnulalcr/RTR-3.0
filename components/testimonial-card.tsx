"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  location: string
  image: string
  text: string
}

interface TestimonialCardProps {
  testimonial: Testimonial
  index: number
}

export default function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-muted p-8 rounded-xl relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
    >
      <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative h-16 w-16 rounded-full overflow-hidden">
          <Image src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} fill className="object-cover" />
        </div>
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
        </div>
      </div>
      <p className="text-muted-foreground">"{testimonial.text}"</p>
    </motion.div>
  )
}

