"use client"

import { motion } from "framer-motion"

interface FloatingNavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
  onMenuToggle: () => void
}

export default function FloatingNavigation({ activeSection, onSectionChange, onMenuToggle }: FloatingNavigationProps) {
  const sections = [
    { id: "intro", label: "INTRO" },
    { id: "destinations", label: "DESTINATIONS" },
    { id: "experiences", label: "EXPERIENCES" },
    { id: "contact", label: "CONNECT" },
  ]

  return (
    <>
      {/* Mobile menu button */}
      <button onClick={onMenuToggle} className="fixed top-8 left-8 z-50 md:hidden" aria-label="Toggle menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 12H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 6H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Desktop navigation */}
      <motion.nav
        className="fixed top-1/2 left-8 transform -translate-y-1/2 z-50 hidden md:block"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <ul className="space-y-8">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => onSectionChange(section.id)}
                className={`relative text-sm font-medium transition-colors ${
                  activeSection === section.id ? "text-white" : "text-white/40 hover:text-white/70"
                }`}
              >
                {activeSection === section.id && (
                  <motion.span
                    className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full"
                    layoutId="navigationIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  )
}

