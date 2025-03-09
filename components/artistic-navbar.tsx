"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function ArtisticNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
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
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-4 backdrop-blur-md bg-black/20" : "py-6"
        }`}
      >
        <div className="container px-4 mx-auto flex items-center justify-between">
          <Link href="/" className="text-white text-2xl font-bold tracking-tighter">
            BEYOND
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-white hover:text-[#F59E0B] transition-colors">
              Destinations
            </Link>
            <Link href="#" className="text-white hover:text-[#F59E0B] transition-colors">
              Experiences
            </Link>
            <Link href="#" className="text-white hover:text-[#F59E0B] transition-colors">
              About
            </Link>
            <Link href="#" className="text-white hover:text-[#F59E0B] transition-colors">
              Journal
            </Link>
            <Link href="#" className="text-white hover:text-[#F59E0B] transition-colors">
              Contact
            </Link>
          </nav>

          <button className="md:hidden text-white" onClick={() => setIsOpen(true)} aria-label="Open menu">
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-50 flex flex-col"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <div className="container px-4 py-6 flex justify-between items-center">
              <Link href="/" className="text-white text-2xl font-bold tracking-tighter">
                BEYOND
              </Link>

              <button className="text-white" onClick={() => setIsOpen(false)} aria-label="Close menu">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center">
              <nav className="flex flex-col items-center space-y-8">
                {["Destinations", "Experiences", "About", "Journal", "Contact"].map((item) => (
                  <motion.div key={item} variants={itemVariants}>
                    <Link
                      href="#"
                      className="text-white text-4xl font-bold hover:text-[#F59E0B] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>

            <motion.div className="container px-4 py-8 text-white/50 text-center" variants={itemVariants}>
              &copy; {new Date().getFullYear()} Beyond Travel. All rights reserved.
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

