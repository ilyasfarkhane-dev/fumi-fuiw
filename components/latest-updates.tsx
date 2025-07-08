"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function LatestUpdates() {
  const updates = [
    {
      id: 1,
      image: "/1.jpg",
      title: "بحث تعزيز مشاريع كرسي الإليسيسكو للحضارات والديانات بجامعة قطر",
      date: "15 مارس 2024",
    },
    {
      id: 2,
      image: "/2.jpg",
      title: "مناقشة آفاق التعاون بين الإليسيسكو والمدرسة الوطنية العليا للقانون والعدالة",
      date: "12 مارس 2024",
    },
    {
      id: 3,
      image: "/3.jpg",
      title: "بحث آفاق التعاون بين الإليسيسكو والجامعة الأمريكية في عجمان",
      date: "10 مارس 2024",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl font-bold text-primary mb-4 font-arabic"
            dir="rtl"
          >
            آخر المستجدات
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {updates.map((update, index) => (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={update.image || "/placeholder.svg"}
                  alt={update.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 font-arabic" dir="rtl">
                  {update.title}
                </h3>
                <p className="text-gray-600 text-sm" dir="rtl">
                  {update.date}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-200 shadow-lg hover:bg-[#0e3937]"
          >
            عرض المزيد
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
