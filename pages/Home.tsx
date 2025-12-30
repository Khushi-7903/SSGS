
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  ChevronDown, 
  ChevronUp, 
  Target, 
  Ruler, 
  Laptop, 
  HardHat, 
  MessageSquare, 
  FileCheck, 
  MapPin, 
  RefreshCcw, 
  ChevronLeft, 
  ChevronRight,
  Search,
  Eye,
  Layers,
  HelpCircle,
  Briefcase,
  Clock,
  UserCheck,
  Linkedin,
  Facebook,
  Instagram,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../App';
import { translations } from '../translations';
import { CONTACT_INFO, SERVICES, PROJECTS } from '../constants';

const TypewriterHeadline: React.FC<{ lang: 'en' | 'gu' }> = ({ lang }) => {
  const words = {
    en: ['INTELLIGENCE.', 'PRECISION.', 'ACCURACY.', 'SOLUTIONS.'],
    gu: ['સર્વેક્ષણ.', 'માપણી.', 'ચોકસાઈ.', 'ઉકેલો.']
  };

  const currentWords = words[lang];
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const longestWord = [...currentWords].sort((a, b) => b.length - a.length)[0];

  useEffect(() => {
    const handleTyping = () => {
      const currentFullWord = currentWords[wordIdx];
      
      if (!isDeleting) {
        setCharIdx((prev) => prev + 1);
        setTypingSpeed(150);
        
        if (charIdx + 1 === currentFullWord.length) {
          setIsDeleting(false);
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        setCharIdx((prev) => prev - 1);
        setTypingSpeed(75);
        
        if (charIdx === 0) {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % currentWords.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, wordIdx, currentWords, typingSpeed]);

  return (
    <span className="relative inline-block text-red-600">
      <span className="invisible select-none opacity-0" aria-hidden="true">
        {longestWord}
      </span>
      <span className="absolute left-0 top-0">
        {currentWords[wordIdx].substring(0, charIdx)}
        <span className="animate-pulse border-r-[6px] md:border-r-[12px] border-red-600 ml-2 h-[0.8em] inline-block align-middle"></span>
      </span>
    </span>
  );
};

const ProjectCarouselCard: React.FC<{ project: any; lang: 'en' | 'gu' }> = ({ project, lang }) => {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setImgIdx((prev) => (prev + 1) % project.images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [project.images.length]);

  return (
    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3 md:px-4">
      <div className="group relative h-[420px] md:h-[460px] flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-red-500/50 hover:shadow-[0_0_50px_rgba(239,68,68,0.25)] hover:bg-white/[0.08]">
        
        <div className="relative h-[60%] md:h-[65%] overflow-hidden border-b border-white/10">
          <div className="w-full h-full relative">
            {project.images.map((img: string, i: number) => (
              <img 
                key={i}
                src={img} 
                alt={project.title[lang]} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 group-hover:scale-110 ${i === imgIdx ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="absolute top-4 left-4 z-20">
            <div className="bg-red-700/80 backdrop-blur-md text-white text-[7px] font-black px-2.5 py-1.5 rounded-lg uppercase tracking-widest shadow-xl border border-red-500/20">
              {project.type[lang]}
            </div>
          </div>

          {project.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 z-20">
              {project.images.map((_: any, i: number) => (
                <div 
                  key={i} 
                  className={`h-1 rounded-full transition-all duration-300 ${i === imgIdx ? 'w-5 bg-red-600' : 'w-1.5 bg-white/20'}`}
                ></div>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 flex-grow flex flex-col items-center justify-center text-center space-y-2">
          <div className="space-y-1">
            <div className="flex items-center justify-center gap-1 text-red-500 font-black text-[7px] uppercase tracking-[0.2em]">
              <MapPin size={10} />
              {project.location[lang]}
            </div>
            
            <h3 className="text-lg md:text-xl font-black text-white tracking-tighter uppercase leading-tight group-hover:text-red-500 transition-colors px-2">
              {project.title[lang]}
            </h3>
          </div>

          <Link 
            to="/projects" 
            className="group/btn relative px-5 py-2.5 bg-white/10 hover:bg-red-700 rounded-lg text-white font-black text-[8px] uppercase tracking-widest border border-white/20 hover:border-red-500 transition-all shadow-xl flex items-center gap-2 active:scale-95 mt-1"
          >
            <Eye size={10} className="group-hover/btn:scale-110 transition-transform" />
            View Details 
            <ArrowRight size={10} className="group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [cardsVisible, setCardsVisible] = useState(3);

  const totalLength = PROJECTS.length;
  const loopProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsVisible(3);
      else if (window.innerWidth >= 768) setCardsVisible(2);
      else setCardsVisible(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(totalLength);
  }, [totalLength]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextCard();
    }, 7000);
    return () => clearInterval(timer);
  }, [isPaused, totalLength, transitionEnabled]);

  useEffect(() => {
    if (!transitionEnabled) {
      const reEnableTimer = setTimeout(() => {
        setTransitionEnabled(true);
      }, 50);
      return () => clearTimeout(reEnableTimer);
    }

    if (currentIndex >= totalLength * 2) {
      const resetTimer = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(totalLength);
      }, 700);
      return () => clearTimeout(resetTimer);
    } else if (currentIndex < totalLength) {
       const resetTimer = setTimeout(() => {
        setTransitionEnabled(false);
        setCurrentIndex(totalLength * 2 - (totalLength - currentIndex));
      }, 700);
      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex, totalLength, transitionEnabled]);

  const nextCard = () => {
    if (!transitionEnabled) return;
    setCurrentIndex(prev => prev + 1);
  };

  const prevCard = () => {
    if (!transitionEnabled) return;
    setCurrentIndex(prev => prev - 1);
  };

  const processIcons = [
    <MessageSquare />, 
    <HardHat />, 
    <Laptop />, 
    <FileCheck />
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerWidth >= 1024 ? 108 : 56;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const getTranslateX = () => {
    return -(currentIndex * (100 / cardsVisible));
  };

  const activeDotIndex = (currentIndex % totalLength);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] md:min-h-[calc(100vh-108px)] flex items-center bg-stone-950 py-12 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-20"></div>
        <div className="laser-scanner"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[800px] bg-red-700/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-3 bg-red-900/30 backdrop-blur-md border border-red-500/20 px-4 py-2 rounded-full mb-6 md:mb-10">
                <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="text-[10px] font-black text-red-500 uppercase tracking-[0.3em]">{t.hero.tagline}</span>
              </div>
              
              <h1 className="flex flex-col mb-10 md:mb-12 text-glow uppercase text-center lg:text-left">
                <span className="text-2xl sm:text-5xl md:text-7xl font-black text-stone-400 tracking-tighter mb-2 md:mb-4">
                  {lang === 'en' ? 'GEOSPATIAL' : 'ચોકસાઈભર્યું'}
                </span>
                <span className="text-4xl sm:text-6xl md:text-8xl font-black text-white leading-none tracking-tighter">
                  <TypewriterHeadline lang={lang} />
                </span>
              </h1>

              <p className="text-lg md:text-xl text-stone-400 mb-10 md:mb-12 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed border-l-4 border-red-700 pl-4 md:pl-8 text-left">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center lg:justify-start">
                <button onClick={() => scrollToSection('contact')} className="bg-red-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg hover:bg-white hover:text-red-700 transition-all flex items-center justify-center gap-3 shadow-xl transform hover:-translate-y-1 group">
                  {t.hero.cta1} <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                </button>
                <button onClick={() => scrollToSection('services')} className="bg-white/5 backdrop-blur-xl text-white border border-white/10 px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg hover:bg-white/10 transition-all">
                  {t.hero.cta2}
                </button>
              </div>
            </div>
            <div className="relative perspective-card mt-12 md:mt-24 lg:mt-0 block lg:ml-auto">
              <div className="relative animate-float max-w-[300px] sm:max-w-[400px] md:max-w-[500px] mx-auto lg:mr-0">
                <div className="absolute -top-6 md:-top-12 -left-6 md:-left-12 w-16 md:w-32 h-16 md:h-32 bg-red-700 rounded-[1.5rem] md:rounded-[2.5rem] flex items-center justify-center shadow-2xl transform rotate-12 z-20">
                  <Target className="text-white w-8 md:w-12 h-8 md:h-12" strokeWidth={3} />
                </div>
                <div className="relative z-10 rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[8px] md:border-[12px] border-white/5 shadow-2xl bg-stone-900">
                  <img src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1200" className="w-full aspect-square object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000" alt="Professional Land Surveying" />
                </div>
                <div className="absolute -bottom-6 md:-bottom-10 -right-6 md:-right-10 w-32 md:w-48 h-32 md:h-48 bg-stone-900 border border-white/10 rounded-[1.5rem] md:rounded-[2.5rem] p-4 md:p-8 flex flex-col justify-center shadow-2xl z-20">
                   <Ruler className="text-red-500 mb-2 md:mb-4 w-6 md:w-8 h-6 md:h-8" />
                   <p className="text-white font-black text-xl md:text-2xl leading-none">99.9%</p>
                   <p className="text-stone-500 text-[8px] md:text-[9px] uppercase font-bold mt-1 md:mt-2">Accuracy Verified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-20 md:py-32 relative bg-stone-100/80 overflow-hidden border-b border-stone-200">
        <div className="absolute inset-0 bg-blueprint opacity-[0.05] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-white border border-stone-200 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-500">{t.overview.tag}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-stone-900 tracking-tighter uppercase leading-[1.1]">
                {t.overview.title.split(' ').map((word, i) => (
                  <span key={i} className={word === 'Gold' || word === 'શ્રેષ્ઠતા' ? 'text-red-700' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h2>
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-stone-600 font-bold leading-relaxed max-w-2xl border-l-4 border-red-700 pl-6 md:pl-8 italic">
                  {t.overview.subtitle}
                </p>
                <p className="text-base md:text-lg text-stone-500 font-medium leading-relaxed max-w-2xl pl-10">
                  {t.overview.detailedDesc}
                </p>
              </div>
              <div className="pt-4">
                <Link to="/about" className="inline-flex items-center gap-3 text-red-700 font-black uppercase tracking-widest text-xs hover:gap-5 transition-all group">
                  {t.overview.cta} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
              {[
                { icon: <Clock className="text-red-700" />, ...t.overview.stat1 },
                { icon: <Briefcase className="text-red-700" />, ...t.overview.stat2 },
                { icon: <Target className="text-red-700" />, ...t.overview.stat3 }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-6 p-6 md:p-8 bg-white rounded-[2rem] border border-stone-100 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className="w-16 h-16 rounded-2xl bg-stone-50 shadow-inner flex items-center justify-center flex-shrink-0">
                    {React.cloneElement(stat.icon as React.ReactElement, { size: 28 })}
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-black text-stone-900 tracking-tighter leading-none mb-1">{stat.value}</div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-stone-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-16 md:py-32 lg:py-40 relative bg-stone-100 overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-[0.05] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
            <h2 className="text-red-700 font-black text-xs uppercase tracking-[0.4em] mb-4">Workflow</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
              <RefreshCcw className="text-red-700 animate-[spin_6s_linear_infinite] w-10 h-10 md:w-12 lg:w-14 md:h-12 lg:h-14 flex-shrink-0" />
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 tracking-tighter uppercase text-center leading-tight">
                {t.process.title}
              </p>
            </div>
            <div className="w-24 h-1.5 bg-red-700 mx-auto rounded-full"></div>
          </div>

          <div className="relative max-w-7xl mx-auto mt-12">
            <div className="hidden lg:block absolute top-1/2 left-[-100vw] right-[-100vw] h-0.5 -translate-y-1/2 dashed-line-h opacity-30 z-0"></div>
            <div className="hidden md:block lg:hidden absolute inset-0 left-1/2 -translate-x-1/2 w-0.5 dashed-line-v opacity-30 z-0 rounded-full"></div>
            <div className="md:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 dashed-line-v opacity-30 z-0 rounded-full"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative z-10">
              {t.process.steps.map((step, i) => (
                <div key={i} className="group relative flex flex-col items-center p-8 md:p-10 lg:p-8 bg-white/95 backdrop-blur-md rounded-[2rem] md:rounded-[3rem] lg:rounded-[2.5rem] border border-stone-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 shadow-xl shadow-stone-900/5">
                  <div className="mb-6 flex flex-col items-center flex-shrink-0">
                    <div className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-400 group-hover:text-red-600 transition-colors mb-4">Phase 0{i+1}</div>
                    <div className="w-16 md:w-20 lg:w-16 h-16 md:h-20 lg:h-16 bg-stone-50 rounded-[1.25rem] md:rounded-[1.75rem] shadow-inner flex items-center justify-center text-red-700 group-hover:bg-red-700 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                      {React.cloneElement(processIcons[i] as React.ReactElement<any>, { size: 24, strokeWidth: 2.5 })}
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-lg md:text-xl font-black text-stone-900 mb-3 md:mb-4 tracking-tight group-hover:text-red-700 transition-colors leading-tight">{step.title}</h4>
                    <p className="text-stone-500 text-[13px] font-medium leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-32 lg:py-40 relative bg-stone-100/80 overflow-hidden border-t border-stone-200">
        <div className="absolute inset-0 bg-blueprint opacity-[0.05] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
            <h2 className="text-red-700 font-black text-xs uppercase tracking-[0.4em] mb-4">Core Solutions</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
              <div className="relative mb-0 flex-shrink-0">
                <Layers className="text-red-700 animate-pulse w-10 h-10 md:w-12 lg:w-14 md:h-12 lg:h-14" />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
              </div>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 tracking-tighter uppercase text-center max-w-2xl leading-tight">
                Precision Services.
              </p>
            </div>
            <div className="w-24 h-1.5 bg-red-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {SERVICES.map((service, idx) => (
              <Link 
                key={service.id} 
                to="/services" 
                className="group relative p-8 md:p-10 lg:p-12 bg-white rounded-[2rem] md:rounded-[3rem] border border-stone-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 shadow-xl shadow-stone-900/5 flex flex-col md:flex-row md:items-start items-center text-center md:text-left h-full overflow-hidden gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 md:w-20 h-16 md:h-20 bg-stone-50 rounded-[1.25rem] md:rounded-[1.75rem] shadow-inner flex items-center justify-center text-red-700 group-hover:bg-red-700 group-hover:text-white transition-all duration-500 group-hover:scale-110">
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 28, strokeWidth: 2 })}
                  </div>
                </div>
                <div className="flex flex-col h-full">
                  <h3 className="text-xl md:text-2xl font-black text-stone-900 mb-3 md:mb-4 tracking-tight group-hover:text-red-700 transition-colors uppercase">
                    {service.title[lang]}
                  </h3>
                  <p className="text-stone-500 text-sm font-medium leading-relaxed mb-8 flex-grow">
                    {service.description[lang]}
                  </p>
                  <div className="flex items-center md:justify-start justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-red-700 group-hover:gap-4 transition-all mt-auto">
                    Learn More <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 md:py-40 relative bg-stone-950 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-blueprint opacity-20 pointer-events-none"></div>
        <div className="laser-scanner opacity-50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
            <h2 className="text-red-600 font-black text-xs uppercase tracking-[0.4em] mb-4">Portfolio</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
              <Search className="text-red-600 animate-pulse w-10 h-10 md:w-12 lg:w-14 md:h-12 lg:h-14 flex-shrink-0" />
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase leading-tight text-glow text-center px-4 md:px-0">
                Operations Archive.
              </p>
            </div>
            <div className="w-24 h-1.5 bg-red-700 mx-auto rounded-full"></div>
          </div>

          <div 
            className="relative w-full group/main"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="absolute inset-y-0 left-0 flex items-center z-30 pointer-events-none px-4 md:px-12">
              <button 
                onClick={prevCard}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-700/90 backdrop-blur-md text-white flex items-center justify-center shadow-2xl hover:bg-white hover:text-red-700 transition-all border border-red-500/20 active:scale-90 opacity-0 group-hover/main:opacity-100 pointer-events-auto"
                aria-label="Previous Projects"
              >
                <ChevronLeft size={28} strokeWidth={3} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center z-30 pointer-events-none px-4 md:px-12">
              <button 
                onClick={nextCard}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-700/90 backdrop-blur-md text-white flex items-center justify-center shadow-2xl hover:bg-white hover:text-red-700 transition-all border border-red-500/20 active:scale-90 opacity-0 group-hover/main:opacity-100 pointer-events-auto"
                aria-label="Next Projects"
              >
                <ChevronRight size={28} strokeWidth={3} />
              </button>
            </div>

            <div className="overflow-hidden">
              <div 
                className={`flex ${transitionEnabled ? 'transition-transform duration-700 ease-in-out' : ''}`}
                style={{ 
                  transform: `translateX(${getTranslateX()}%)` 
                }}
              >
                {loopProjects.map((project, i) => (
                  <ProjectCarouselCard 
                    key={`${project.id}-${i}`} 
                    project={project} 
                    lang={lang} 
                  />
                ))}
              </div>
            </div>

            <div className="mt-12 flex justify-center items-center gap-2">
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setTransitionEnabled(true);
                    setCurrentIndex(totalLength + i);
                  }}
                  className={`h-2 rounded-full transition-all duration-500 border border-white/10 ${
                    activeDotIndex === i 
                      ? 'w-10 bg-red-600 shadow-[0_0_15px_rgba(239,68,68,0.5)]' 
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="mt-12 md:mt-20 text-center">
             <Link to="/projects" className="inline-flex items-center gap-3 bg-white/10 border border-white/20 text-white px-8 md:px-10 py-4 md:py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] md:text-[11px] hover:bg-white hover:text-stone-950 transition-all">
                Access Full Geo-Database <ArrowRight size={18} />
             </Link>
          </div>
        </div>
      </section>

      {/* Team Leadership Section */}
      <section className="py-20 md:py-40 relative bg-stone-100 overflow-hidden border-t border-stone-200">
        <div className="absolute inset-0 bg-blueprint opacity-[0.05] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 md:mb-24 flex flex-col items-center">
            <h2 className="text-red-700 font-black text-xs uppercase tracking-[0.4em] mb-4">Leadership & Team</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6">
              <UserCheck className="text-red-700 animate-pulse w-10 h-10 md:w-12 lg:w-14 md:h-12 lg:h-14 flex-shrink-0" />
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-stone-900 tracking-tighter uppercase text-center leading-tight">
                {t.team.title}
              </p>
            </div>
            <div className="w-24 h-1.5 bg-red-700 mx-auto rounded-full"></div>
            <p className="text-stone-500 mt-8 max-w-2xl font-medium text-center italic">
              "Technical Excellence in Geomatics Partners"
            </p>
          </div>

          {/* Main Partners Row: Anish first, then Pragnesh */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto mb-16">
            {t.team.partners.map((member, i) => (
              <div key={i} className="group relative bg-white rounded-[3rem] overflow-hidden border border-stone-200 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className="grid lg:grid-cols-2 h-full">
                  <div className="relative h-72 lg:h-full overflow-hidden">
                    <img 
                      src={member.name.includes('Anish') 
                        ? "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800" 
                        : "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
                      } 
                      alt={member.name}
                      className="absolute inset-0 w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 to-transparent"></div>
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col justify-center bg-white">
                    <div className="mb-6">
                      <div className="text-red-700 text-[9px] font-black uppercase tracking-[0.3em] mb-2">{member.role}</div>
                      <h3 className="text-2xl lg:text-3xl font-black text-stone-900 tracking-tighter uppercase leading-tight group-hover:text-red-700 transition-colors">{member.name}</h3>
                    </div>
                    <p className="text-stone-500 text-sm leading-relaxed font-medium border-t border-stone-100 pt-6">
                      {member.bio}
                    </p>
                    <div className="mt-8 flex gap-3">
                       <a href="#" className="w-9 h-9 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 hover:text-blue-600 hover:bg-blue-50 transition-all shadow-sm">
                          <Linkedin size={16} />
                       </a>
                       <a href="#" className="w-9 h-9 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 hover:text-pink-600 hover:bg-pink-50 transition-all shadow-sm">
                          <Instagram size={16} />
                       </a>
                       <a href="#" className="w-9 h-9 rounded-xl bg-stone-50 border border-stone-100 flex items-center justify-center text-stone-400 hover:text-blue-700 hover:bg-blue-50 transition-all shadow-sm">
                          <Facebook size={16} />
                       </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sub-Team Row: 3 Staff Members */}
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px bg-stone-200 flex-grow"></div>
              <div className="flex items-center gap-2 text-stone-400">
                <Users size={16} />
                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Technical Core Staff</span>
              </div>
              <div className="h-px bg-stone-200 flex-grow"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {t.team.staff.map((staff, i) => (
                <div key={i} className="group p-6 bg-white border border-stone-200 rounded-[2.5rem] hover:border-red-500/50 hover:shadow-xl transition-all duration-500 text-center">
                  <div className="w-12 h-12 bg-stone-50 rounded-2xl mx-auto mb-4 flex items-center justify-center text-stone-300 group-hover:bg-red-700 group-hover:text-white transition-all duration-500">
                    <HardHat size={20} />
                  </div>
                  <h4 className="text-lg font-black text-stone-900 tracking-tight uppercase group-hover:text-red-700 transition-colors leading-none mb-2">{staff.name}</h4>
                  <p className="text-[9px] font-black uppercase tracking-widest text-stone-400 mb-6">{staff.role}</p>
                  
                  <div className="flex items-center justify-center gap-2 pt-4 border-t border-stone-100">
                    <a href="#" className="w-7 h-7 rounded-lg bg-stone-50 text-stone-300 hover:text-pink-600 hover:bg-pink-50 transition-all flex items-center justify-center">
                       <Instagram size={14} />
                    </a>
                    <a href="#" className="w-7 h-7 rounded-lg bg-stone-50 text-stone-300 hover:text-blue-700 hover:bg-blue-50 transition-all flex items-center justify-center">
                       <Facebook size={14} />
                    </a>
                    <a href="#" className="w-7 h-7 rounded-lg bg-stone-50 text-stone-300 hover:text-blue-600 hover:bg-blue-50 transition-all flex items-center justify-center">
                       <Linkedin size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (Compact boxes) */}
      <section className="py-16 md:py-24 bg-white border-t border-stone-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-14 flex flex-col items-center">
            <h2 className="text-red-700 font-black text-[9px] uppercase tracking-[0.4em] mb-4">Support Hub</h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-6">
              <HelpCircle className="text-red-700 animate-pulse w-7 h-7 md:w-9 md:h-9 flex-shrink-0" />
              <p className="text-2xl sm:text-3xl md:text-5xl font-black text-stone-900 tracking-tighter uppercase text-center leading-tight">
                {t.faq.title}
              </p>
            </div>
            <div className="w-12 h-1 bg-red-700 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-2.5 text-left">
            {t.faq.items.map((item, index) => (
              <div key={index} className="bg-stone-50 rounded-[1rem] border border-stone-100 overflow-hidden hover:bg-white hover:shadow-md transition-all">
                <button 
                  onClick={() => setOpenFaq(openFaq === index ? null : index)} 
                  className="w-full flex items-center justify-between p-3.5 md:p-5"
                >
                  <span className="font-black text-stone-900 text-xs md:text-base leading-snug pr-4 text-left">{item.q}</span>
                  <div className={`shrink-0 w-7 md:w-9 h-7 md:h-9 rounded-lg flex items-center justify-center transition-all ${openFaq === index ? 'bg-red-700 text-white shadow-md' : 'bg-white border border-stone-200 text-stone-400'}`}>
                    {openFaq === index ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-4 md:px-6 pb-4 md:pb-5 text-stone-500 text-[11px] md:text-[14px] font-medium border-t border-stone-100/50 pt-3 md:pt-4 leading-relaxed">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="py-12 md:py-24 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="bg-stone-900 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-24 text-center text-white relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-red-700/5 rounded-full blur-[80px] md:blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-8 md:mb-12 tracking-tighter leading-[1] uppercase italic text-glow text-center px-4">Engineering <span className="text-red-700">Accuracy.</span></h2>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center px-4">
                <button onClick={() => scrollToSection('contact')} className="bg-red-700 text-white px-8 md:px-12 py-3 md:py-5 rounded-2xl md:rounded-[1.5rem] font-black hover:bg-white hover:text-stone-900 transition-all text-sm md:text-lg uppercase tracking-widest shadow-xl">Inquire Now</button>
                <a href={`tel:+91${CONTACT_INFO.pragnesh.phone.replace(/\s/g, '')}`} className="bg-white/5 border border-white/10 text-white px-8 md:px-12 py-3 md:py-5 rounded-2xl md:rounded-[1.5rem] font-black hover:bg-white/10 transition-all text-sm md:text-lg uppercase tracking-widest">Call HQ</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
