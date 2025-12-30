
import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { MapPin, Target, ExternalLink } from 'lucide-react';
import { useLanguage } from '../App';
import { translations } from '../translations';

const ProjectsPage: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Page Header */}
      <section className="bg-stone-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase">{t.nav.projects}</h1>
          <div className="w-20 h-1.5 bg-red-700 mx-auto rounded-full"></div>
        </div>
      </section>

      <div className="py-32">
        <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mb-20">
            <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full mb-8">
              <Target size={14} className="text-red-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1]">
              GEOSPATIAL <span className="text-red-600">RECORDS.</span>
            </h2>
            <p className="text-xl text-stone-500 font-medium leading-relaxed max-w-2xl border-l-4 border-red-700 pl-8">
              A comprehensive archive of infrastructure alignment, topography, and industrial corridor surveys across Gujarat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative aspect-[4/5] bg-stone-900 rounded-[2.5rem] overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_40px_80px_-15px_rgba(239,68,68,0.2)]">
                {/* Full Card Image Background */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={project.images[0]} 
                    alt={project.title[lang]} 
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1 brightness-75 group-hover:brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                </div>

                {/* Top Badges */}
                <div className="absolute top-8 left-8 z-20 flex flex-col gap-3">
                  <div className="bg-red-600 text-white text-[10px] font-black px-4 py-2 rounded-lg uppercase tracking-widest shadow-lg border border-red-500/20 w-fit">
                    {project.type[lang]}
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 z-20">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-red-500 font-black text-[10px] uppercase tracking-[0.3em]">
                      <MapPin size={14} />
                      {project.location[lang]}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none group-hover:text-red-500 transition-colors">
                      {project.title[lang]}
                    </h3>

                    <div className="pt-6">
                      <button className="w-full bg-white/10 backdrop-blur-lg border border-white/20 text-white py-5 rounded-2xl font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-3 hover:bg-red-600 hover:border-red-500 transition-all group/btn">
                        View Dossier
                        <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="relative rounded-[3rem] p-12 bg-stone-950 text-white flex flex-col items-center justify-center text-center overflow-hidden group min-h-[450px] border border-white/5">
               <div className="absolute inset-0 bg-blueprint opacity-10"></div>
               <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-red-500 mb-8 animate-float">
                  <Target size={40} />
               </div>
               <h4 className="text-3xl font-black mb-4 tracking-tighter uppercase">Scale Your Project</h4>
               <p className="text-stone-400 text-sm font-medium mb-10 px-4">Ready to implement sub-centimeter accuracy for your next site?</p>
               <Link to="/contact" className="bg-red-700 text-white px-10 py-5 rounded-2xl font-black shadow-xl hover:bg-white hover:text-stone-900 transition-all uppercase text-[11px] tracking-widest">
                  Consult Experts
               </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
