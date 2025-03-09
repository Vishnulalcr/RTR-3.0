"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
    }
  }

  return (
    <div className="max-w-md">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder:text-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
          </div>
          <Button type="submit" className="w-full bg-white text-primary hover:bg-white/90 rounded-full">
            Subscribe
          </Button>
          <p className="text-sm text-white/70">We respect your privacy. Unsubscribe at any time.</p>
        </form>
      ) : (
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="h-8 w-8 text-white" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">Thank You!</h4>
          <p className="text-white/80">
            You've successfully subscribed to our newsletter. Get ready for exclusive travel inspiration in your inbox!
          </p>
        </div>
      )}
    </div>
  )
}

