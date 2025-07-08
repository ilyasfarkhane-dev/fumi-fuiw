import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const quickLinks = [
  { label: 'عن الاتحاد', href: '#' },
  { label: 'الدراسات والأبحاث', href: '#' },
  { label: 'البرامج الدراسية', href: '#' },
  { label: 'البحث العلمي', href: '#' },
  { label: 'الأخبار', href: '#' },
  { label: 'التواصل', href: '#' },
];

const services = [
  { label: 'بوابة الطلاب', href: '#' },
  { label: 'بوابة أعضاء هيئة التدريس', href: '#' },
  { label: 'بوابة الجامعات', href: '#' },
  { label: 'مكتبة الأبحاث', href: '#' },
  { label: 'دليل الجامعات', href: '#' },
  { label: 'التقويم الأكاديمي', href: '#' },
];

const socialLinks = [
  { icon: <Linkedin className="w-5 h-5" />, href: '#' },
  { icon: <Twitter className="w-5 h-5" />, href: '#' },
  { icon: <Facebook className="w-5 h-5" />, href: '#' },
  { icon: <Instagram className="w-5 h-5" />, href: '#' },
  { icon: <Youtube className="w-5 h-5" />, href: '#' },
];

const legalLinks = [
  { label: 'سياسة الخصوصية', href: '#' },
  { label: 'شروط الاستخدام', href: '#' },
  { label: 'سياسة ملفات تعريف الارتباط', href: '#' },
];

const CustomFooter = () => {
  return (
    <footer className="bg-[#1a2233] text-gray-200 pt-12 pb-6 px-4" dir="rtl">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-8"
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
        {/* Colonne 1 : Organisation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <h3 className="text-lg font-bold mb-3 text-white">اتحاد جامعات العالم الإسلامي</h3>
          <p className="text-sm mb-4 text-gray-300">
            منظمة رائدة تجمع أكثر من 350 جامعة من العالم الإسلامي لتعزيز التعاون الأكاديمي والبحث العلمي وتبادل المعرفة.
          </p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-teal-400" />
              <a href="mailto:info@iuw.org" className="hover:underline">info@iuw.org</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-teal-400" />
              <a href="tel:+966112342639" className="hover:underline">2639 234 11 966+</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-teal-400" />
              <span>الرياض، المملكة العربية السعودية</span>
            </li>
          </ul>
        </motion.div>
        {/* Colonne 2 : Liens rapides */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <h4 className="text-lg font-bold mb-3 text-white">روابط سريعة</h4>
          <ul className="space-y-2 text-sm">
            {quickLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-teal-400 transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </motion.div>
        {/* Colonne 3 : Services */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <h4 className="text-lg font-bold mb-3 text-white">الخدمات</h4>
          <ul className="space-y-2 text-sm">
            {services.map(link => (
              <li key={link.label}>
                <a href={link.href} className="hover:text-teal-400 transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </motion.div>
        {/* Colonne 4 : Suivez-nous */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          <h4 className="text-lg font-bold mb-3 text-white">تابعنا</h4>
          <div className="flex gap-3 mt-2">
            {socialLinks.map((s, i) => (
              <a key={i} href={s.href} className="bg-teal-600 hover:bg-teal-500 transition-colors rounded-full p-2 text-white" target="_blank" rel="noopener noreferrer">
                {s.icon}
              </a>
            ))}
          </div>
        </motion.div>
        {/* Colonne 5 : Heures de travail */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          <h4 className="text-lg font-bold mb-3 text-white">ساعات العمل</h4>
          <div className="text-sm text-gray-300">
            <div>الأحد - الخميس: 8:00 ص - 5:00 م</div>
            <div>الجمعة - السبت: عطلة</div>
          </div>
        </motion.div>
      </motion.div>
      {/* Copyright et liens légaux */}
      <motion.div
        className="border-t border-gray-700 pt-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }}
        transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
      >
        <div>© 2024 اتحاد جامعات العالم الإسلامي. جميع الحقوق محفوظة.</div>
        <div className="flex gap-4 flex-wrap">
          {legalLinks.map(link => (
            <a key={link.label} href={link.href} className="hover:text-teal-400 transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default CustomFooter; 