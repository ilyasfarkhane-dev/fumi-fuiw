import React, { useEffect, useState } from "react";
import TestimonialCard, { TestimonialCardProps } from "./TestimonialCard";
import ActionButton from "./ActionButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";

export default function SuccessStoriesSection() {
  const [testimonials, setTestimonials] = useState<TestimonialCardProps[]>([]);

  // Charger les données (import dynamique pour éviter SSR)
  useEffect(() => {
    import("../data/testimonials.json").then((data) => {
      setTestimonials(data.default || data);
    });
  }, []);

  return (
    <section className="bg-[#F8F8F8] py-20 px-4 md:px-0">
      <div className="max-w-5xl mx-auto">
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
            قصص نجاح
            <span className="block h-1 w-24 bg-[#c7b9a7] mx-auto mt-6 rounded-full" />
          </motion.h2>
        </motion.div>

        {/* Carrousel de témoignages */}
        <div className="mb-10">
          {testimonials.length === 0 ? (
            <div className="col-span-full text-center text-gray-400 font-arabic py-12">لا توجد شهادات حالياً</div>
          ) : (
            <Swiper
              modules={[Pagination, A11y, Autoplay]}
              spaceBetween={32}
              slidesPerView={1}
              autoplay={{ delay: 3500, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
              }}
              className="!pb-16"
              dir="rtl"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, delay: 0.1 * i, ease: "easeOut" }}
                    className="h-full"
                  >
                    <TestimonialCard {...t} />
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* Bouton d'action */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <ActionButton
            label="استكشاف جميع البرامج"
            href="/programs"
            icon={
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M21 21l-4.35-4.35"/></svg>
            }
          />
        </motion.div>
      </div>
    </section>
  );
} 