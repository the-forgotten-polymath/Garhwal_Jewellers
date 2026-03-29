import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  MessageCircle, 
  ArrowRight, 
  Instagram, 
  Facebook, 
  Menu,
  X,
  Gem,
  Heart,
  ShieldCheck,
  MapPin,
  Phone,
  Clock,
  ChevronRight
} from 'lucide-react';

// Modules
import { GARHWAL_GALLERY, GARHWAL_REVIEWS } from './data/garhwal_data';
import Specialties from './components/Specialties';
import GoldScheme from './components/GoldScheme';

// --- SHARED UI ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl md:text-3xl font-serif font-bold tracking-widest text-gold uppercase"
        >
          NEW GARHWAL <span className="text-white font-light text-xl">JEWELLERS</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 text-[10px] font-bold tracking-[0.3em] uppercase">
          {['Home', 'Bridal', 'Gallery', 'Trust', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white/70 hover:text-gold transition-colors duration-300 font-poppins">
              {item}
            </a>
          ))}
          <a 
            href="https://wa.me/917500290530" 
            className="px-8 py-3 border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all duration-500 rounded-sm text-[9px] font-poppins"
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-gold/20 overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6 text-center">
              {['Home', 'Bridal', 'Gallery', 'Trust', 'Contact'].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-white py-4 border-b border-white/5 uppercase"
                >
                  {item}
                </a>
              ))}
              <a href="https://wa.me/917500290530" className="px-8 py-4 bg-gold text-black font-bold uppercase text-sm font-poppins">WhatsApp Enquire</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover scale-105">
          <source src="/assets/suvarna.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      <motion.div style={{ y: y1, opacity }} className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gold uppercase tracking-[0.8em] text-xs font-bold mb-8 block font-poppins"
          >
            EXCLUSIVE JEWELLERY DESIGNS IN DEHRADUN
          </motion.span>
          <h1 className="text-6xl md:text-[9vw] font-black mb-10 leading-[0.85] text-white tracking-tighter uppercase font-serif">
            WHERE GOLD <br /> <span className="text-gold italic font-playfair lowercase">sparkles</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-white/50 max-w-2xl mx-auto mb-16 leading-relaxed font-poppins">
             Elegant • Premium • Trusted by 400+ Customers in the heart of Uttarakhand.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <a href="https://wa.me/917500290530" className="px-14 py-6 bg-gold-gradient text-black font-extrabold rounded-full transition-all gold-glow-btn text-[10px] tracking-[0.3em] uppercase font-poppins flex items-center gap-4">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const BridalSection = () => {
  return (
    <section id="bridal" className="py-40 bg-deep-bg text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold/20 translate-x-8 translate-y-8"></div>
            <img src="/assets/garhwal/Screenshot 2026-03-29 125639.png" alt="Bridal Collection" className="relative z-10 w-full aspect-[4/5] object-cover" />
            <div className="absolute top-1/2 -right-12 bg-black py-12 px-8 border border-gold/20 z-20 hidden md:block shadow-2xl">
              <p className="text-7xl font-bold leading-none text-gold tracking-tighter">4.7⭐</p>
              <p className="text-[10px] uppercase tracking-[0.4em] font-bold mt-4 text-white/50 text-center">Customer Rating</p>
            </div>
          </motion.div>

          <div className="space-y-12">
            <div className="space-y-6">
              <span className="text-gold font-bold uppercase tracking-[0.8em] text-[10px] block font-poppins">Wedding Excellence</span>
              <h2 className="text-5xl md:text-7xl leading-tight font-serif uppercase">Bridal <br /> <span className="text-gold italic font-playfair lowercase">collection</span></h2>
            </div>
            <p className="text-xl text-white/40 leading-relaxed font-light font-poppins">
              Make your special day unforgettable with our handcrafted bridal jewellery. From heavy necklaces to complete wedding sets, each piece is a masterpiece of Garhwali artistry.
            </p>
            <div className="space-y-8 py-10 border-y border-white/5">
              {['Signature Rani Haar', 'Pure Gold Wedding Sets', 'Antique Bridal Bangles', 'Custom Polki Collection'].map((item, idx) => (
                 <div key={idx} className="flex items-center gap-6 group cursor-pointer">
                    <div className="w-8 h-[1px] bg-gold/30 group-hover:w-16 transition-all duration-500"></div>
                    <span className="text-lg font-serif uppercase tracking-widest text-white/70 group-hover:text-gold transition-colors">{item}</span>
                 </div>
              ))}
            </div>
            <a href="https://wa.me/917500290530" className="inline-flex items-center gap-6 text-gold font-bold uppercase tracking-[0.5em] text-[10px] hover:gap-10 transition-all font-poppins">Explore Bridal Catalog <ArrowRight size={18} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  return (
    <section id="gallery" className="py-40 bg-black text-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <span className="text-gold uppercase tracking-[0.8em] text-[10px] block mb-6 font-bold">The Showroom Grid</span>
          <h2 className="text-5xl md:text-8xl font-serif uppercase leading-tight">Handcrafted <br /> <span className="text-gold italic font-playfair lowercase">masterpieces</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {GARHWAL_GALLERY.map((img, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ delay: (index % 3) * 0.1 }} 
              viewport={{ once: true }} 
              className="group relative overflow-hidden aspect-[4/5] bg-deep-bg border border-white/5"
            >
              <img src={img.url} alt={img.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-[1200ms]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex flex-col justify-end">
                <span className="text-gold text-[10px] uppercase tracking-[0.4em] font-bold mb-3">Premium Design</span>
                <h4 className="text-2xl font-serif mb-2 uppercase">{img.title}</h4>
                <p className="text-white/40 text-sm font-poppins">{img.description}</p>
                <div className="w-12 h-[1px] bg-gold mt-6 group-hover:w-32 transition-all duration-700"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TrustSection = () => {
  return (
    <section id="trust" className="py-40 bg-deep-bg overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 mb-24 text-center">
        <div className="inline-flex items-center gap-4 bg-gold/10 px-6 py-3 rounded-full border border-gold/20 mb-8">
            <Star className="text-gold fill-gold" size={16} />
            <span className="text-gold font-bold uppercase tracking-[0.3em] text-[10px] font-poppins">4.7⭐ Global Rating</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-serif uppercase">Trusted by <span className="text-gold italic font-playfair lowercase">400+ families</span></h2>
      </div>
      <div className="relative">
        <div className="flex animate-marquee whitespace-nowrap py-10">
          {[...GARHWAL_REVIEWS, ...GARHWAL_REVIEWS].map((item, index) => (
            <div key={index} className="inline-block w-[450px] md:w-[650px] bg-black p-14 mx-8 card-luxury whitespace-normal border border-gold/5">
              <div className="flex justify-between items-start mb-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-2xl font-serif">{item.name.charAt(0)}</div>
                  <div>
                    <h4 className="text-white font-bold text-lg tracking-widest uppercase font-serif">{item.name}</h4>
                    <p className="text-white/20 text-[9px] uppercase tracking-[0.4em] font-bold font-poppins">{item.time}</p>
                  </div>
                </div>
                <div className="flex gap-1">{[1,2,3,4,5].map(i => <Star key={i} size={14} fill={i <= item.rating ? "#D4AF37" : "transparent"} className={i <= item.rating ? "text-gold" : "text-white/10"} />)}</div>
              </div>
              <p className="text-white/50 font-light leading-relaxed text-xl font-poppins italic">"{item.text}"</p>
              <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] text-gold font-bold uppercase tracking-[0.4em] font-poppins">Verified Reviewer</span>
                <Gem size={18} className="text-white/10" />
              </div>
            </div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-80 h-full bg-gradient-to-r from-deep-bg to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-80 h-full bg-gradient-to-l from-deep-bg to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-40 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="space-y-16">
            <div className="space-y-8">
              <span className="text-gold font-bold uppercase tracking-[0.5em] text-[10px] block font-poppins font-bold">Plan Your Visit</span>
              <h2 className="text-5xl md:text-8xl font-serif mb-10 leading-[1.1] uppercase font-black tracking-tighter text-white">Visit Our <br /> <span className="text-gold italic font-playfair lowercase">showroom</span></h2>
              <p className="text-white/40 font-light text-xl leading-relaxed max-w-lg font-poppins">Experience the magic of craftsmanship at our flagship store in Dehradun.</p>
            </div>
            <div className="space-y-12">
              <div className="flex items-start gap-8 group">
                <div className="w-14 h-14 bg-gold/5 flex items-center justify-center shrink-0 border border-gold/10 group-hover:bg-gold/10 transition-colors duration-500">
                    <MapPin className="text-gold" size={24} />
                </div>
                <div>
                    <h5 className="font-serif uppercase tracking-[0.3em] font-bold text-sm mb-2 text-white/80">Our Location</h5>
                    <p className="text-white/40 text-lg font-poppins leading-relaxed">Garhwal Tower, Sahastradhara Road, <br /> Dehradun, Uttarakhand</p>
                </div>
              </div>
              <div className="flex items-start gap-8 group">
                <div className="w-14 h-14 bg-gold/5 flex items-center justify-center shrink-0 border border-gold/10 group-hover:bg-gold/10 transition-colors duration-500">
                    <Phone className="text-gold" size={24} />
                </div>
                <div>
                    <h5 className="font-serif uppercase tracking-[0.3em] font-bold text-sm mb-2 text-white/80">Direct Call</h5>
                    <p className="text-white/40 text-lg font-poppins leading-relaxed">+91 75002 90530</p>
                </div>
              </div>
              <div className="flex items-start gap-8 group">
                <div className="w-14 h-14 bg-gold/5 flex items-center justify-center shrink-0 border border-gold/10 group-hover:bg-gold/10 transition-colors duration-500">
                    <Clock className="text-gold" size={24} />
                </div>
                <div>
                    <h5 className="font-serif uppercase tracking-[0.3em] font-bold text-sm mb-2 text-white/80">Business Hours</h5>
                    <p className="text-white/40 text-lg font-poppins leading-relaxed">Open every day till 8:30 PM <br />(12:00 PM - 8:30 PM)</p>
                </div>
              </div>
            </div>
            <div className="pt-10">
                <a href="https://www.google.com/maps/dir/?api=1&destination=Garhwal+Tower+Sahastradhara+Road+Dehradun" target="_blank" rel="noreferrer" className="inline-flex items-center gap-8 bg-white text-black px-12 py-6 rounded-full font-bold uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:bg-gold transition-all duration-500 font-poppins">Get Directions <ArrowRight size={20} /></a>
            </div>
          </div>
          <div className="h-[750px] border border-gold/10 p-3 shadow-2xl overflow-hidden relative group bg-deep-bg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.646864197471!2d78.0434446!3d30.3013217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c293701265%3A0xc3f60879ee908bf4!2sSuvarna%20Jewellers!5e0!3m2!1sen!2sin!4v1711681234567!5m2!1sen!2sin" className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-32 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10 relative">
        <h2 className="text-5xl font-serif font-black text-gold tracking-[0.5em] mb-6 uppercase">GARHWAL</h2>
        <p className="text-white/10 text-[10px] uppercase tracking-[0.8em] font-bold mb-16">Elegance • Premium • Handcrafted in Dehradun</p>
        <div className="flex justify-center gap-14 mb-24">
            <a href="#" className="text-white/20 hover:text-gold transition-all duration-500 transform hover:scale-125"><Instagram size={28} /></a>
            <a href="#" className="text-white/20 hover:text-gold transition-all duration-500 transform hover:scale-125"><Facebook size={28} /></a>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-16 gap-8">
            <p className="text-white/10 text-[9px] uppercase tracking-widest font-bold">© {new Date().getFullYear()} NEW GARHWAL JEWELLERS. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-10 text-white/10 text-[9px] uppercase tracking-widest font-bold">
                <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] tracking-tighter pointer-events-none uppercase">JEWELLERS</div>
    </footer>
  );
};

const App = () => {
  return (
    <div className="bg-black antialiased selection:bg-gold selection:text-black font-poppins">
      <Navbar />
      <Hero />
      <Specialties />
      <BridalSection />
      <GallerySection />
      <GoldScheme />
      <TrustSection />
      <ContactSection />
      <Footer />
      <motion.a 
        href="https://wa.me/917500290530" 
        target="_blank" 
        rel="noreferrer" 
        initial={{ scale: 0 }} 
        animate={{ scale: 1 }} 
        whileHover={{ scale: 1.1 }} 
        className="fixed bottom-10 right-10 z-[100] bg-[#25D366] text-white p-5 rounded-full shadow-[0_20px_50px_rgba(37,211,102,0.5)] flex items-center justify-center group"
      >
        <MessageCircle size={32} />
        <span className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full border-4 border-black flex items-center justify-center text-[10px] font-bold animate-bounce group-hover:animate-none">1</span>
      </motion.a>
    </div>
  );
};

export default App;
