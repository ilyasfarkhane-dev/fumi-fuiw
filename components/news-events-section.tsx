"use client"

import { useState } from "react"
import NewsCard from "./news-card"

const categories = [
  "الكل",
  "منح دراسية",
  "مؤتمرات",
  "فرص عمل",
  "برامج"
]

const newsData = [
  {
    id: 1,
    title: "منحة دراسية جديدة للطلاب المتفوقين",
    description: "إعلان عن منحة دراسية للطلبة النخبة في شبكة الجامعات من الأعضاء.",
    image: null,
    category: "منح دراسية",
    date: "2024-07-15",
    endDate: "15-08-2024"
  },
  {
    id: 2,
    title: "مؤتمر البحث العلمي الإسلامي 2024",
    description: "دعوة لتقديم الأوراق البحثية للمؤتمر السنوي للبحث العلمي.",
    image: null,
    category: "مؤتمرات",
    date: "2024-07-10",
    endDate: "19-07-2024"
  },
  {
    id: 3,
    title: "برنامج تبادل الطلاب الجديد",
    description: "إطلاق برنامج تبادل مكثف بين 50 جامعة عضو في الاتحاد.",
    image: null,
    category: "برامج",
    date: "2024-01-08",
    endDate: "01-06-2024"
  },
  {
    id: 4,
    title: "فرصة عمل: أستاذ مشارك في الهندسة",
    description: "جامعة الأزهر تعلن عن وظيفة شاغرة لأستاذ مشارك في قسم الهندسة.",
    image: null,
    category: "فرص عمل",
    date: "2024-06-20",
    endDate: "10-07-2024"
  },
  {
    id: 5,
    title: "منحة بحثية للعلوم التطبيقية",
    description: "منحة بحثية مخصصة للباحثين في مجالات العلوم التطبيقية.",
    image: null,
    category: "منح دراسية",
    date: "2024-05-15",
    endDate: "30-06-2024"
  },
  {
    id: 6,
    title: "ورشة عمل حول الذكاء الاصطناعي",
    description: "ورشة عمل تفاعلية حول تطبيقات الذكاء الاصطناعي في التعليم.",
    image: null,
    category: "مؤتمرات",
    date: "2024-04-10",
    endDate: "15-04-2024"
  },
  {
    id: 7,
    title: "برنامج تطوير مهارات الطلاب",
    description: "برنامج تدريبي جديد لتطوير المهارات القيادية لدى الطلاب.",
    image: null,
    category: "برامج",
    date: "2024-03-01",
    endDate: "01-05-2024"
  }
]

const CARDS_PER_PAGE = 6;

export default function NewsEventsSection() {
  const [selectedCategory, setSelectedCategory] = useState("الكل")
  const [currentPage, setCurrentPage] = useState(1)

  // Filtrage dynamique
  const filtered = selectedCategory === "الكل"
    ? newsData
    : newsData.filter(n => n.category === selectedCategory)

  // Pagination
  const totalPages = Math.ceil(filtered.length / CARDS_PER_PAGE)
  const startIdx = (currentPage - 1) * CARDS_PER_PAGE
  const endIdx = startIdx + CARDS_PER_PAGE
  const paginated = filtered.slice(startIdx, endIdx)

  // Gestion du changement de catégorie
  const handleCategory = (cat: string) => {
    setSelectedCategory(cat)
    setCurrentPage(1) // Reset to first page on category change
  }

  // Pagination controls
  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))
  }
  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages))
  }
  const handlePage = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <section className="bg-[#F8F8F8] py-20 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0b787f] mb-4 font-arabic relative inline-block">
            آخر الأخبار والفعاليات
            <span className="block h-1 w-24 bg-[#c7b9a7] mx-auto mt-8 rounded-full" />
          </h2>
          <p className="text-lg text-gray-600 font-arabic max-w-3xl mx-auto" dir="rtl">
            كن على اطلاع بآخر التطورات والدروس في العالم الأكاديمي الإسلامي
          </p>
        </div>

        {/* Barre de filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-5 py-2 rounded-lg font-bold border transition-all duration-200 font-arabic ${
                selectedCategory === cat
                  ? 'bg-[#0b787f] text-white shadow border-[#2E8B57]' 
                  : 'bg-white text-gray-900 border-gray-200 hover:bg-[#e6f4ee]'
              }`}
              onClick={() => handleCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginated.map(article => (
            <NewsCard key={article.id} {...article} />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded border font-arabic text-sm disabled:opacity-50"
            >
              السابق
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePage(i + 1)}
                className={`px-3 py-1 rounded font-arabic text-sm border ${currentPage === i + 1 ? 'bg-[#0b787f] text-white border-[#2E8B57]' : 'bg-white text-gray-900 border-gray-200'}`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded border font-arabic text-sm disabled:opacity-50"
            >
              التالي
            </button>
          </div>
        )}
      </div>
    </section>
  )
} 