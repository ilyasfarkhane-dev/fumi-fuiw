"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { MapPin, BookOpen, Users, Globe, Search } from "lucide-react"
import Image from "next/image"

interface University {
  id: number
  name: string
  nameAr: string
  country: string
  x: number
  y: number
  hasArticle: boolean
  articles?: number
  students?: number
  recentArticle?: string
}

export default function WorldMap() {
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null)
  const [hoveredUniversity, setHoveredUniversity] = useState<University | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const universities: University[] = [
    {
      id: 1,
      name: "University of Qatar",
      nameAr: "جامعة قطر",
      country: "Qatar",
      x: 60, // Ajusté pour être sur le Qatar
      y: 40, // Ajusté pour être sur le Qatar
      hasArticle: true,
      articles: 15,
      students: 25000,
      recentArticle: "تطوير التعليم الرقمي في العصر الحديث",
    },
    {
      id: 2,
      name: "American University of Sharjah",
      nameAr: "الجامعة الأمريكية في الشارقة",
      country: "UAE",
      x: 61, // Ajusté pour être sur les Émirats
      y: 42, // Ajusté pour être sur les Émirats
      hasArticle: true,
      articles: 8,
      students: 18000,
      recentArticle: "الابتكار في التكنولوجيا التعليمية",
    },
    {
      id: 3,
      name: "King Saud University",
      nameAr: "جامعة الملك سعود",
      country: "Saudi Arabia",
      x: 58, // Ajusté pour être sur l'Arabie Saoudite
      y: 43, // Ajusté pour être sur l'Arabie Saoudite
      hasArticle: false,
      students: 40000,
    },
    {
      id: 4,
      name: "Al-Azhar University",
      nameAr: "جامعة الأزهر",
      country: "Egypt",
      x: 54, // Ajusté pour être sur l'Égypte
      y: 40, // Ajusté pour être sur l'Égypte
      hasArticle: true,
      articles: 22,
      students: 35000,
      recentArticle: "التراث الإسلامي والحضارة المعاصرة",
    },
    {
      id: 5,
      name: "University of Tunis",
      nameAr: "جامعة تونس",
      country: "Tunisia",
      x: 48, // Ajusté pour être sur la Tunisie
      y: 37, // Ajusté pour être sur la Tunisie
      hasArticle: false,
      students: 28000,
    },
    {
      id: 6,
      name: "Hassan II University",
      nameAr: "جامعة الحسن الثاني",
      country: "Morocco",
      x: 38, // Positioned on Morocco
      y: 38, // Positioned on Morocco
      hasArticle: true,
      articles: 12,
      students: 32000,
      recentArticle: "البحث العلمي في المغرب العربي",
    },
    {
      id: 7,
      name: "University of Istanbul",
      nameAr: "جامعة اسطنبول",
      country: "Turkey",
      x: 53, // Ajusté pour être sur la Turquie
      y: 32, // Ajusté pour être sur la Turquie
      hasArticle: false,
      students: 45000,
    },
    {
      id: 8,
      name: "University of Karachi",
      nameAr: "جامعة كراتشي",
      country: "Pakistan",
      x: 69, // Ajusté pour être sur le Pakistan
      y: 43, // Ajusté pour être sur le Pakistan
      hasArticle: true,
      articles: 18,
      students: 50000,
      recentArticle: "التعليم العالي في جنوب آسيا",
    },
    {
      id: 9,
      name: "Harvard University",
      nameAr: "جامعة هارفارد",
      country: "USA",
      x: 25, // Ajusté pour être sur la côte est des USA
      y: 32, // Ajusté pour être sur la côte est des USA
      hasArticle: true,
      articles: 45,
      students: 23000,
      recentArticle: "الذكاء الاصطناعي في التعليم",
    },
    {
      id: 10,
      name: "University of Oxford",
      nameAr: "جامعة أكسفورد",
      country: "UK",
      x: 47, // Ajusté pour être sur le Royaume-Uni
      y: 26, // Ajusté pour être sur le Royaume-Uni
      hasArticle: true,
      articles: 38,
      students: 24000,
      recentArticle: "مستقبل البحث العلمي",
    },
    {
      id: 11,
      name: "University of Tokyo",
      nameAr: "جامعة طوكيو",
      country: "Japan",
      x: 83, // Ajusté pour être sur le Japon
      y: 35, // Ajusté pour être sur le Japon
      hasArticle: false,
      students: 28000,
    },
    {
      id: 12,
      name: "University of Sydney",
      nameAr: "جامعة سيدني",
      country: "Australia",
      x: 82, // Ajusté pour être sur l'Australie
      y: 70, // Ajusté pour être sur l'Australie
      hasArticle: true,
      articles: 16,
      students: 51000,
      recentArticle: "التعليم المستدام في أستراليا",
    },
  ]

  const filteredUniversities = universities.filter(
    (uni) =>
      uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      uni.nameAr.includes(searchTerm) ||
      uni.country.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="bg-gradient-to-r from-teal-500 to-blue-500 text-white p-4 rounded-full mr-4"
            >
              <Globe size={32} />
            </motion.div>
            <div>
              <h2
                className="text-5xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2 font-arabic"
                dir="rtl"
              >
                شبكة الجامعات العالمية
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                استكشف شبكتنا العالمية من الجامعات الشريكة والمؤسسات التعليمية المتميزة حول العالم
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100"
        >
          {/* Controls */}
          <div className="flex flex-col lg:flex-row justify-between items-center p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 gap-4">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                placeholder="البحث عن جامعة..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                dir="rtl"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            </div>

            <div className="flex items-center space-x-8 text-sm font-medium">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-4 h-4 bg-gradient-to-r from-teal-400 to-primary rounded-full"></div>
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 0.3, 0.7] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute inset-0 w-4 h-4 bg-primary rounded-full"
                  />
                </div>
                <span className="text-gray-700">جامعات منشورة</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full"></div>
                <span className="text-gray-700">جامعات شريكة</span>
              </div>
            </div>
          </div>

          {/* Elegant World Map */}
          <div className="relative h-[600px] overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
            {/* World Map Background */}
            <motion.div
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/world-map-elegant.png"
                  alt="World Map"
                  fill
                  className="object-contain object-center"
                  priority
                />
              </div>
            </motion.div>

            {/* University Points Overlay */}
            <div className="absolute inset-0 z-10">
              {universities.map((university, index) => (
                <motion.div
                  key={university.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1.5 + index * 0.1, duration: 0.5 }}
                  className="absolute"
                  style={{
                    left: `${university.x}%`,
                    top: `${university.y}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  {/* Pulsing Ring for Active Universities */}
                  {university.hasArticle && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-amber-400/80"
                      style={{ width: "60px", height: "60px", left: "-30px", top: "-30px" }}
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.8, 0.3, 0.8],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                    />
                  )}

                  {/* Glow effect */}
                  <motion.div
                    className={`absolute rounded-full ${university.hasArticle ? "bg-amber-400/60" : "bg-gray-400/60"}`}
                    style={{ width: "36px", height: "36px", left: "-18px", top: "-18px" }}
                    animate={
                      university.hasArticle
                        ? {
                            opacity: [0.6, 0.9, 0.6],
                            scale: [1, 1.1, 1],
                          }
                        : {}
                    }
                    transition={
                      university.hasArticle
                        ? {
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }
                        : {}
                    }
                  />

                  {/* Main University Point */}
                  <motion.div
                    className={`w-6 h-6 rounded-full border-3 border-white cursor-pointer shadow-xl ${
                      university.hasArticle ? "bg-amber-500" : "bg-gray-400"
                    }`}
                    style={{ marginLeft: "-12px", marginTop: "-12px" }}
                    whileHover={{
                      scale: 1.6,
                      boxShadow: "0 0 30px rgba(245, 158, 11, 0.8)",
                    }}
                    whileTap={{ scale: 0.8 }}
                    onMouseEnter={() => setHoveredUniversity(university)}
                    onMouseLeave={() => setHoveredUniversity(null)}
                    onClick={() => setSelectedUniversity(university)}
                  />

                  {/* Article Count Badge */}
                  {university.hasArticle && university.articles && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 2 + index * 0.1 }}
                      className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center border-2 border-white shadow-lg"
                    >
                      {university.articles}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Connection Lines */}
            <motion.svg
              className="absolute inset-0 w-full h-full z-5 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 2.5, duration: 1 }}
            >
              {universities
                .filter((u) => u.hasArticle)
                .map((uni, index, activeUnis) => {
                  if (index === activeUnis.length - 1) return null
                  const nextUni = activeUnis[index + 1]
                  return (
                    <motion.path
                      key={`line-${uni.id}-${nextUni.id}`}
                      d={`M ${uni.x}% ${uni.y}% Q ${(uni.x + nextUni.x) / 2}% ${Math.min(uni.y, nextUni.y) - 8}% ${nextUni.x}% ${nextUni.y}%`}
                      stroke="rgba(245, 158, 11, 0.7)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="8,4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 3 + index * 0.2, duration: 1.2 }}
                    />
                  )
                })}
            </motion.svg>

            {/* University List Sidebar */}
            {searchTerm && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl p-4 max-w-sm max-h-96 overflow-y-auto z-20 border border-white/30"
              >
                <h3 className="font-bold text-gray-900 mb-3" dir="rtl">
                  نتائج البحث ({filteredUniversities.length})
                </h3>
                {filteredUniversities.map((university) => (
                  <motion.div
                    key={university.id}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 158, 11, 0.08)" }}
                    onClick={() => setSelectedUniversity(university)}
                    className="p-3 rounded-lg cursor-pointer border-b border-gray-100 last:border-b-0 transition-all duration-200"
                    dir="rtl"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{university.nameAr}</h4>
                        <p className="text-xs text-gray-600">{university.country}</p>
                      </div>
                      {university.hasArticle && (
                        <div className="bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 px-2 py-1 rounded-full text-xs font-medium">
                          {university.articles} مقال
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
                {filteredUniversities.length === 0 && (
                  <p className="text-gray-500 text-center py-4" dir="rtl">
                    لا توجد نتائج
                  </p>
                )}
              </motion.div>
            )}

            {/* Enhanced Hover Tooltip - University Card */}
            {hoveredUniversity && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                className="absolute top-6 right-6 bg-white/98 backdrop-blur-sm rounded-2xl shadow-2xl p-6 max-w-sm z-30 border border-white/50"
                dir="rtl"
              >
                {/* University Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-3">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg ${
                        hoveredUniversity.hasArticle
                          ? "bg-gradient-to-br from-amber-500 to-orange-500"
                          : "bg-gradient-to-br from-gray-400 to-gray-500"
                      }`}
                    >
                      {hoveredUniversity.nameAr.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1 font-arabic leading-tight">
                        {hoveredUniversity.nameAr}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">{hoveredUniversity.name}</p>
                      <p className="text-xs text-gray-500 flex items-center">
                        <MapPin size={12} className="mr-1" />
                        {hoveredUniversity.country}
                      </p>
                    </div>
                  </div>
                  {hoveredUniversity.hasArticle && (
                    <div className="bg-gradient-to-r from-amber-100 to-amber-200 text-amber-800 px-3 py-1 rounded-full text-xs font-semibold">
                      نشط
                    </div>
                  )}
                </div>

                {/* University Stats */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 text-center border border-blue-200">
                    <div className="flex items-center justify-center mb-1">
                      <Users className="text-blue-600 mr-1" size={16} />
                    </div>
                    <p className="text-lg font-bold text-blue-600">{hoveredUniversity.students?.toLocaleString()}</p>
                    <p className="text-xs text-blue-700">طالب</p>
                  </div>

                  {hoveredUniversity.hasArticle && (
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-lg p-3 text-center border border-amber-200">
                      <div className="flex items-center justify-center mb-1">
                        <BookOpen className="text-amber-600 mr-1" size={16} />
                      </div>
                      <p className="text-lg font-bold text-amber-600">{hoveredUniversity.articles}</p>
                      <p className="text-xs text-amber-700">مقال</p>
                    </div>
                  )}
                </div>

                {/* Recent Article */}
                {hoveredUniversity.recentArticle && (
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-3 mb-4 border border-gray-200">
                    <p className="text-xs text-gray-600 mb-1 font-semibold">آخر مقال:</p>
                    <p className="text-sm font-medium text-gray-800 leading-relaxed line-clamp-2">
                      {hoveredUniversity.recentArticle}
                    </p>
                  </div>
                )}

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedUniversity(hoveredUniversity)}
                  className={`w-full py-2 px-4 rounded-lg font-semibold text-sm transition-all duration-200 ${
                    hoveredUniversity.hasArticle
                      ? "bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white shadow-lg hover:shadow-xl"
                      : "bg-gray-600 hover:bg-gray-700 text-white shadow-md hover:shadow-lg"
                  }`}
                >
                  عرض التفاصيل الكاملة
                </motion.button>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Enhanced Selected University Details */}
        {selectedUniversity && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 bg-white/98 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/30"
            dir="rtl"
          >
            {/* Header Section */}
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative z-10 flex justify-between items-start">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                    {selectedUniversity.nameAr.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-4xl font-bold mb-2 font-arabic">{selectedUniversity.nameAr}</h3>
                    <p className="text-xl opacity-90 mb-2">{selectedUniversity.name}</p>
                    <p className="flex items-center text-lg opacity-80">
                      <MapPin size={20} className="mr-2" />
                      {selectedUniversity.country}
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedUniversity(null)}
                  className="text-white/80 hover:text-white text-4xl font-light transition-colors duration-200 bg-white/10 rounded-full w-12 h-12 flex items-center justify-center"
                >
                  ×
                </motion.button>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              {/* Statistics Grid */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200 shadow-sm"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 text-white p-3 rounded-xl mr-4">
                      <Users size={24} />
                    </div>
                    <span className="font-semibold text-blue-900 text-lg">عدد الطلاب</span>
                  </div>
                  <p className="text-4xl font-bold text-blue-600 mb-2">
                    {selectedUniversity.students?.toLocaleString()}
                  </p>
                  <p className="text-blue-700 text-sm">طالب مسجل</p>
                </motion.div>

                {selectedUniversity.hasArticle && (
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm"
                  >
                    <div className="flex items-center mb-4">
                      <div className="bg-amber-600 text-white p-3 rounded-xl mr-4">
                        <BookOpen size={24} />
                      </div>
                      <span className="font-semibold text-amber-900 text-lg">المقالات المنشورة</span>
                    </div>
                    <p className="text-4xl font-bold text-amber-600 mb-2">{selectedUniversity.articles}</p>
                    <p className="text-amber-700 text-sm">مقال علمي</p>
                  </motion.div>
                )}

                <motion.div
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 shadow-sm"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-green-600 text-white p-3 rounded-xl mr-4">
                      <Globe size={24} />
                    </div>
                    <span className="font-semibold text-green-900 text-lg">الحالة</span>
                  </div>
                  <p className="text-2xl font-bold text-green-600 mb-2">
                    {selectedUniversity.hasArticle ? "جامعة نشطة" : "جامعة شريكة"}
                  </p>
                  <p className="text-green-700 text-sm">في الشبكة</p>
                </motion.div>
              </div>

              {/* Recent Article Section */}
              {selectedUniversity.recentArticle && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 mb-8 border border-amber-100 shadow-sm"
                >
                  <div className="flex items-center mb-4">
                    <div className="bg-amber-600 text-white p-2 rounded-lg mr-3">
                      <BookOpen size={20} />
                    </div>
                    <h4 className="font-bold text-gray-900 text-xl">آخر مقال منشور</h4>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{selectedUniversity.recentArticle}</p>
                  <div className="mt-4 flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                    <span>منشور مؤخراً</span>
                  </div>
                </motion.div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {selectedUniversity.hasArticle && (
                  <motion.button
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <BookOpen size={20} className="mr-2" />
                    عرض جميع المقالات ({selectedUniversity.articles})
                  </motion.button>
                )}
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-white border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center"
                >
                  <Globe size={20} className="mr-2" />
                  زيارة موقع الجامعة
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gray-100 border-2 border-gray-300 text-gray-700 hover:bg-gray-200 px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center"
                >
                  <Users size={20} className="mr-2" />
                  تفاصيل إضافية
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Enhanced Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          {[
            {
              value: universities.length,
              label: "جامعة شريكة",
              color: "amber",
              icon: Globe,
              gradient: "from-amber-500 to-amber-600",
            },
            {
              value: universities.filter((u) => u.hasArticle).length,
              label: "جامعة منشورة",
              color: "blue",
              icon: BookOpen,
              gradient: "from-blue-500 to-blue-600",
            },
            {
              value: universities.reduce((sum, u) => sum + (u.articles || 0), 0),
              label: "مقال منشور",
              color: "green",
              icon: BookOpen,
              gradient: "from-green-500 to-green-600",
            },
            {
              value: `${Math.round(universities.reduce((sum, u) => sum + (u.students || 0), 0) / 1000)}K`,
              label: "طالب إجمالي",
              color: "purple",
              icon: Users,
              gradient: "from-purple-500 to-purple-600",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.gradient} text-white rounded-2xl mb-4 shadow-lg`}
              >
                <stat.icon size={28} />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-arabic text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
