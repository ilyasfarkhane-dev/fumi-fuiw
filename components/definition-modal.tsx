import { ReactNode, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface DefinitionModalProps {
  open: boolean
  onClose: () => void
  title: string
  description: string
  children?: ReactNode
}

export default function DefinitionModal({ open, onClose, title, description, children }: DefinitionModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKey)
    return () => document.removeEventListener("keydown", handleKey)
  }, [open, onClose])

  useEffect(() => {
    if (open && modalRef.current) {
      modalRef.current.focus()
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-8 relative outline-none"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            tabIndex={-1}
            ref={modalRef}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-4 text-gray-500 hover:text-primary focus:outline-none"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-[#0b7880] font-arabic">{title}</h2>
            <p className="text-gray-700 mb-4 font-arabic">{description}</p>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 