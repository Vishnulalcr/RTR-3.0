"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Search } from "lucide-react"

export default function ModernNavbar() {
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

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: {
        ease: "easeInOut",
        duration: 0.3,
      },
    },
  }

  const searchVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        ease: "easeInOut",
        duration: 0.2,
      },
    },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/10 backdrop-blur-md py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container px-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Beyond<span className="text-primary">Travel</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              <Link href="#" className="text-white hover:text-primary transition-colors">
                Destinations
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">
                Experiences
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#" className="text-white hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Search"
              >
                <Search className="text-white" size={20} />
              </button>
              <Link
                href="#"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-2 rounded-full hover:bg-white/20 transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-white" aria-label="Open menu">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-50 md:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex justify-end p-6">
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu" className="text-white">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center h-full space-y-8 -mt-20">
              {["Destinations", "Experiences", "About", "Contact"].map((item, i) => (
                <motion.div key={item} custom={i} variants={menuItemVariants} initial="hidden" animate="visible">
                  <Link
                    href="#"
                    className="text-3xl font-medium text-white hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}

              <motion.div custom={4} variants={menuItemVariants} initial="hidden" animate="visible">
                <Link
                  href="#"
                  className="mt-8 inline-block bg-primary text-white px-8 py-3 rounded-full"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
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

            <motion.div
              className="w-full max-w-3xl"
              variants={searchVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search destinations, experiences..."
                  className="w-full bg-transparent border-b-2 border-white/30 text-white text-2xl py-4 px-2 focus:outline-none focus:border-primary placeholder:text-white/50"
                  autoFocus
                />
                <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/70" size={24} />
              </div>

              <div className="mt-12 text-white">
                <h3 className="text-lg font-medium mb-4">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 cursor-pointer transition-colors">
                    Bali Retreats
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 cursor-pointer transition-colors">
                    Northern Lights
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 cursor-pointer transition-colors">
                    Safari Adventures
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 cursor-pointer transition-colors">
                    Ancient Temples
                  </span>
                  <span className="px-4 py-2 bg-white/10 rounded-full text-sm hover:bg-white/20 cursor-pointer transition-colors">
                    Island Hopping
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

