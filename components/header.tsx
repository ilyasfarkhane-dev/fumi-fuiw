"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"
import HamburgerMenu from "./hamburger-menu"

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <img src="/log.png" alt="Logo" className="h-16 object-contain" style={{ width: 'auto' }} />
          </motion.div>

          {/* Navigation - Desktop Only */}
          <nav className="hidden md:flex items-center space-x-12">
            {["الرئيسية", " ", "من نحن", "الخدمات", "الأخبار", "اتصل بنا"].map((item, index) => (
              item.trim() === "" ? (
                <span key={index} className="mx-2" />
              ) : (
                <motion.div key={item} whileHover={{ y: -2 }} transition={{ type: "spring", stiffness: 300 }}>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium font-arabic"
                  >
                    {item}
                  </Link>
                </motion.div>
              )
            ))}
          </nav>

          {/* Right Side: Social Icons + Hamburger Menu */}
          <div className="flex items-center space-x-14">
            {/* Social Icons - Desktop Only */}
            <div className="hidden md:flex items-center space-x-4 ml-6">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-600 hover:text-primary transition-colors duration-200"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>

            {/* Hamburger Menu - All Screens */}
            <div className="mr-4">
              <HamburgerMenu />
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
