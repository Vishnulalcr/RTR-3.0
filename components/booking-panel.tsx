"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users } from "lucide-react"

interface BookingPanelProps {
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export default function BookingPanel({ onMouseEnter, onMouseLeave }: BookingPanelProps) {
  const [activeTab, setActiveTab] = useState("destination")

  const tabs = [
    { id: "destination", label: "Destination" },
    { id: "dates", label: "Dates" },
    { id: "travelers", label: "Travelers" },
  ]

  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-gradient-to-r from-primary to-purple-600 p-8">
        <h3 className="text-2xl font-bold text-white">Plan Your Journey</h3>
        <p className="text-white/80">Customize your perfect travel experience</p>
      </div>

      <div className="p-8">
        <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`pb-4 px-4 font-medium transition-colors ${
                activeTab === tab.id
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === "destination" && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Where would you like to go?
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search destinations..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Type of experience
              </label>
              <div className="grid grid-cols-2 gap-3">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 cursor-pointer hover:border-primary dark:hover:border-primary">
                  <h4 className="font-medium">Adventure</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Thrilling outdoor activities</p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 cursor-pointer hover:border-primary dark:hover:border-primary">
                  <h4 className="font-medium">Cultural</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Immersive local experiences</p>
                </div>
              </div>
            </div>

            <Button className="w-full">Continue</Button>
          </div>
        )}

        {activeTab === "dates" && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                When would you like to travel?
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Select dates"
                  className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Trip duration</label>
              <div className="grid grid-cols-3 gap-3">
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 cursor-pointer hover:border-primary dark:hover:border-primary text-center">
                  <h4 className="font-medium">Short</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">1-3 days</p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 cursor-pointer hover:border-primary dark:hover:border-primary text-center">
                  <h4 className="font-medium">Medium</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">4-7 days</p>
                </div>
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 cursor-pointer hover:border-primary dark:hover:border-primary text-center">
                  <h4 className="font-medium">Long</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">8+ days</p>
                </div>
              </div>
            </div>

            <Button className="w-full">Continue</Button>
          </div>
        )}

        {activeTab === "travelers" && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                How many travelers?
              </label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <select className="w-full pl-10 pr-4 py-3 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg focus:ring-2 focus:ring-primary appearance-none">
                  <option value="1">1 traveler</option>
                  <option value="2">2 travelers</option>
                  <option value="3">3 travelers</option>
                  <option value="4">4 travelers</option>
                  <option value="5+">5+ travelers</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Contact information
              </label>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg focus:ring-2 focus:ring-primary mb-3"
              />
              <input
                type="tel"
                placeholder="Phone number (optional)"
                className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border-0 rounded-lg focus:ring-2 focus:ring-primary"
              />
            </div>

            <Button className="w-full">Request Booking</Button>
          </div>
        )}
      </div>
    </motion.div>
  )
}

