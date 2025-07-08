import React from 'react';
import { GraduationCap, BookOpen, Globe, Users, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

const MembershipBenefits = () => {
  const benefits = [
    {
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      title: "برامج التميز",
      description: "مشاركة في برامج التعليم والتطوير الأكاديمي"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "تبادل المعرفة",
      description: "مشاركة الموارد والخبرات الأكاديمية والإدارية"
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "تعاون دولي",
      description: "فرص للتعاون في البحث العلمي والمشاريع الأكاديمية"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "شبكة عالمية",
      description: "اتصال مباشر مع أكثر من 350 جامعة عضو حول العالم"
    }
  ];

  const collaborations = [
    {
      number: "45",
      unit: "برنامج",
      title: "برامج الشهادات المزدوجة",
      description: "شهادات معتمدة من داعمين أو أكثر"
    },
    {
      number: "85",
      unit: "مشروع نشط",
      title: "المشاريع البحثية المشتركة",
      description: "بحوث متعددة التخصصات في مجالات متنوعة"
    },
    {
      number: "120",
      unit: "جامعة",
      title: "برنامج تبادل أعضاء هيئة التدريس",
      description: "لتبادل الخبرات التدريسية والبحثية"
    }
  ];

  return (
    <div className="bg-[#134f4b] py-16 px-4 text-white" dir="rtl">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            مزايا العضوية
          </motion.h2>
          <motion.p
            className="text-lg text-teal-100 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            انضم إلى شبكة عالمية من الجامعات الرائدة واستفد من فرص التعاون والتطوير الأكاديمي
          </motion.p>
        </motion.div>

        {/* Benefits Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
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
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, delay: 0.1 * index, ease: "easeOut" }}
            >
              <div className="flex justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Active Collaboration Section */}
        <motion.div
          className="mb-12"
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
          <motion.h3
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            التعاون النشط
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {collaborations.map((collab, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, delay: 0.1 * index, ease: "easeOut" }}
              >
                <div className="mb-4">
                  <span className="text-4xl font-bold">{collab.number}</span>
                  <span className="text-lg mr-2">{collab.unit}</span>
                </div>
                <h4 className="text-xl font-semibold mb-3">{collab.title}</h4>
                <p className="text-teal-100 text-sm leading-relaxed">
                  {collab.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <button className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors duration-300 flex items-center gap-2">
            تقديم طلب العضوية
          </button>
          <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300 flex items-center gap-2">
            <Lock className="w-5 h-5" />
            دخول البوابة الخاصة
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default MembershipBenefits; 