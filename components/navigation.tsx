"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Compass, Menu, X, Search, User, Globe } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("home")

  // Track scroll position for animation
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate navbar properties based on scroll
  const navbarOpacity = Math.min(0.95, 0.8 + scrollY / 1000)
  const navbarScale = Math.max(0.95, 1 - scrollY / 2000)
  const navbarY = Math.min(16, scrollY / 20)

  const menuItems = [
    { id: "home", label: "Home", href: "/", icon: <Globe className="w-5 h-5" /> },
    { id: "destinations", label: "Destinations", href: "/destinations", icon: <Compass className="w-5 h-5" /> },
    { id: "experiences", label: "Experiences", href: "/experiences", icon: <Search className="w-5 h-5" /> },
    { id: "journal", label: "Journal", href: "/journal", icon: <User className="w-5 h-5" /> },
  ]

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div
          className="bg-white/80 backdrop-blur-lg rounded-full shadow-lg px-3 py-3 flex items-center justify-between max-w-5xl w-full"
          style={{
            opacity: navbarOpacity,
            scale: navbarScale,
            y: navbarY,
          }}
          transition={{ duration: 0.2 }}
        >
          <Link href="/" className="flex items-center px-4">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0891B2] to-[#06b6d4] flex items-center justify-center">
                <span className="text-white font-serif text-xl">R</span>
              </div>
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#0891B2] to-[#06b6d4] opacity-30 blur-sm -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
            </div>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className={`relative px-5 py-2 rounded-full flex items-center transition-all duration-300 ${
                      activeItem === item.id ? "text-[#0891B2]" : "text-[#0F172A]/70 hover:text-[#0891B2]"
                    }`}
                    onClick={() => setActiveItem(item.id)}
                  >
                    {activeItem === item.id && (
                      <motion.div
                        className="absolute inset-0 bg-[#0891B2]/10 rounded-full -z-10"
                        layoutId="activeBackground"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center space-x-1">
            <Link
              href="/contact"
              className="hidden md:flex items-center bg-gradient-to-r from-[#0891B2] to-[#06b6d4] text-white px-6 py-2 rounded-full hover:shadow-md transition-all duration-300"
            >
              Book Now
            </Link>

            <button
              className="md:hidden w-10 h-10 rounded-full bg-[#0891B2]/10 flex items-center justify-center text-[#0891B2]"
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </motion.div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/20 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              className="relative ml-auto w-full max-w-sm h-full bg-white shadow-xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              <div className="p-6 flex justify-between items-center border-b">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0891B2] to-[#06b6d4] flex items-center justify-center mr-3">
                    <span className="text-white font-serif text-xl">R</span>
                  </div>
                  <span className="font-serif text-xl">Raw Materials</span>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="w-10 h-10 rounded-full bg-[#0891B2]/10 flex items-center justify-center text-[#0891B2]"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6">
                <nav>
                  <ul className="space-y-6">
                    {menuItems.map((item, index) => (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className="flex items-center py-3 px-4 rounded-xl bg-[#F5F7F9] hover:bg-[#0891B2]/10 transition-colors"
                          onClick={() => {
                            setActiveItem(item.id)
                            setIsOpen(false)
                          }}
                        >
                          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm">
                            {item.icon}
                          </div>
                          <span className="text-lg font-medium">{item.label}</span>
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                <div className="mt-12 space-y-6">
                  <h3 className="text-sm uppercase tracking-wider text-[#0F172A]/50 font-medium">
                    Featured Destinations
                  </h3>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href="/destinations/santorini"
                        className="block py-2 hover:text-[#0891B2] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Santorini, Greece
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/destinations/maldives"
                        className="block py-2 hover:text-[#0891B2] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Maldives
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/destinations/new-zealand"
                        className="block py-2 hover:text-[#0891B2] transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        New Zealand
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="p-6 border-t">
                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-[#0891B2] to-[#06b6d4] text-white py-3 rounded-xl text-center font-medium hover:shadow-md transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Book Your Journey
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

