"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-md py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container flex items-center justify-between px-4">
          <Link href="/" className="text-2xl font-bold">
            <span className={isScrolled ? "text-gray-900" : "text-white"}>Experiential Travel</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="#"
              className={`font-medium hover:opacity-80 transition-opacity ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Destinations
            </Link>
            <Link
              href="#"
              className={`font-medium hover:opacity-80 transition-opacity ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Experiences
            </Link>
            <Link
              href="#"
              className={`font-medium hover:opacity-80 transition-opacity ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Plan Your Trip
            </Link>
            <Link
              href="#"
              className={`font-medium hover:opacity-80 transition-opacity ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              About Us
            </Link>
            <Button
              className={`rounded-full ${
                isScrolled
                  ? "bg-primary hover:bg-primary/90 text-white"
                  : "bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30"
              }`}
            >
              Book Now
            </Button>
          </nav>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(true)} aria-label="Open menu">
            <Menu className={isScrolled ? "text-gray-900" : "text-white"} size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              <Link href="#" className="text-2xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                Destinations
              </Link>
              <Link href="#" className="text-2xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                Experiences
              </Link>
              <Link href="#" className="text-2xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                Plan Your Trip
              </Link>
              <Link href="#" className="text-2xl font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </Link>
              <Button
                size="lg"
                className="rounded-full bg-primary hover:bg-primary/90 text-white mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

