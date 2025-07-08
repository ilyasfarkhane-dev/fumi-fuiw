"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, Search } from "lucide-react"
import Link from "next/link"

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const menuItems = [
    { name: "الرئيسية", href: "#" },
    { name: "من نحن", href: "#" },
    { name: "الخدمات", href: "#" },
    { name: "الأخبار", href: "#" },
    { name: "اتصل بنا", href: "#" },
  ]

  const socialLinks = [
    { Icon: Facebook, href: "#", label: "Facebook" },
    { Icon: Twitter, href: "#", label: "Twitter" },
    { Icon: Instagram, href: "#", label: "Instagram" },
    { Icon: Linkedin, href: "#", label: "LinkedIn" },
    { Icon: Youtube, href: "#", label: "YouTube" },
  ]

  return (
    <>
      {/* Hamburger Button */}
      <motion.button
        onClick={toggleMenu}
        className="flex flex-col justify-center items-center w-8 h-8 relative z-60"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-gray-700 block transition-all duration-300 ease-in-out"
        />
        <motion.span
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          className="w-6 h-0.5 bg-gray-700 block mt-1.5 transition-all duration-300 ease-in-out"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="w-6 h-0.5 bg-gray-700 block mt-1.5 transition-all duration-300 ease-in-out"
        />
      </motion.button>

      {/* Circular Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ 
              clipPath: "circle(0% at 100% 0%)",
              opacity: 0 
            }}
            animate={{ 
              clipPath: "circle(150% at 100% 0%)",
              opacity: 1 
            }}
            exit={{ 
              clipPath: "circle(0% at 100% 0%)",
              opacity: 0 
            }}
            transition={{ 
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="fixed inset-0 z-50 flex flex-col"
            style={{ backgroundColor: '#0b787f' }}
          >
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-600">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center"
              >
                <img src="/log.png" alt="Logo" className="h-12 object-contain" />
              </motion.div>
              <motion.button
                onClick={closeMenu}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} className="text-white" />
              </motion.button>
            </div>

            {/* Search Bar */}
            <div className="px-8 pt-6 pb-2 mt-12">
              <div className="relative max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="البحث..."
                  className="w-full px-6 py-4   rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-200"
                  dir="rtl"
                />
                <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#0b787f] hover:bg-[#0e3937] text-white p-3 rounded-full transition-colors duration-200">
                  <Search size={20} />
                </button>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex">
              {/* Navigation Links - Left Side */}
              <nav className="w-full flex items-center justify-center">
                <ul className="flex flex-row space-x-12 space-x-reverse">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (index * 0.1) }}
                    >
                      <motion.div
                        whileHover={{ x: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="block text-xl md:text-2xl font-bold text-white hover:text-gray-200 transition-colors duration-200 font-arabic"
                        >
                          {item.name}
                        </Link>
                      </motion.div>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Remove QR Code from right column */}
              {/* QR code will be placed absolutely at the bottom left */}
            </div>

            {/* QR Code - Bottom Left */}
            <div className="absolute bottom-6 left-6 flex flex-col items-center z-60">
              <img src="/qr.png" alt="QR Code" className="w-40 h-40 object-contain mb-2" />
              <p className="text-gray-200 text-xs font-arabic">امسح للوصول السريع</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
