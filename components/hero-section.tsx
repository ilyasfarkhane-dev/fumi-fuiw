"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "الإليسيسكو تحصل على 350 منحة دراسية لأشباب العالم",
      subtitle: "الإسلامي في أكبر الجامعات الباكستانية",
    },
    {
      title: "مؤتمر التعليم العالي والابتكار في العالم العربي",
      subtitle: "نحو مستقبل أفضل للتعليم والبحث العلمي",
    },
    {
      title: "برنامج التبادل الطلابي الدولي يحقق نجاحاً باهراً",
      subtitle: "أكثر من 1000 طالب يستفيدون من البرنامج هذا العام",
    },
    {
      title: "إطلاق منصة التعلم الإلكتروني الجديدة",
      subtitle: "تقنيات حديثة لتطوير التعليم عن بُعد",
    },
    {
      title: "مبادرة البحث العلمي المشترك بين الجامعات",
      subtitle: "تعزيز التعاون الأكاديمي والبحثي على المستوى الدولي",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[600px] overflow-hidden">
      {/* Static Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/7109063/pexels-photo-7109063.jpeg"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-teal-900/60" />
      </div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight font-arabic" dir="rtl">
                {slides[currentSlide].title}
              </h1>

              <p className="text-xl md:text-2xl mb-8 opacity-90 font-arabic" dir="rtl">
                {slides[currentSlide].subtitle}
              </p>

              <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 border border-white/30 hover:border-white/50 hover:scale-105">
                عرض المزيد
              </button>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative max-w-md mx-auto"
          >
            <input
              type="text"
              placeholder="البحث..."
              className="w-full px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-white/30 transition-all duration-200"
              dir="rtl"
            />
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-[#0e3937] text-white p-3 rounded-full transition-colors duration-200">
              <Search size={20} />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Navigation arrows */}
     
    </section>
  )
}
