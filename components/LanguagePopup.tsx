
import React from 'react';
import { useLanguage } from '../App';
import { Globe, X } from 'lucide-react';

const LanguagePopup: React.FC = () => {
  const { setLang } = useLanguage();

  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[200] w-[calc(100%-2rem)] max-w-[340px] animate-slide-down">
      {/* Small Floating Box UI */}
      <div className="relative bg-white rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden border border-red-50 flex flex-col">
        {/* Compact Header */}
        <div className="bg-red-700 px-5 py-3 text-white flex items-center gap-3">
          <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
            <Globe size={16} />
          </div>
          <div className="flex flex-col">
            <h2 className="text-[11px] font-black uppercase tracking-wider italic leading-none">Choose Language</h2>
            <p className="text-[8px] font-bold text-red-100 uppercase tracking-widest mt-0.5">ભાષા પસંદ કરો</p>
          </div>
        </div>

        {/* Options Row/Stack */}
        <div className="p-4 grid grid-cols-2 gap-3">
          <button
            onClick={() => setLang('gu')}
            className="flex flex-col items-center justify-center py-3 px-2 rounded-xl border-2 border-stone-50 bg-stone-50/50 hover:border-red-700 hover:bg-red-50 transition-all active:scale-[0.98] group"
          >
            <span className="text-sm font-black text-stone-900 group-hover:text-red-700">ગુજરાતી</span>
            <span className="text-[7px] font-black uppercase tracking-tighter text-stone-400">Gujarati</span>
          </button>

          <button
            onClick={() => setLang('en')}
            className="flex flex-col items-center justify-center py-3 px-2 rounded-xl border-2 border-stone-50 bg-stone-50/50 hover:border-red-700 hover:bg-red-50 transition-all active:scale-[0.98] group"
          >
            <span className="text-sm font-black text-stone-900 group-hover:text-red-700">English</span>
            <span className="text-[7px] font-black uppercase tracking-tighter text-stone-400">Default</span>
          </button>
        </div>
        
        {/* Subtle Footer hint */}
        <div className="px-4 pb-3 text-center">
           <p className="text-[7px] text-stone-300 font-black uppercase tracking-[0.2em]">Select to continue in your language</p>
        </div>
      </div>
    </div>
  );
};

export default LanguagePopup;
