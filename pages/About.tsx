
import React from 'react';
import { Target, Eye, ShieldCheck, Compass, User, Award, Shield } from 'lucide-react';
import { useLanguage } from '../App';
import { translations } from '../translations';

const About: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Page Header */}
      <section className="bg-stone-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase">{t.nav.about}</h1>
          <div className="w-20 h-1.5 bg-red-700 mx-auto rounded-full"></div>
        </div>
      </section>

      <div className="py-32">
        <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mb-24">
            <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full mb-8">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">About Our Legacy</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1]">
              ENGINEERING <span className="text-red-600">TRUST.</span><br />
              DELIVERING DATA.
            </h2>
            <p className="text-xl text-stone-500 font-medium leading-relaxed max-w-2xl border-l-4 border-red-700 pl-8">
              {lang === 'en' 
                ? 'Shraddha Surveying is a premier firm based in Gandhinagar, dedicated to sub-centimeter precision across Gujarats infrastructure landscape.'
                : 'શ્રદ્ધા સર્વેઇંગ એ ગાંધીનગરમાં સ્થિત એક અગ્રણી ફર્મ છે, જે ગુજરાતના ઇન્ફ્રાસ્ટ્રક્ચર લેન્ડસ્કેપમાં સબ-સેન્ટિમીટર ચોકસાઈ માટે સમર્પિત છે.'}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative group">
              <div className="absolute -inset-4 bg-red-700/5 rounded-[4rem] blur-3xl group-hover:bg-red-700/10 transition-all duration-1000"></div>
              <div className="relative z-10 rounded-[3rem] overflow-hidden border-[15px] border-stone-50 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=1200" 
                  alt="High Precision Survey" 
                  className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 glass-card p-10 rounded-[2.5rem] border border-stone-200 shadow-2xl z-20 animate-float">
                <Compass size={48} className="text-red-700 mb-4" />
                <h4 className="text-2xl font-black text-stone-900 tracking-tight">Est. 2014</h4>
                <p className="text-[10px] font-black uppercase text-stone-400 tracking-widest mt-1">A Decade of Accuracy</p>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tighter leading-tight">
                {lang === 'en' ? 'Professionalism and Accuracy in Harmony.' : 'સુમેળમાં વ્યવસાયીકરણ અને સચોટતા.'}
              </h2>
              <p className="text-stone-500 text-lg leading-relaxed font-medium italic">
                "We don't just capture points; we provide the foundation upon which cities are built."
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                  <Award size={32} className="text-red-700 mb-4" />
                  <h4 className="font-bold text-stone-900 mb-2">Govt. Certified</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">Adhering to strict IS standards and regulatory compliance across Gujarat.</p>
                </div>
                <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100">
                  <Shield size={32} className="text-red-700 mb-4" />
                  <h4 className="font-bold text-stone-900 mb-2">Verified Accuracy</h4>
                  <p className="text-xs text-stone-500 leading-relaxed">Our multi-level data validation ensures zero margin for error in field reports.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="mb-32">
            <div className="text-center mb-20">
              <h2 className="text-red-600 font-black text-xs uppercase tracking-[0.4em] mb-4">Leadership</h2>
              <p className="text-4xl md:text-6xl font-black text-stone-900 tracking-tighter">{t.team.title}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {t.team.members.map((member, i) => (
                <div key={i} className="group relative">
                  <div className="absolute inset-0 bg-red-700 rounded-[3rem] translate-x-3 translate-y-3 -z-10 opacity-5 group-hover:opacity-10 transition-all"></div>
                  <div className="bg-white border border-stone-100 rounded-[3rem] p-10 lg:p-14 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center h-full">
                    <div className="w-32 h-32 rounded-full bg-stone-50 border-4 border-stone-100 flex items-center justify-center text-stone-900 mb-8 overflow-hidden group-hover:border-red-100 transition-all">
                      <User size={64} className="opacity-20 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-3xl font-black text-stone-900 mb-2">{member.name}</h3>
                    <p className="text-red-700 text-xs font-black uppercase tracking-[0.3em] mb-8">{member.role}</p>
                    <p className="text-stone-500 text-sm leading-relaxed font-medium border-t border-stone-50 pt-8">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission/Vision Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-12 rounded-[2.5rem] bg-stone-900 text-white relative overflow-hidden group">
               <Target size={120} className="absolute -right-8 -bottom-8 text-white/5 group-hover:text-red-700/20 transition-all" />
               <h3 className="text-2xl font-black mb-6 tracking-tight">Mission</h3>
               <p className="text-stone-400 text-sm leading-relaxed font-medium">To deliver the most precise geospatial data that empowers our clients to build with absolute confidence.</p>
            </div>
            <div className="p-12 rounded-[2.5rem] bg-red-700 text-white relative overflow-hidden group">
               <Eye size={120} className="absolute -right-8 -bottom-8 text-white/10 group-hover:text-white/20 transition-all" />
               <h3 className="text-2xl font-black mb-6 tracking-tight">Vision</h3>
               <p className="text-red-100 text-sm leading-relaxed font-medium">To be the gold standard in surveying technology across Western India, integrating GIS and satellite data for every project.</p>
            </div>
            <div className="p-12 rounded-[2.5rem] bg-stone-50 text-stone-900 border border-stone-100 relative overflow-hidden group">
               <ShieldCheck size={120} className="absolute -right-8 -bottom-8 text-stone-200 group-hover:text-red-700/10 transition-all" />
               <h3 className="text-2xl font-black mb-6 tracking-tight">Quality</h3>
               <p className="text-stone-500 text-sm leading-relaxed font-medium">Zero-compromise on millimeter accuracy through multi-level technical validation and field audits.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
