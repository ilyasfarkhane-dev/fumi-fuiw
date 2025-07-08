"use client"

import Link from "next/link"
import { Calendar } from "lucide-react"

const categoryColors: Record<string, { bg: string; border: string }> = {
  "منح دراسية": { bg: "bg-red-500/10", border: "border-red-500" },
  "مؤتمرات": { bg: "bg-blue-500/10", border: "border-blue-500" },
  "فرص عمل": { bg: "bg-green-500/10", border: "border-green-500" },
  "برامج": { bg: "bg-purple-500/10", border: "border-purple-500" },
  "الكل": { bg: "bg-gray-400/10", border: "border-gray-400" },
}

interface NewsCardProps {
  id: number
  title: string
  description: string
  image?: string | null
  category: string
  date: string
  endDate?: string
}

export default function NewsCard({ id, title, description, image, category, date, endDate }: NewsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-0 flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 min-h-[340px]">
      {/* Image + badge + date */}
      <div className="relative w-full h-40 rounded-t-xl overflow-hidden bg-gray-100 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="object-cover w-full h-full" />
        ) : (
          <span className="text-gray-300 text-4xl">📰</span>
        )}
        {/* Badge catégorie */}
        <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold text-gray-900 border ${categoryColors[category]?.bg || 'bg-gray-400/10'} ${categoryColors[category]?.border || 'border-gray-400'}`}>{category}</span>
        {/* Date de publication */}
        <span className="absolute top-3 left-3 text-xs text-gray-400 font-arabic">{date}</span>
      </div>
      {/* Contenu */}
      <div className="flex-1 flex flex-col p-4">
        <h3 className="font-bold text-base text-gray-900 mb-2 font-arabic truncate" title={title}>{title}</h3>
        <p className="text-sm text-gray-600 font-arabic mb-4 line-clamp-2">{description}</p>
        <div className="flex items-end justify-between mt-auto">
          {/* Bouton détails */}
          <Link href={`/news/${id}`} className="px-4 py-1.5 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 bg-white hover:bg-gray-100 transition-colors font-arabic">
            التفاصيل
          </Link>
          {/* Date spécifique (optionnelle) */}
          {endDate && (
            <span className="flex items-center gap-1 text-xs text-red-500 font-arabic">
              <Calendar className="w-4 h-4" />
              موعد النهائي: {endDate}
            </span>
          )}
        </div>
      </div>
    </div>
  )
} 