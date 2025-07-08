"use client"

import { motion } from "framer-motion"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const quickLinks = ["About", "Shop", "Contact", "Subscribe", "T&C"]
  const categories = ["Fashion", "Entertainment", "Beauty", "Lifestyle", "Travel"]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <h3 className="text-2xl font-bold">FASHIONISE</h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We are online marketplace where people can buy and sell almost anything. Helping you become the person you
              want to be.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">CATEGORIES</h4>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                      {category}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">© FASHIONISE. ALL RIGHTS RESERVED.</p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">DESIGNED BY TEMPLATE DONUT</p>
        </motion.div>
      </div>
    </footer>
  )
}
