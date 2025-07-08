import React from "react";

interface OpportunitySearchFilterProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedLevel: string;
  onLevelChange: (value: string) => void;
  levels: string[];
}

export default function OpportunitySearchFilter({
  searchTerm,
  onSearchChange,
  selectedLevel,
  onLevelChange,
  levels,
}: OpportunitySearchFilterProps) {
  return (
    <div className="flex w-full gap-3 flex-col md:flex-row md:items-center">
      {/* Filtre déroulant */}
      <div className="relative w-full md:w-1/3">
        <select
          className="w-full appearance-none bg-white border border-gray-200 rounded-lg py-2 pl-10 pr-8 text-gray-700 font-arabic focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
          value={selectedLevel}
          onChange={e => onLevelChange(e.target.value)}
        >
          <option value="جميع المستويات">جميع المستويات</option>
          {levels.map(level => (
            <option key={level} value={level}>{level}</option>
          ))}
        </select>
        {/* Icône filtre */}
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#2E8B57]">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6a1 1 0 0 1 1-1h16a1 1 0 0 1 .8 1.6l-5.6 7.47V19a1 1 0 0 1-1.45.89l-3-1.5A1 1 0 0 1 10 17v-2.93L4.2 7.6A1 1 0 0 1 3 6Z"/></svg>
        </span>
        {/* Flèche */}
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M7 10l5 5 5-5"/></svg>
        </span>
      </div>
      {/* Champ de recherche */}
      <div className="relative w-full md:w-2/3">
        <input
          type="text"
          className="w-full bg-white border border-gray-200 rounded-lg py-2 pr-10 pl-4 text-gray-700 font-arabic focus:outline-none focus:ring-2 focus:ring-[#2E8B57]"
          placeholder="ابحث عن المنح الدراسية..."
          value={searchTerm}
          onChange={e => onSearchChange(e.target.value)}
          dir="rtl"
        />
        {/* Icône recherche */}
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M21 21l-4.35-4.35"/></svg>
        </span>
      </div>
    </div>
  );
} 