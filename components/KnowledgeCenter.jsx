import React, { useState } from 'react';
import { Search, Filter, User, FileText, Download, BookOpen, Users, BarChart2 } from 'lucide-react';
import { motion } from 'framer-motion';

const researchers = [
  {
    id: 1,
    name: 'د. فاطمة الباحثة',
    specialty: 'الدراسات الإسلامية',
    university: 'جامعة الأزهر',
    stats: '45 منشور | 120 استشهاد',
  },
  {
    id: 2,
    name: 'د. محمد العالم',
    specialty: 'الفيزياء النووية',
    university: 'جامعة الملك سعود',
    stats: '32 منشور | 80 استشهاد',
  },
  {
    id: 3,
    name: 'د. عائشة الطبية',
    specialty: 'الآداب والعلوم الإنسانية',
    university: 'جامعة مستنصرية',
    stats: '60 منشور | 200 استشهاد',
  },
];

const publications = [
  {
    id: 1,
    tags: ['ورقة بحثية', 'تعليم'],
    title: 'مجلة البحوث الإسلامية المعاصرة',
    author: 'بواسطة د. محمد العالم',
    date: '2024-01-15',
    desc: 'بحوث محكمة في الدراسات الإسلامية المعاصرة.',
    stats: '45 صفحة | 1250 تحميل | العربية',
  },
  {
    id: 2,
    tags: ['تقرير'],
    title: 'تقرير حالة التعليم العالي في العالم الإسلامي 2024',
    author: 'بواسطة د. عائشة الطبية',
    date: '2024-03-10',
    desc: 'تقرير شامل حول تطور التعليم العالي في العالم الإسلامي.',
    stats: '80 صفحة | 900 تحميل | العربية',
  },
  {
    id: 3,
    tags: ['ورقة بحثية', 'ذكاء اصطناعي'],
    title: 'تطبيقات الذكاء الاصطناعي في التعليم الإسلامي',
    author: 'بواسطة د. فاطمة الباحثة',
    date: '2023-11-22',
    desc: 'دراسة حول استخدام الذكاء الاصطناعي في تطوير التعليم.',
    stats: '30 صفحة | 600 تحميل | العربية',
  },
];

const stats = [
  { value: '+50', label: 'ورقة بحثية', icon: <BookOpen className="w-7 h-7 text-[#0b787f]" /> },
  { value: '180', label: 'بحث علمي', icon: <BarChart2 className="w-7 h-7 text-[#0b787f]" /> },
  { value: '+2,500', label: 'باحث نشط', icon: <Users className="w-7 h-7 text-[#0b787f]" /> },
  { value: '+15,000', label: 'ورقة بحثية', icon: <FileText className="w-7 h-7 text-[#0b787f]" /> },
];

const categories = ['الكل', 'ورقة بحثية', 'تقرير', 'تعليم', 'ذكاء اصطناعي'];

const KnowledgeCenter = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  // Filtrage publications
  const filteredPublications = selectedCategory === 'الكل'
    ? publications
    : publications.filter(pub => pub.tags.includes(selectedCategory));

  return (
    <section className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24" dir="rtl">
      {/* En-tête */}
      <motion.div
        className="text-center mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl font-bold mb-2 text-gray-900"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          مركز المعرفة
        </motion.h2>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          وصول مجاني للمكتبات العلمية والأوراق البحثية والتقارير
        </motion.p>
      </motion.div>
      {/* Barre de recherche et filtrage */}
      <motion.div
        className="flex flex-col md:flex-row items-center gap-4 mb-8 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      >
        <div className="relative w-full md:w-2/3">
          <input
            type="text"
            className="w-full bg-white border border-gray-200 rounded-lg py-2 pr-10 pl-4 text-gray-700 font-arabic focus:outline-none focus:ring-2 focus:ring-[#0b787f]"
            placeholder="ابحث في قاعدة المعرفة"
            value={search}
            onChange={e => setSearch(e.target.value)}
            dir="rtl"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search className="w-5 h-5" />
          </span>
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 text-gray-700 hover:bg-teal-50 transition-colors">
          <Filter className="w-5 h-5 text-[#0b787f]" />
          <span>تصفية</span>
        </button>
        <div className="flex gap-2 flex-wrap justify-center md:justify-start">
          {categories.map(cat => (
            <button
              key={cat}
              className={`px-4 py-1 rounded-full border text-sm font-arabic transition-all duration-200 ${selectedCategory === cat ? 'bg-[#0b787f] text-white border-[#0b787f]' : 'bg-white text-gray-900 border-gray-200 hover:bg-[#0b787f]/10'}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </motion.div>
      {/* Grille principale */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {/* Colonne chercheurs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          <h3 className="text-xl font-bold mb-4 text-gray-900">ابحث عن باحث</h3>
          <div className="space-y-4">
            {researchers.map((r, i) => (
              <motion.div
                key={r.id}
                className="flex items-center bg-white rounded-lg shadow-sm p-4 gap-4 hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.1 * i, ease: "easeOut" }}
              >
                <div className="w-14 h-14 rounded-full bg-[#0b787f]/10 flex items-center justify-center text-[#0b787f] text-2xl">
                  <User className="w-8 h-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900 truncate">{r.name}</div>
                  <div className="text-sm text-gray-600 truncate">{r.specialty} - {r.university}</div>
                  <div className="text-xs text-gray-400 mt-1">{r.stats}</div>
                </div>
                <button className="ml-2 bg-[#0b787f] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#0b787f]/80 transition-colors">تواصل</button>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Colonne publications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          <h3 className="text-xl font-bold mb-4 text-gray-900">المنشورات والبحوث</h3>
          <div className="space-y-4">
            {filteredPublications
              .filter(pub =>
                search.trim() === '' ||
                pub.title.includes(search) ||
                pub.author.includes(search) ||
                pub.desc.includes(search)
              )
              .map((pub, i) => (
                <motion.div
                  key={pub.id}
                  className="flex items-center bg-white rounded-lg shadow-sm p-4 gap-4 hover:shadow-md transition-all"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.7, delay: 0.1 * i, ease: "easeOut" }}
                >
                  <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 text-2xl">
                    <FileText className="w-7 h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-1">
                      {pub.tags.map(tag => (
                        <span key={tag} className="bg-teal-100 text-teal-700 px-2 py-0.5 rounded text-xs font-arabic">{tag}</span>
                      ))}
                    </div>
                    <div className="font-bold text-gray-900 truncate">{pub.title}</div>
                    <div className="text-xs text-gray-500 mb-1">{pub.author} - {pub.date}</div>
                    <div className="text-sm text-gray-600 truncate">{pub.desc}</div>
                    <div className="text-xs text-gray-400 mt-1">{pub.stats}</div>
                  </div>
                  <button className="ml-2 bg-[#0b787f] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#0b787f]/80 transition-colors flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    تحميل
                  </button>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
      {/* Statistiques */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 }
          }
        }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center hover:shadow-md transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1 * i, ease: "easeOut" }}
          >
            <div className="mb-2">{s.icon}</div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{s.value}</div>
            <div className="text-sm text-gray-600">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default KnowledgeCenter; 