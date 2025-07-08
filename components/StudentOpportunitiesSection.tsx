import React, { useEffect, useState } from "react";
import OpportunitySearchFilter from "./OpportunitySearchFilter";
import OpportunityCard, { OpportunityCardProps } from "./OpportunityCard";
import { motion } from "framer-motion";

export default function StudentOpportunitiesSection() {
  const [opportunities, setOpportunities] = useState<OpportunityCardProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("جميع المستويات");
  const [filtered, setFiltered] = useState<OpportunityCardProps[]>([]);

  // Charger les données (import dynamique pour éviter SSR)
  useEffect(() => {
    import("../data/opportunities.json").then((data) => {
      setOpportunities(data.default || data);
    });
  }, []);

  // Extraire dynamiquement les niveaux uniques
  const levels = React.useMemo(() => {
    const all = opportunities.map((o) => o.level);
    return Array.from(new Set(all));
  }, [opportunities]);

  // Filtrage dynamique
  useEffect(() => {
    let result = opportunities;
    if (selectedLevel !== "جميع المستويات") {
      result = result.filter((o) => o.level === selectedLevel);
    }
    if (searchTerm.trim()) {
      const term = searchTerm.trim();
      result = result.filter(
        (o) =>
          o.title.includes(term) ||
          o.university.includes(term) ||
          o.field.includes(term) ||
          o.description.includes(term)
      );
    }
    setFiltered(result);
  }, [opportunities, searchTerm, selectedLevel]);

  return (
    <section className="bg-[#F8F8F8] py-20 px-4 md:px-0">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-[#0b787f] mb-4 font-arabic relative inline-block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            فرص للطلاب
            <span className="block h-1 w-24 bg-[#c7b9a7] mx-auto mt-6 rounded-full" />
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 font-arabic max-w-3xl mx-auto" dir="rtl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            لاكتشاف المنح الدراسية والبرامج التبادلية المتاحة
          </motion.p>
        </motion.div>

        {/* Barre de recherche et de filtrage */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <OpportunitySearchFilter
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedLevel={selectedLevel}
            onLevelChange={setSelectedLevel}
            levels={levels}
          />
        </motion.div>

        {/* Grille d'opportunités */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.length === 0 ? (
            <motion.div
              className="col-span-full text-center text-gray-400 font-arabic py-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              لا توجد فرص مطابقة حالياً
            </motion.div>
          ) : (
            filtered.map((op, i) => (
              <motion.div
                key={op.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: 0.1 * i, ease: "easeOut" }}
              >
                <OpportunityCard {...op} />
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
} 