"use client"

import { useState } from "react"
import { GraduationCap, BookOpen, Users, Globe } from "lucide-react"
import { motion } from "framer-motion"
import DefinitionCard from "./definition-card"
import DefinitionModal from "./definition-modal"

const cards = [
  {
    icon: <GraduationCap size={36} />, // Excellence Académique
    title: "التميز الأكاديمي",
    description: "تعزيز جودة التعليم والبحث العلمي في الجامعات الأعضاء.",
    details: "يهدف الاتحاد إلى رفع مستوى التميز الأكاديمي من خلال برامج تطويرية وشراكات استراتيجية بين الجامعات الأعضاء، مع التركيز على الابتكار والتفوق العلمي.",
  },
  {
    icon: <BookOpen size={36} />, // Recherche Scientifique
    title: "البحث العلمي",
    description: "دعم المشاريع البحثية المشتركة وتبادل المعرفة.",
    details: "يشجع الاتحاد على التعاون البحثي بين الجامعات، وتوفير منصات لتبادل المعرفة ونشر الأبحاث العلمية المبتكرة في مختلف المجالات.",
  },
  {
    icon: <Users size={36} />, // Échange Étudiant
    title: "التبادل الطلابي",
    description: "تسهيل برامج التبادل الطلابي والتجارب الدولية.",
    details: "يوفر الاتحاد فرصًا للطلاب للمشاركة في برامج التبادل الأكاديمي، مما يعزز من خبراتهم الدولية وتنوعهم الثقافي.",
  },
  {
    icon: <Globe size={36} />, // Réseau Mondial
    title: "شبكة عالمية",
    description: "بناء شبكة علاقات دولية بين الجامعات والمؤسسات.",
    details: "يسعى الاتحاد إلى توسيع شبكة العلاقات الأكاديمية على المستوى العالمي، وتعزيز التعاون مع مؤسسات التعليم العالي الدولية.",
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.2 + i * 0.15, duration: 0.6, ease: 'easeOut' } })
}

export default function DefinitionSection() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState<number | null>(null)

  return (
    <section className="bg-[#F5F5F5] py-20 px-4 md:px-0">
      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12 space-y-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#0b787f] mb-2 font-arabic relative inline-block">
          اتحاد جامعات العالم الإسلامي
          <span className="block h-1 w-24 bg-[#c7b9a7] mx-auto mt-6 rounded-full" />
        </h2>
        <h3 className="text-xl md:text-2xl font-bold text-[#0b787f] mb-2 font-arabic">
          منظمة دولية رائدة تجمع أكثر من 350 جامعة من 57 دولة حول العالم
        </h3>
        <p className="text-gray-800 text-lg font-arabic leading-relaxed mb-4" dir="rtl">
          تأسس اتحاد جامعات العالم الإسلامي عام 1987 كمنظمة غير حكومية تهدف إلى تعزيز التعاون الأكاديمي والبحثي بين الجامعات في العالم الإسلامي. يشمل الاتحاد أكثر من 350 جامعة من المؤسسات التعليمية المرموقة لشباب، الخبرات والمعرفة وتطوير البحث العلمي.<br />
          من خلال برامجه المتنوعة، يسهم الاتحاد في رفع مستوى التعليم العالي، وتقديم تدريبات للأعضاء في مجالات التدريس والبحث وخدمة المجتمع، مما يساعد في التنمية المستدامة للمجتمعات الإسلامية.
        </p>
      </motion.div>

      {/* Definition Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <DefinitionCard
              icon={card.icon}
              title={card.title}
              description={card.description}
              onClick={() => { setSelectedCard(idx); setModalOpen(true); }}
              isActive={selectedCard === idx && modalOpen}
            />
          </motion.div>
        ))}
      </div>

      {/* Modal for card details */}
      <DefinitionModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={selectedCard !== null ? cards[selectedCard].title : ""}
        description={selectedCard !== null ? cards[selectedCard].details : ""}
      />

      {/* Notre Message Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto bg-[#E0F2F1] rounded-xl p-10 mt-12"
      >
        <h3 className="text-2xl font-bold text-[#0b787f] mb-4 font-arabic text-center" dir="rtl">
          رسالتنا
        </h3>
        <p className="text-gray-800 text-lg font-arabic leading-relaxed text-justify" dir="rtl">
          نؤمن بأن التعاون الأكاديمي والبحثي هو أساس التقدم والابتكار في العالم الإسلامي. رسالتنا هي بناء جسور من الشراكة والمعرفة بين الجامعات، وتمكين الأجيال القادمة من تحقيق إمكاناتهم الكاملة في بيئة تعليمية متطورة وشاملة.
        </p>
      </motion.div>
    </section>
  )
}

