
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Globe, 
  Home as HomeIcon, 
  Info, 
  Briefcase, 
  Layers, 
  ShieldCheck, 
  MessageCircle 
} from 'lucide-react';
import { useLanguage } from '../App';
import { translations } from '../translations';

export const Logo = ({ className = "w-16 h-16" }) => (
  <div className={`${className} relative flex-shrink-0`}>
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <circle cx="50" cy="50" r="48" fill="white" stroke="#D32F2F" strokeWidth="0.5"/>
      <circle cx="50" cy="50" r="42" fill="none" stroke="#D32F2F" strokeWidth="0.5" strokeDasharray="2 2" className="animate-[spin_10s_linear_infinite]"/>
      <path 
        d="M25 35 C 25 25, 75 25, 75 35 C 75 42, 65 45, 50 45 L 35 45 C 25 45, 25 65, 35 70 C 50 75, 75 75, 75 65" 
        fill="none" 
        stroke="#D32F2F" 
        strokeWidth="11" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path d="M70 45 L 30 45" fill="none" stroke="#D32F2F" strokeWidth="11" strokeLinecap="round" />
    </svg>
  </div>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang } = useLanguage();
  const location = useLocation();
  const t = translations[lang];

  const navLinks = [
    { name: t.nav.home, path: '/', icon: <HomeIcon size={18} /> },
    { name: t.nav.about, path: '/about', icon: <Info size={18} /> },
    { name: t.nav.services, path: '/services', icon: <Layers size={18} /> },
    { name: t.nav.projects, path: '/projects', icon: <Briefcase size={18} /> },
    { name: t.nav.whyUs, path: '/why-choose-us', icon: <ShieldCheck size={18} /> },
    { name: t.nav.contact, path: '/contact', icon: <MessageCircle size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-[100] top-0 left-0 transition-all duration-300 bg-white ${
      scrolled || isOpen ? 'shadow-lg' : 'border-b border-stone-100'
    }`}>
      {/* Top Tier: Branding & Secondary Actions */}
      <div className="bg-white border-b-2 border-red-700 relative z-[101]">
        <div className="max-w-7xl mx-auto px-4 h-[56px] lg:h-[60px] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <Logo className="w-8 h-8 lg:w-9 lg:h-9 transition-transform group-hover:scale-105" />
            <div className="flex flex-col text-left">
              <h1 className="font-black text-[11px] lg:text-[14px] text-stone-900 tracking-tighter leading-none uppercase">
                Shraddha <span className="text-red-700">Surveying</span>
              </h1>
              <p className="text-[5px] lg:text-[7px] uppercase tracking-[0.2em] font-black text-stone-400 mt-0.5">
                Geomatics Solutions
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLang(lang === 'en' ? 'gu' : 'en')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-stone-600 hover:text-red-700 transition-all font-black text-[10px] uppercase tracking-widest border border-stone-100 bg-stone-50/50"
            >
              <Globe size={11} className="text-red-700" />
              {lang === 'en' ? 'GU' : 'EN'}
            </button>

            <Link
              to="/contact"
              className="hidden sm:flex bg-red-700 text-white px-5 py-2.5 rounded-lg font-black hover:bg-stone-900 transition-all text-[10px] uppercase tracking-widest shadow-md shadow-red-700/10 active:scale-95"
            >
              {t.nav.getQuote}
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-stone-900 p-2 hover:bg-stone-50 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Tier: Main Navigation (Desktop) */}
      <div className="hidden lg:block bg-stone-50/40">
        <div className="max-w-7xl mx-auto px-4 h-[48px] flex items-center justify-center">
          <div className="flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2 rounded-lg text-[11px] font-black uppercase tracking-[0.15em] transition-all whitespace-nowrap ${
                  location.pathname === link.path 
                    ? 'text-red-700 bg-white shadow-sm' 
                    : 'text-stone-500 hover:text-stone-900 hover:bg-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`lg:hidden fixed inset-0 z-[100] bg-stone-900/60 backdrop-blur-md transition-all duration-500 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className={`absolute top-[56px] left-0 right-0 bg-white shadow-2xl transition-all duration-500 transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="p-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`w-full flex items-center gap-4 px-5 py-4 text-[14px] font-black uppercase tracking-[0.2em] rounded-xl transition-all ${
                  location.pathname === link.path 
                    ? 'bg-red-50 text-red-700' 
                    : 'text-stone-700 hover:bg-stone-50'
                }`}
              >
                <span className={location.pathname === link.path ? 'text-red-700' : 'text-stone-400'}>
                  {link.icon}
                </span>
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="p-4 bg-stone-50 border-t border-stone-100 grid grid-cols-2 gap-3">
             <button
              onClick={() => setLang(lang === 'en' ? 'gu' : 'en')}
              className="flex items-center justify-center gap-2 py-4 rounded-xl bg-white border border-stone-200 text-stone-900 font-black uppercase tracking-widest text-[11px] shadow-sm"
            >
              <Globe size={16} className="text-red-700" /> {lang === 'en' ? 'ગુજરાતી' : 'English'}
            </button>
            <Link
              to="/contact"
              className="flex items-center justify-center py-4 rounded-xl bg-red-700 text-white font-black uppercase tracking-widest text-[11px] shadow-lg shadow-red-700/20"
            >
              {t.nav.getQuote}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
