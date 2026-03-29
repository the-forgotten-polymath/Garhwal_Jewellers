import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Award, ShieldCheck, HeartPulse } from 'lucide-react';

const specialties = [
  {
    icon: <Gem className="text-gold" size={32} />,
    title: "Heritage Artistry",
    description: "Authentic Pahadi designs including Tehri Nath and Guluband, crafted by master artisans."
  },
  {
    icon: <ShieldCheck className="text-gold" size={32} />,
    title: "Purity Guaranteed",
    description: "Every piece is 22kt BIS Hallmarked with certificate of authenticity provided at purchase."
  },
  {
    icon: <Award className="text-gold" size={32} />,
    title: "Honest Exchange",
    description: "Best market rates for old gold exchange with zero hidden deductions or melting losses."
  },
  {
    icon: <HeartPulse className="text-gold" size={32} />,
    title: "Custom Creations",
    description: "Transform your vision into reality with our personalized design consultation services."
  }
];

const Specialties = () => {
  return (
    <section className="py-24 bg-deep-bg relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-10 card-luxury group"
            >
              <div className="mb-8 p-4 bg-gold/5 w-fit rounded-lg group-hover:bg-gold/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white tracking-widest font-serif">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-poppins">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Featured Quote or Small Highlight */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-20 text-center max-w-2xl px-6"
      >
        <p className="text-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-4 block underline underline-offset-8">Our core belief</p>
        <h2 className="text-3xl md:text-5xl font-serif leading-tight italic">
          "Purity is not just a standard, <br /> it is our <span className="text-gold not-italic">Honest Heritage</span>"
        </h2>
      </motion.div>
    </section>
  );
};

export default Specialties;
