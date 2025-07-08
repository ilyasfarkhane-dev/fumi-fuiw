"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, MapPin, Users, GraduationCap } from "lucide-react"
import UniversitySearchFilter from "./university-search-filter"
import UniversityList from "./university-list"
import InteractiveMap from "./interactive-map"

// Sample university data - in real app, this would come from API
const universitiesData = [
  {
    id: 1,
    name: "جامعة القاهرة",
    location: "القاهرة، مصر",
    country: "مصر",
    domain: "العلوم الإنسانية",
    specializations: ["الطب", "الهندسة", "العلوم", "الآداب"],
    students: "250,000",
    coordinates: [30.0444, 31.2357],
    logo: "/placeholder-logo.png"
  },
  {
    id: 2,
    name: "جامعة الملك عبدالعزيز",
    location: "جدة، السعودية",
    country: "السعودية",
    domain: "العلوم التطبيقية",
    specializations: ["الطب", "الهندسة", "إدارة الأعمال", "العلوم"],
    students: "180,000",
    coordinates: [21.4858, 39.1925],
    logo: "/placeholder-logo.png"
  },
  {
    id: 3,
    name: "جامعة إسطنبول",
    location: "إسطنبول، تركيا",
    country: "تركيا",
    domain: "العلوم الإنسانية",
    specializations: ["الطب", "الهندسة", "العلوم الاجتماعية", "الآداب"],
    students: "95,000",
    coordinates: [41.0082, 28.9784],
    logo: "/placeholder-logo.png"
  },
  {
    id: 4,
    name: "جامعة مالايا",
    location: "كوالالمبور، ماليزيا",
    country: "ماليزيا",
    domain: "العلوم التطبيقية",
    specializations: ["الطب", "الهندسة", "العلوم", "التكنولوجيا"],
    students: "28,000",
    coordinates: [3.1390, 101.6869],
    logo: "/placeholder-logo.png"
  },
  {
    id: 5,
    name: "جامعة الأزهر",
    location: "القاهرة، مصر",
    country: "مصر",
    domain: "العلوم الإسلامية",
    specializations: ["الشريعة", "العلوم الإسلامية", "الطب", "الهندسة"],
    students: "320,000",
    coordinates: [30.0444, 31.2357],
    logo: "/placeholder-logo.png"
  },
  {
    id: 6,
    name: "جامعة الملك فهد للبترول والمعادن",
    location: "الظهران، السعودية",
    country: "السعودية",
    domain: "العلوم التطبيقية",
    specializations: ["الهندسة", "علوم الحاسب", "إدارة الأعمال", "العلوم"],
    students: "8,000",
    coordinates: [26.4207, 50.0888],
    logo: "/placeholder-logo.png"
  }
]

const countries = ["الكل", "مصر", "السعودية", "تركيا", "ماليزيا", "إندونيسيا", "باكستان", "المغرب"]
const domains = ["الكل", "العلوم الإنسانية", "العلوم التطبيقية", "العلوم الإسلامية", "العلوم الطبية", "الهندسة والتكنولوجيا"]

export default function MemberUniversitiesSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCountry, setSelectedCountry] = useState("الكل")
  const [selectedDomain, setSelectedDomain] = useState("الكل")
  const [filteredUniversities, setFilteredUniversities] = useState(universitiesData)
  const [selectedUniversity, setSelectedUniversity] = useState<number | null>(null)

  // Filter universities based on search term and filters
  useEffect(() => {
    let filtered = universitiesData

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(uni => 
        uni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        uni.specializations.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    // Filter by country
    if (selectedCountry !== "الكل") {
      filtered = filtered.filter(uni => uni.country === selectedCountry)
    }

    // Filter by domain 
    if (selectedDomain !== "الكل") {
      filtered = filtered.filter(uni => uni.domain === selectedDomain)
    }

    setFilteredUniversities(filtered)
  }, [searchTerm, selectedCountry, selectedDomain])

  const handleUniversitySelect = (universityId: number) => {
    setSelectedUniversity(universityId)
  }

  return (
    <section className="bg-white py-20 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b787f] mb-4 font-arabic relative inline-block">
            خريطة الجامعات الأعضاء
            <span className="block h-1 w-24 bg-[#c7b9a7] mx-auto mt-4 rounded-full" />
          </h2>
          <p className="text-lg text-gray-600 font-arabic max-w-3xl mx-auto" dir="rtl">
            التحدي: لأكثر من 350 جامعة عضو في اتحاد جامعات العالم الإسلامي حول العالم
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}
          className="mb-8"
        >
          <UniversitySearchFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedCountry={selectedCountry}
            onCountryChange={setSelectedCountry}
            selectedDomain={selectedDomain}
            onDomainChange={setSelectedDomain}
            countries={countries}
            domains={domains}
          />
        </motion.div>

        {/* Main Content - Two Column Layout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch"
        >
          {/* University List - Left Column */}
          <div className="lg:col-span-2">
            <UniversityList
              universities={filteredUniversities}
              selectedUniversity={selectedUniversity}
              onUniversitySelect={handleUniversitySelect}
            />
          </div>

          {/* Interactive Map - Right Column */}
          <div className="lg:col-span-3 h-full flex">
            <InteractiveMap />
          </div>
        </motion.div>
      </div>
    </section>
  )
} 