"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HelloPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="bg-[#F6F1E9] text-[#1A1A1A] min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 -z-10"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <Image
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1931&auto=format&fit=crop"
          alt="World map"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div
        className="w-16 h-px bg-[#1A1A1A] opacity-50 mb-16"
        initial={{ width: 0 }}
        animate={{ width: 64 }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>

      <motion.div
        className="text-center max-w-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <h1 className="font-serif text-5xl md:text-6xl mb-8 leading-tight">Hello</h1>
        <p className="text-lg opacity-80 mb-12 max-w-md mx-auto leading-relaxed">
          Welcome to The Raw Materials, where we craft extraordinary travel experiences through authentic connections.
        </p>
        <Button
          asChild
          variant="outline"
          className="rounded-full border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F6F1E9] transition-all duration-300"
        >
          <Link href="/">
            Enter
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-0 right-0 text-center opacity-60 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <p>&copy; {new Date().getFullYear()} The Raw Materials</p>
      </motion.div>
    </main>
  )
}

