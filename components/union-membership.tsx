"use client"

import { motion } from "framer-motion"
import { Users, Globe, Award, BookOpen } from "lucide-react"
import Image from "next/image"

export default function UnionMembership() {
  const buildings = [
    { id: 1, image: "/a.jpg", name: "جامعة الملك سعود", country: "السعودية" },
    { id: 2, image: "/b.jpg", name: "جامعة القاهرة", country: "مصر" },
    { id: 3, image: "/c.jpg", name: "جامعة الأزهر", country: "مصر" },
    { id: 4, image: "/d.jpg", name: "جامعة قطر", country: "قطر" },
    { id: 5, image: "/e.jpg", name: "الجامعة الأمريكية", country: "الإمارات" },
  ]

  return (
    <>
      {/* Animated Definition Section */}
     
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl font-bold text-primary mb-8 font-arabic"
              dir="rtl"
            >
              عضوية الاتحاد
            </h2>
          </motion.div>

          {/* Single Row of Universities */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {buildings.map((building, index) => (
              <motion.div
                key={building.id}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                }}
                className="relative w-40 h-56 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <Image
                  src={building.image || "/placeholder.svg"}
                  alt={building.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-2 text-white bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <h3 className="font-bold text-xs mb-1 font-arabic leading-tight" dir="rtl">
                    {building.name}
                  </h3>
                  <p className="text-xs opacity-90 font-arabic" dir="rtl">
                    {building.country}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Show All Button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-md font-semibold text-lg transition-all duration-200 shadow-lg hover:bg-[#0e3937]"
            >
              عرض جميع الجامعات الأعضاء
            </motion.button>
          </motion.div>
        </div>
      </section>
      <div className="py-20" />
    </>
  )
}
