"use client"

import { motion } from "framer-motion"
import { MapPin, Users, GraduationCap } from "lucide-react"
import UniversityCard from "./university-card"

interface University {
  id: number
  name: string
  location: string
  country: string
  domain: string
  specializations: string[]
  students: string
  coordinates: [number, number]
  logo: string
}

interface UniversityListProps {
  universities: University[]
  selectedUniversity: number | null
  onUniversitySelect: (id: number) => void
}

export default function UniversityList({ universities, selectedUniversity, onUniversitySelect }: UniversityListProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4 font-arabic text-center">
        الجامعات الأعضاء ({universities.length})
      </h3>
      
      <div className="h-[600px] overflow-y-auto overflow-x-hidden space-y-4 pr-2">
        {universities.length === 0 ? (
          <div className="text-center py-8">
            <GraduationCap className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 font-arabic">لا توجد جامعات تطابق معايير البحث</p>
          </div>
        ) : (
          universities.map((university, index) => (
            <motion.div
              key={university.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <UniversityCard
                university={university}
                isSelected={selectedUniversity === university.id}
                onClick={() => onUniversitySelect(university.id)}
                index={index + 1}
              />
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
} 