
import React, { useState, useEffect, createContext, useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import WhyChooseUsPage from './pages/WhyChooseUsPage';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import LanguagePopup from './components/LanguagePopup';
import { Phone, MessageSquare } from 'lucide-react';
import { Language } from './translations';
import { CONTACT_INFO } from './constants';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [lang, setLangState] = useState<Language>('en');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('site_lang') as Language;
    if (savedLang) {
      setLangState(savedLang);
    } else {
      // Show the popup after a 10-second delay if no language is set
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('site_lang', newLang);
    setShowPopup(false);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="min-h-screen flex flex-col text-stone-900 overflow-x-hidden">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow pt-[56px] lg:pt-[108px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Floating Action Buttons */}
        <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
          <a
            href={`https://wa.me/91${CONTACT_INFO.pragnesh.phone.replace(/\s/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-700 hover:bg-red-800 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center border-2 border-white/20"
            title="WhatsApp Us"
          >
            <MessageSquare size={24} />
          </a>
          <a
            href={`tel:+91${CONTACT_INFO.anish.phone.replace(/\s/g, '')}`}
            className="bg-stone-900 hover:bg-stone-800 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 flex items-center justify-center border-2 border-white/20"
            title="Call Us"
          >
            <Phone size={24} />
          </a>
        </div>

        <Footer />
        {showPopup && <LanguagePopup />}
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
