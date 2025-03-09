"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function MagazineNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

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
          isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-6"
        }`}
      >
        <div className="container px-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className={isScrolled ? "text-gray-900" : "text-white"}>
              Experiential<span className="text-primary">Travel</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
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
                Magazine
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className={`p-2 rounded-full ${isScrolled ? "hover:bg-gray-100" : "hover:bg-white/10"}`}
                aria-label="Search"
              >
                <Search className={isScrolled ? "text-gray-900" : "text-white"} size={20} />
              </button>
              <Button
                className={`rounded-full ${
                  isScrolled
                    ? "bg-primary hover:bg-primary/90 text-white"
                    : "bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white border border-white/30"
                }`}
              >
                Book Now
              </Button>
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className={`p-2 ${isScrolled ? "text-gray-900" : "text-white"}`}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
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
            <div className="flex justify-end p-6">
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col items-center justify-center h-full space-y-8 -mt-20">
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
                Magazine
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

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setIsSearchOpen(false)}
              aria-label="Close search"
            >
              <X size={24} />
            </button>
            <div className="w-full max-w-3xl">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search destinations, experiences, or articles..."
                  className="w-full bg-transparent border-b-2 border-white text-white text-xl py-4 px-2 focus:outline-none placeholder:text-white/70"
                  autoFocus
                />
                <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white" size={24} />
              </div>
              <div className="mt-8 text-white">
                <h3 className="text-lg font-medium mb-4">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
                    Bali Retreats
                  </Button>
                  <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
                    Safari Adventures
                  </Button>
                  <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
                    Mediterranean Cruises
                  </Button>
                  <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
                    Northern Lights
                  </Button>
                  <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
                    Culinary Tours
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

