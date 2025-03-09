"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const currentYear = new Date().getFullYear()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
    }
  }

  return (
    <footer className="py-24 px-4 bg-[#F0E9DF]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="w-16 h-px bg-[#1A1A1A] opacity-50 mx-auto mb-16"
          initial={{ width: 0 }}
          whileInView={{ width: 64 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        ></motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-xl mb-6">The Raw Materials</h3>
            <p className="opacity-70 mb-6 leading-relaxed">
              Crafting extraordinary travel experiences through authentic connections and mindful exploration.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center hover:border-[#A05C2E] hover:bg-[#A05C2E]/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5 6.5H17.51"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center hover:border-[#A05C2E] hover:bg-[#A05C2E]/10 transition-all duration-300"
                aria-label="Twitter"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M23 3C22.0424 3.67548 20.9821 4.19211 19.86 4.53C19.2577 3.83751 18.4573 3.34669 17.567 3.12393C16.6767 2.90116 15.7395 2.9572 14.8821 3.28445C14.0247 3.61171 13.2884 4.1944 12.773 4.95372C12.2575 5.71303 11.9877 6.61234 12 7.53V8.53C10.2426 8.57557 8.50127 8.18581 6.93101 7.39545C5.36074 6.60508 4.01032 5.43864 3 4C3 4 -1 13 8 17C5.94053 18.398 3.48716 19.0989 1 19C10 24 21 19 21 7.5C20.9991 7.22145 20.9723 6.94359 20.92 6.67C21.9406 5.66349 22.6608 4.39271 23 3Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#1A1A1A]/20 flex items-center justify-center hover:border-[#A05C2E] hover:bg-[#A05C2E]/10 transition-all duration-300"
                aria-label="Pinterest"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 12C8 13.5913 8.63214 15.1174 9.75736 16.2426C10.8826 17.3679 12.4087 18 14 18C15.5913 18 17.1174 17.3679 18.2426 16.2426C19.3679 15.1174 20 13.5913 20 12C20 10.4087 19.3679 8.88258 18.2426 7.75736C17.1174 6.63214 15.5913 6 14 6C12.4087 6 10.8826 6.63214 9.75736 7.75736C8.63214 8.88258 8 10.4087 8 12Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5 20.5L10 15L4.5 11.5L10 8L8.5 2.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-lg mb-6">Explore</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="opacity-70 hover:opacity-100 transition-opacity inline-flex items-center group"
                >
                  About
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/destinations"
                  className="opacity-70 hover:opacity-100 transition-opacity inline-flex items-center group"
                >
                  Destinations
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/experiences"
                  className="opacity-70 hover:opacity-100 transition-opacity inline-flex items-center group"
                >
                  Experiences
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
              <li>
                <Link
                  href="/journal"
                  className="opacity-70 hover:opacity-100 transition-opacity inline-flex items-center group"
                >
                  Journal
                  <ArrowRight className="ml-2 h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-lg mb-6">Legal</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="opacity-70 hover:opacity-100 transition-opacity">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="opacity-70 hover:opacity-100 transition-opacity">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="opacity-70 hover:opacity-100 transition-opacity">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="md:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-lg mb-6">Newsletter</h3>
            <p className="opacity-70 mb-6">Subscribe to receive travel inspiration and exclusive offers.</p>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full bg-transparent border-b border-[#1A1A1A]/50 py-2 px-0 focus:outline-none focus:border-[#A05C2E]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="rounded-full bg-[#1A1A1A] hover:bg-[#A05C2E] text-white transition-all duration-300 w-full"
                >
                  Subscribe
                </Button>
              </form>
            ) : (
              <motion.div
                className="bg-[#A05C2E]/10 p-4 rounded-sm border border-[#A05C2E]/20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-[#A05C2E] font-medium">Thank you for subscribing!</p>
                <p className="text-sm opacity-70 mt-1">We'll be in touch with travel inspiration soon.</p>
              </motion.div>
            )}
          </motion.div>
        </div>

        <div className="text-center opacity-60 text-sm border-t border-[#1A1A1A]/10 pt-8">
          <p>&copy; {currentYear} The Raw Materials. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

