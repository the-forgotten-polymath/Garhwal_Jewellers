import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Calendar, PiggyBank, TrendingUp } from 'lucide-react';

const steps = [
  { icon: <Calendar size={32} />, title: "Open Account", desc: "Start with as little as ₹2,000 monthly for 11 months." },
  { icon: <PiggyBank size={32} />, title: "11 Months Tenure", desc: "Pay 11 monthly installments of your chosen fixed amount." },
    { icon: <TrendingUp size={32} />, title: "Bonus Installment", desc: "New Garhwal Jewellers pays the 12th installment for you as a gift." }
];

const GoldScheme = () => {
  return (
    <section id="scheme" className="py-40 bg-deep-bg relative overflow-hidden">
      {/* Background visual element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-12"
          >
            <div className="space-y-6">
              <span className="text-gold font-bold uppercase tracking-[0.8em] text-[10px] block font-poppins">Investment Future</span>
              <h2 className="text-5xl md:text-7xl leading-none font-serif text-white uppercase">SWARNA <br /> <span className="text-gold italic font-playfair font-black">SAMRIDHI</span></h2>
              <p className="text-white/40 text-xl font-light font-poppins max-w-xl leading-relaxed">
                Unlock the door to your dream jewellery with our flexible gold savings plan. Smart, safe, and tailored for Dehradun's families.
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-8 p-10 card-luxury group"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white font-serif tracking-widest uppercase">{step.title}</h4>
                    <p className="text-white/40 text-sm font-poppins">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="flex-1 w-full max-w-2xl"
          >
            <div className="relative p-12 lg:p-20 gold-border group overflow-hidden bg-black shadow-2xl">
              <div className="relative z-10 space-y-10 group-hover:scale-[1.02] transition-transform duration-1000">
                <div className="inline-block px-4 py-2 bg-gold/10 text-gold text-[10px] font-bold uppercase tracking-widest rounded-full mb-4 border border-gold/20 font-poppins">
                  Exclusive Reward
                </div>
                <h3 className="text-4xl font-bold font-serif leading-tight text-white uppercase">THE 12TH <br /> INSTALLMENT IS <span className="text-gold italic font-playfair font-black">ON US.</span></h3>
                <p className="text-white/50 font-poppins text-lg leading-relaxed">
                  Join our legacy plan and get 100% bonus on your final installment. Perfect for weddings, birthdays, or long-term wealth building.
                </p>
                <a 
                  href="https://wa.me/917500290530" 
                  className="inline-flex items-center gap-6 text-gold font-bold uppercase tracking-[0.4em] text-xs pt-6 border-t border-white/5 w-full hover:gap-10 transition-all font-poppins"
                >
                  Calculate My Benefits <ChevronRight size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoldScheme;
