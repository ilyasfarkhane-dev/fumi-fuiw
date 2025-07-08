import React from "react";

export interface TestimonialCardProps {
  rating: number; // 1 à 5
  text: string;
  name: string;
  affiliation: string;
  imageUrl?: string; // optionnel
}

export default function TestimonialCard({
  rating,
  text,
  name,
  affiliation,
  imageUrl,
}: TestimonialCardProps) {
  return (
    <div className="relative bg-white rounded-lg shadow-md p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5">
      {/* Étoiles d'évaluation */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            className={i < rating ? "text-yellow-400" : "text-gray-200"}
          >
            <path
              fill="currentColor"
              d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        ))}
      </div>
      {/* Témoignage */}
      <blockquote className="text-lg text-gray-800 font-arabic mb-6 text-justify leading-relaxed">
        &laquo;{text}&raquo;
      </blockquote>
      {/* Profil et nom */}
      <div className="flex items-center gap-3 mt-auto">
        {/* Image de profil ou placeholder */}
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border border-gray-200"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-xl font-bold">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" fill="#E0E0E0"/><path fill="#E0E0E0" d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4v1H4v-1Z"/></svg>
          </div>
        )}
        <div className="flex flex-col items-end">
          <span className="font-bold text-gray-900 font-arabic text-base">{name}</span>
          <span className="text-sm text-gray-500 font-arabic">{affiliation}</span>
        </div>
      </div>
    </div>
  );
} 