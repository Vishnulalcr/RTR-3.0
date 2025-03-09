"use client"

import { useEffect, useRef } from "react"

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Create audio element
    audioRef.current = new Audio("/ambient-background.mp3")

    if (audioRef.current) {
      audioRef.current.volume = 0.2
      audioRef.current.loop = true
      audioRef.current.play().catch((error) => {
        console.log("Audio playback prevented by browser", error)
      })
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  return null // This component doesn't render anything
}

