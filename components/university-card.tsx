"use client"

import { motion } from "framer-motion"
import { MapPin, Users, GraduationCap, ExternalLink } from "lucide-react"

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

interface UniversityCardProps {
  university: University
  isSelected: boolean
  onClick: () => void
  index: number
}

export default function UniversityCard({ university, isSelected, onClick, index }: UniversityCardProps) {
  return (
    <motion.div
      onClick={onClick}
      className={`bg-white rounded-lg shadow-md p-4 cursor-pointer transition-all duration-300 border-2 ${
        isSelected 
          ? 'border-[#2E8B57] shadow-lg transform scale-[1.02]' 
          : 'border-transparent hover:border-gray-200 hover:shadow-lg'
      }`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start space-x-3 space-x-reverse">
        {/* University Logo Placeholder */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold text-gray-600">#{index}</span>
          </div>
        </div>

        {/* University Information */}
        <div className="flex-1 min-w-0">
          {/* University Name */}
          <h4 className="text-lg font-bold text-gray-900 mb-1 font-arabic text-right">
            {university.name}
          </h4>

          {/* Location */}
          <div className="flex items-center text-gray-600 mb-2 font-arabic text-right">
            <MapPin className="w-4 h-4 ml-1" />
            <span className="text-sm">{university.location}</span>
          </div>

          {/* Specializations */}
          <div className="mb-2">
            <p className="text-xs text-gray-500 font-arabic text-right mb-1">
              التخصصات الرئيسية:
            </p>
            <div className="flex flex-wrap gap-1 justify-end">
              {university.specializations.slice(0, 3).map((spec, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-[#c7b9a7] text-white text-xs rounded-full font-arabic"
                >
                  {spec}
                </span>
              ))}
              {university.specializations.length > 3 && (
                <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-full font-arabic">
                  +{university.specializations.length - 3}
                </span>
              )}
            </div>
          </div>

          {/* Students Count */}
          <div className="flex items-center text-gray-600 mb-3 font-arabic text-right">
            <Users className="w-4 h-4 ml-1" />
            <span className="text-sm">{university.students} طالب</span>
          </div>

          {/* View Details Button */}
          <motion.button
            className={`w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200 ${
              isSelected
                ? 'bg-[#2E8B57] text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-[#0b787f] hover:text-white'
            } font-arabic flex items-center justify-center`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ExternalLink className="w-4 h-4 ml-1" />
            عرض التفاصيل
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
} 