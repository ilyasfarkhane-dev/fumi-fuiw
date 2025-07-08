"use client"

import { motion } from "framer-motion"
import { Globe, Phone, Mail, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function TopNavbar() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("العربية")

  const languages = [
    { code: "ar", name: "العربية", flag: "🇸🇦" },
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
  ]

  const handleLanguageChange = (language: { code: string; name: string; flag: string }) => {
    setCurrentLanguage(language.name)
    setIsLanguageOpen(false)
  }

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-[#0b787f] text-white py-2 text-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Left side - Language Selector */}
          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              className="flex items-center space-x-2 hover:text-primary transition-colors duration-200 px-3 py-1 rounded-md hover:bg-white/10"
            >
              <Globe size={16} className="ml-4" />
              <span>{currentLanguage}</span>
              <ChevronDown size={14} />
            </motion.button>

            {/* Language Dropdown */}
            {isLanguageOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-full mt-2 bg-white text-black rounded-lg shadow-xl border border-gray-200 min-w-[150px] z-50"
              >
                {languages.map((language) => (
                  <motion.button
                    key={language.code}
                    whileHover={{ backgroundColor: "#f3f4f6" }}
                    onClick={() => handleLanguageChange(language)}
                    className="w-full text-left px-4 py-3 flex items-center space-x-3 hover:bg-gray-100 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                  >
                    <span className="text-lg">{language.flag}</span>
                    <span className="font-medium">{language.name}</span>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Right side - Contact Info */}
          <div className="flex items-center space-x-6">
            <motion.a
              href="mailto:info@fashionise.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-4 hover:text-primary transition-colors duration-200"
            >

                 <span className="mr-2 ml-2">info@fashionise.com</span>
              <Mail size={16} />
           
            </motion.a>
            <span className="mx-2 text-gray-300">|</span>
            <motion.a
              href="tel:+966123456789"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 hover:text-primary transition-colors duration-200"
            >
             
              <span dir="ltr" className="mr-2 ml-2">+966 12 345 6789</span>
              
               <Phone size={16} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Overlay to close dropdown when clicking outside */}
      {isLanguageOpen && <div className="fixed inset-0 z-40" onClick={() => setIsLanguageOpen(false)} />}
    </motion.div>
  )
}
