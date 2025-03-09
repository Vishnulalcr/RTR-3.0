"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function ParallaxBackground() {
  const ref = useRef(null)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 500])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 700])
  const opacity1 = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div ref={ref} className="absolute inset-0 -z-10 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#E0F2FE] to-[#F5F7F9]"></div>

      {/* Parallax layers */}
      <motion.div className="absolute inset-0" style={{ y: y1, opacity: opacity1 }}>
        <Image
          src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?q=80&w=2033&auto=format&fit=crop"
          alt="Ocean background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </motion.div>

      <motion.div className="absolute inset-0" style={{ y: y2 }}>
        <div className="absolute inset-0 bg-[#0891B2]/5"></div>
        <div className="absolute top-[10%] right-[20%] w-96 h-96 rounded-full bg-[#0891B2]/10 blur-3xl"></div>
        <div className="absolute bottom-[30%] left-[10%] w-80 h-80 rounded-full bg-[#06b6d4]/10 blur-3xl"></div>
      </motion.div>

      <motion.div className="absolute inset-0 pointer-events-none" style={{ y: y3 }}>
        <svg
          className="absolute top-[20%] left-[5%] w-full h-full opacity-[0.03]"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0891B2"
            d="M41.9,-71.3C53.5,-65.8,61.9,-52.7,68.9,-39.1C75.9,-25.5,81.5,-12.7,81.2,-0.2C80.9,12.4,74.8,24.8,67.1,35.8C59.4,46.8,50.2,56.5,38.8,63.5C27.4,70.5,13.7,74.8,-0.2,75.1C-14,75.5,-28.1,71.9,-40.6,65C-53.1,58.1,-64.1,47.9,-70.8,35.3C-77.5,22.7,-79.9,7.7,-78.1,-6.7C-76.3,-21.1,-70.3,-35,-61.1,-46.4C-51.9,-57.8,-39.5,-66.8,-26.5,-71.2C-13.5,-75.6,-0.1,-75.5,13.2,-74.1C26.5,-72.7,30.3,-76.9,41.9,-71.3Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          className="absolute bottom-[10%] right-[10%] w-full h-full opacity-[0.02]"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#0891B2"
            d="M47.7,-79.9C62.3,-72.2,75.1,-60.9,83.1,-46.6C91.1,-32.3,94.3,-16.1,92.6,-1.1C90.9,14,84.2,28,75.1,39.7C66,51.4,54.5,60.8,41.5,67.9C28.5,75,14.2,79.8,-0.2,80.1C-14.7,80.5,-29.3,76.4,-42.6,69.3C-55.9,62.2,-67.8,52.1,-76.3,39.2C-84.8,26.3,-89.9,10.7,-88.8,-4.3C-87.7,-19.3,-80.4,-33.7,-70.4,-45.1C-60.4,-56.5,-47.7,-64.9,-34.5,-73.5C-21.3,-82.1,-7.6,-91,3.9,-97.5C15.3,-104,30.7,-108.1,43,-99.7C55.3,-91.3,64.6,-71.4,73.9,-56.8C83.2,-42.2,92.5,-32.9,93.1,-22.2C93.7,-11.5,85.6,0.1,81.1,13.1C76.6,26.1,75.7,40.5,68.4,50.8C61.1,61.1,47.4,67.3,33.7,70.9C20,74.5,6.3,75.5,-6.9,75.3C-20.1,75.1,-33.8,73.7,-45.9,68.1C-58,62.5,-68.5,52.7,-76.1,40.5C-83.7,28.3,-88.3,13.7,-89.2,-1.5C-90.1,-16.7,-87.2,-32.3,-79.6,-44.8C-72,-57.3,-59.7,-66.7,-46,-74.2C-32.3,-81.7,-17.3,-87.3,-1.2,-85.5C14.9,-83.7,31.8,-74.5,47.7,-79.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </motion.div>
    </div>
  )
}

