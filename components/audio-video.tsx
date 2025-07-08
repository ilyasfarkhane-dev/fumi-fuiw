"use client"

import { motion } from "framer-motion"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export default function AudioVideo() {
  const mediaItems = [
    {
      id: 1,
      image: "/1.jpg",
      title: "مناقشة آفاق التعاون بين الإليسيسكو والمدرسة الوطنية العليا للقانون والعدالة بالرباط",
      date: "15 مارس 2024",
      type: "video",
    },
    {
      id: 2,
      image: "/2.jpg",
      title: "بحث تعزيز مشاريع كرسي الإليسيسكو لحوار الحضارات والديانات بجامعة قطر",
      date: "12 مارس 2024",
      type: "video",
    },
  ]

  return (
    <section className="py-16 bg-teal-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4 font-arabic" dir="rtl">
            صوت وصورة
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {mediaItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01, boxShadow: '0 4px 24px rgba(13,148,136,0.10)' }}
                className="bg-white border border-primary rounded-xl overflow-hidden shadow-none hover:shadow-md transition-all duration-300 cursor-pointer group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.97 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="bg-white/90 hover:bg-white text-primary p-3 rounded-full border border-primary shadow transition-all duration-200">
                      <Play size={28} fill="currentColor" />
                    </div>
                  </motion.div>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-gray-900 mb-2 line-clamp-2 font-arabic" dir="rtl">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-xs" dir="rtl">
                    {item.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Navigation arrows */}
          <button className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200">
            <ChevronLeft size={20} />
          </button>
          <button className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
