import React from "react";
import Link from "next/link";

export interface OpportunityCardProps {
  id: string | number;
  category: string; // ex: "منحة", "بحث", "ابتكار"
  title: string;
  university: string;
  country: string;
  rating: number;
  reviews: number;
  level: string; // ex: "ماجستير"
  field: string; // ex: "الهندسة"
  description: string;
  deadline: string; // ex: "2024-03-10"
  applyUrl?: string; // lien externe si besoin
}

const badgeColors: Record<string, string> = {
  "منحة": "bg-[#2E8B57]",
  "بحث": "bg-blue-600",
  "ابتكار": "bg-red-500",
};

export default function OpportunityCard({
  id,
  category,
  title,
  university,
  country,
  rating,
  reviews,
  level,
  field,
  description,
  deadline,
  applyUrl,
}: OpportunityCardProps) {
  return (
    <div className="relative bg-white rounded-lg shadow-md p-6 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">
      {/* Badge catégorie */}
      <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white font-bold text-xs ${badgeColors[category] || "bg-gray-400"}`}>{category}</span>
      {/* Titre */}
      <h3 className="font-bold text-lg text-gray-900 mb-2 truncate font-arabic" title={title}>{title}</h3>
      {/* Université + pays */}
      <div className="flex items-center text-sm text-gray-600 mb-1 gap-1">
        <span className="text-[#2E8B57]">
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.05 10.45 8.09 11.21a1 1 0 0 0 1.18 0C13.95 21.45 21 16.25 21 11c0-4.97-4.03-9-9-9Zm0 17.88C9.14 17.1 5 13.61 5 11a7 7 0 1 1 14 0c0 2.61-4.14 6.1-7 8.88Z"/><circle cx="12" cy="11" r="3" fill="#2E8B57"/></svg>
        </span>
        <span className="truncate font-arabic">{university}، {country}</span>
      </div>
      {/* Évaluation */}
      <div className="flex items-center text-xs text-yellow-500 mb-2 gap-1">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <span className="font-bold">{rating}</span>
        <span className="text-gray-500">({reviews} مراجع)</span>
      </div>
      {/* Type d'étude / domaine */}
      <div className="flex flex-wrap gap-2 mb-2">
        <span className="bg-gray-100 text-[#2E8B57] px-2 py-0.5 rounded text-xs font-arabic">{level}</span>
        <span className="bg-gray-100 text-blue-700 px-2 py-0.5 rounded text-xs font-arabic">{field}</span>
      </div>
      {/* Description */}
      <p className="text-gray-700 text-sm mb-4 line-clamp-2 font-arabic" title={description}>{description}</p>
      {/* Date limite */}
      <div className="flex items-center text-xs text-gray-500 mb-4 gap-1">
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M19 4h-1V2h-2v2H8V2H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H5V9h14v11Zm0-13H5V6h14v1Z"/><rect width="2" height="2" x="7" y="11" fill="#2E8B57"/><rect width="2" height="2" x="11" y="11" fill="#2E8B57"/><rect width="2" height="2" x="15" y="11" fill="#2E8B57"/></svg>
        <span>آخر موعد: {deadline}</span>
      </div>
      {/* Bouton */}
      <div className="mt-auto">
        {applyUrl ? (
          <a
            href={applyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-[#2E8B57] hover:bg-[#256d46] text-white font-bold py-2 rounded-lg transition-colors duration-200 font-arabic"
          >
            التقديم الآن
          </a>
        ) : (
          <Link
            href={`/opportunities/${id}`}
            className="block w-full text-center bg-[#2E8B57] hover:bg-[#256d46] text-white font-bold py-2 rounded-lg transition-colors duration-200 font-arabic"
          >
            التقديم الآن
          </Link>
        )}
      </div>
    </div>
  );
} 