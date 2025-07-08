import { ReactNode } from "react"
import { motion } from "framer-motion"

interface DefinitionCardProps {
  icon: ReactNode
  title: string
  description: string
  onClick: () => void
  isActive: boolean
}

export default function DefinitionCard({ icon, title, description, onClick, isActive }: DefinitionCardProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary ${isActive ? 'ring-2 ring-primary' : ''}`}
      whileHover={{ y: -5, boxShadow: "0px 8px 25px rgba(0,0,0,0.2)" }}
      whileTap={{ scale: 0.97 }}
      aria-pressed={isActive}
    >
      <span className="mb-4 text-4xl text-[#134f4b]">{icon}</span>
      <span className="font-bold text-lg mb-2 text-[#134f4b] font-arabic">{title}</span>
      <span className="text-gray-700 text-sm font-arabic line-clamp-3">{description}</span>
    </motion.button>
  )
} 