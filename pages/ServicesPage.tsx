
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { CheckCircle2, FileText, Crosshair, ArrowRight, Cpu, Settings } from 'lucide-react';
import { useLanguage } from '../App';
import { translations } from '../translations';

const ServicesPage: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Page Header */}
      <section className="bg-stone-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase">{t.nav.services}</h1>
          <div className="w-20 h-1.5 bg-red-700 mx-auto rounded-full"></div>
        </div>
      </section>

      <div className="py-32">
        <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mb-20">
            <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full mb-8">
              <Settings size={14} className="text-red-500 animate-[spin_4s_linear_infinite]" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">Service Architecture</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1]">
              PRECISION <span className="text-red-600">CAPABILITIES.</span>
            </h2>
            <p className="text-xl text-stone-500 font-medium leading-relaxed max-w-2xl border-l-4 border-red-700 pl-8">
              Strategically capturing spatial data for complex engineering and industrial landscapes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
            {SERVICES.map((service, idx) => (
              <div 
                key={service.id} 
                className="group p-10 lg:p-14 rounded-[3.5rem] bg-stone-50 border border-stone-100 hover:bg-white hover:border-red-100 hover:shadow-[0_40px_80px_-20px_rgba(211,47,47,0.1)] transition-all duration-700 flex flex-col justify-between min-h-[500px]"
              >
                <div>
                  <div className="w-20 h-20 rounded-3xl bg-white shadow-xl flex items-center justify-center text-red-700 mb-10 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-3xl font-black text-stone-900 mb-6 tracking-tight group-hover:text-red-700 transition-colors">
                    {service.title[lang]}
                  </h3>
                  <p className="text-stone-500 text-lg leading-relaxed mb-10 font-medium">
                    {service.description[lang]}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex gap-5 p-6 bg-white rounded-3xl border border-stone-50">
                       <Crosshair size={22} className="text-red-700 flex-shrink-0" />
                       <p className="text-xs text-stone-500 font-bold leading-relaxed">
                          <span className="text-stone-900 block mb-1">Applications:</span>
                          {service.useCase[lang]}
                       </p>
                    </div>
                    <div className="flex gap-5 p-6 bg-white rounded-3xl border border-stone-50">
                       <FileText size={22} className="text-red-700 flex-shrink-0" />
                       <p className="text-xs text-stone-500 font-bold leading-relaxed">
                          <span className="text-stone-900 block mb-1">Deliverables:</span>
                          {service.output[lang]}
                       </p>
                    </div>
                  </div>
                </div>

                <div className="pt-12 flex items-center justify-between">
                   <Link to="/contact" className="text-[11px] font-black uppercase tracking-widest text-red-700 flex items-center gap-3 group-hover:gap-5 transition-all">
                      Inquire for Quote <ArrowRight size={18} />
                   </Link>
                   <span className="text-[10px] font-black text-stone-200 uppercase tracking-widest">Cap-0{idx+1}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-5xl mx-auto opacity-30">
             <div className="flex flex-col items-center"><Cpu size={48} className="mb-4 text-stone-900" /> <span className="text-[10px] font-black tracking-widest uppercase text-stone-900">DGPS RTK</span></div>
             <div className="flex flex-col items-center"><Settings size={48} className="mb-4 text-stone-900" /> <span className="text-[10px] font-black tracking-widest uppercase text-stone-900">Total Station</span></div>
             <div className="flex flex-col items-center"><FileText size={48} className="mb-4 text-stone-900" /> <span className="text-[10px] font-black tracking-widest uppercase text-stone-900">CAD Ready</span></div>
             <div className="flex flex-col items-center"><CheckCircle2 size={48} className="mb-4 text-stone-900" /> <span className="text-[10px] font-black tracking-widest uppercase text-stone-900">IS Compliant</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
