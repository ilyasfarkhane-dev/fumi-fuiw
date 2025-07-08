"use client"

import { Search, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

interface UniversitySearchFilterProps {
  searchTerm: string
  onSearchChange: (value: string) => void
  selectedCountry: string
  onCountryChange: (value: string) => void
  selectedDomain: string
  onDomainChange: (value: string) => void
  countries: string[]
  domains: string[]
}

export default function UniversitySearchFilter({
  searchTerm,
  onSearchChange,
  selectedCountry,
  onCountryChange,
  selectedDomain,
  onDomainChange,
  countries,
  domains
}: UniversitySearchFilterProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Search Input */}
        <div className="flex-1 w-full md:w-auto">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="ابحث عن جامعة..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] focus:border-transparent font-arabic text-right"
              dir="rtl"
            />
          </div>
        </div>

        {/* Country Filter */}
        <div className="w-full md:w-48">
          <div className="relative">
            <select
              value={selectedCountry}
              onChange={(e) => onCountryChange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] focus:border-transparent appearance-none bg-white font-arabic text-right cursor-pointer"
              dir="rtl"
            >
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {/* Domain Filter */}
        <div className="w-full md:w-48">
          <div className="relative">
            <select
              value={selectedDomain}
              onChange={(e) => onDomainChange(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E8B57] focus:border-transparent appearance-none bg-white font-arabic text-right cursor-pointer"
              dir="rtl"
            >
              {domains.map((domain) => (
                <option key={domain} value={domain}>
                  {domain}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>
        </div>

        {/* Results Count */}
        <div className="w-full md:w-auto text-center md:text-left">
          <span className="text-sm text-gray-600 font-arabic">
            النتائج: <span className="font-bold text-[#2E8B57]">{searchTerm || selectedCountry !== "الكل" || selectedDomain !== "الكل" ? "مفلترة" : "الكل"}</span>
          </span>
        </div>
      </div>
    </div>
  )
} 