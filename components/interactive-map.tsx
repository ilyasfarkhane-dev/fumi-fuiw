"use client"

import { MapPin } from "lucide-react"

export default function InteractiveMap() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 h-full w-full flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <MapPin className="w-14 h-14 text-gray-400 mb-4" />
        <h3 className="text-lg font-bold text-gray-600 mb-2 font-arabic text-center">خريطة تفاعلية</h3>
        <p className="text-sm text-gray-400 font-arabic text-center">
          سيتم عرض مواقع الجامعات الأعضاء على الخريطة التفاعلية
        </p>
      </div>
    </div>
  )
} 