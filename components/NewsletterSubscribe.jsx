import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);

  return (
    <section className="bg-white py-24 px-4" dir="rtl">
      <div className="max-w-2xl mx-auto">
        {/* Icône + Titre + Sous-titre */}
        <motion.div
          className="flex flex-col items-center text-center mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="bg-teal-50 rounded-full w-16 h-16 flex items-center justify-center mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <Mail className="w-8 h-8 text-teal-600" />
          </motion.div>
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            اشترك في النشرة الإخبارية
          </motion.h2>
          <motion.p
            className="text-gray-600 mb-4 max-w-md"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            كن أول من يعلم بآخر الأخبار والمواعيد والتحديثات في العالم الأكاديمي الإسلامي
          </motion.p>
        </motion.div>
        {/* Formulaire */}
        <motion.form
          className="bg-gray-50 rounded-lg shadow-sm p-6 flex flex-col gap-4 mb-8"
          onSubmit={e => e.preventDefault()}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              className="w-full bg-white border border-gray-200 rounded-lg py-2 px-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
              placeholder="أدخل بريدك الإلكتروني"
              value={email}
              onChange={e => setEmail(e.target.value)}
              dir="rtl"
              required
            />
            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition-colors duration-200 whitespace-nowrap"
              disabled={!email || !accepted}
            >
              اشترك الآن
            </button>
          </div>
          <label className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer select-none">
            <input
              type="checkbox"
              className="accent-teal-600 w-4 h-4"
              checked={accepted}
              onChange={e => setAccepted(e.target.checked)}
              required
            />
            أوافق على تلقي النشرة الإخبارية وأستور سياسة الخصوصية
          </label>
        </motion.form>
        {/* Sections d'infos supplémentaires */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
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
          <motion.div
            className="bg-gray-50 rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">دعوات للفعاليات</h3>
            <p className="text-gray-600 text-sm">دعوات خاصة لأهم الفعاليات</p>
          </motion.div>
          <motion.div
            className="bg-gray-50 rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">تنبيهات للمجتمع</h3>
            <p className="text-gray-600 text-sm">إشعارات فورية في مواضيع المجتمع</p>
          </motion.div>
          <motion.div
            className="bg-gray-50 rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            <h3 className="text-lg font-bold text-gray-900 mb-2">أخبار أسبوعية</h3>
            <p className="text-gray-600 text-sm">آخر التطورات في الجامعات الأعضاء</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSubscribe; 