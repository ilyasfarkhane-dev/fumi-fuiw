"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 250)
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0
      setScrollProgress(progress)
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onClick={scrollToTop}
          aria-label="Retour en haut"
          className="fixed left-12 top-1/2 z-[1000] flex flex-col items-center p-0 border-none bg-transparent cursor-pointer group"
          style={{ transform: "translateY(-50%)" }}
        >
          {/* Vertical 'Top' label */}
          <span className="flex flex-col items-center text-black font-semibold text-base leading-none select-none group-hover:text-gray-700 transition-colors duration-200">
           
           
            <span style={{ transform: 'rotate(270deg)' }}>p</span>
            <span style={{ transform: 'rotate(270deg)' }}>o</span>
             <span style={{ transform: 'rotate(270deg)' }}>T</span>
          </span>
          {/* Interactive vertical line with gray base and black fill */}
          <span className="relative flex flex-col items-center mt-1" style={{ height: 80 }}>
            {/* Gray base */}
            <span className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300 rounded" />
            {/* Green fill, height = scrollProgress * 100% */}
            <span
              className="absolute left-1/2 -translate-x-1/2 w-0.5 bg-[#134f4b] rounded transition-all duration-200"
              style={{ height: `${scrollProgress * 80}px`, bottom: 0 }}
            />
            {/* Spacer for layout */}
            <span className="invisible w-0.5 h-20" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  )
} 