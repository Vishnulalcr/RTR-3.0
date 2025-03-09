"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Twitter, Facebook, Youtube, ArrowRight } from "lucide-react"

export default function ModernFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white pt-24 pb-12 overflow-hidden">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <motion.div
            className="md:col-span-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Beyond<span className="text-primary">Travel</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Transformative journeys that connect you with the world's most extraordinary places and cultures.
              Experience travel beyond the ordinary.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-primary">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  Destinations
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  Experiences
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  Travel Guides
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  Travel Stories
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-primary">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  About Us
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  Our Team
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  Sustainability
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                  Careers
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4 text-primary">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for exclusive travel inspiration and offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border-0 rounded-l-lg px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary flex-grow"
              />
              <button className="bg-primary hover:bg-primary/90 text-white rounded-r-lg px-4">
                <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">&copy; {currentYear} BeyondTravel. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

