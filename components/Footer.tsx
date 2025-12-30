
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import { useLanguage } from '../App';
import { translations } from '../translations';
import { Logo } from './Navbar';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="bg-stone-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3 group">
              <Logo className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight tracking-tight text-white uppercase italic">Shraddha Surveying</span>
                <span className="text-[9px] uppercase tracking-wider text-stone-500 font-black">Geomatics Solutions</span>
              </div>
            </Link>
            <p className="text-stone-400 leading-relaxed text-[13px] font-medium max-w-xs">
              {lang === 'en' 
                ? "Gujarat's leading land surveying firm providing precision geomatics solutions. Trusted by government and private sectors."
                : "ચોકસાઈભર્યા જીઓમેટિક્સ ઉકેલો પ્રદાન કરતી ગુજરાતની અગ્રણી જમીન માપણી સંસ્થા. સરકારી અને ખાનગી ક્ષેત્રો દ્વારા વિશ્વાસપાત્ર."}
            </p>
            <div className="flex items-center gap-2">
              {[Facebook, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-red-700 transition-all text-stone-500 hover:text-white border border-white/5">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-8">
            <h4 className="text-[11px] font-black mb-6 border-b border-red-700/50 pb-2 inline-block uppercase tracking-[0.2em] text-red-500">Navigation</h4>
            <ul className="space-y-3 text-stone-400 font-bold text-xs">
              <li><Link to="/about" className="hover:text-white transition-colors flex items-center gap-2 tracking-wide">About Firm</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors flex items-center gap-2 tracking-wide">Core Services</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors flex items-center gap-2 tracking-wide">Project History</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2 tracking-wide">Inquire Now</Link></li>
            </ul>
          </div>

          {/* Services List */}
          <div>
            <h4 className="text-[11px] font-black mb-6 border-b border-red-700/50 pb-2 inline-block uppercase tracking-[0.2em] text-red-500">Specializations</h4>
            <ul className="space-y-3 text-stone-400 font-bold text-xs">
              <li className="hover:text-white transition-colors cursor-pointer tracking-wide">DGPS Mapping</li>
              <li className="hover:text-white transition-colors cursor-pointer tracking-wide">Topography</li>
              <li className="hover:text-white transition-colors cursor-pointer tracking-wide">Road Alignment</li>
              <li className="hover:text-white transition-colors cursor-pointer tracking-wide">Smart City GIS</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[11px] font-black mb-6 border-b border-red-700/50 pb-2 inline-block uppercase tracking-[0.2em] text-red-500">Contact</h4>
            <ul className="space-y-4 text-[13px]">
              <li className="flex gap-3 text-stone-400">
                <MapPin size={16} className="text-red-700 flex-shrink-0 mt-1" />
                <span className="leading-snug font-medium text-xs">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex flex-col gap-1.5 text-stone-300 font-black">
                <div className="flex gap-3 items-center">
                  <Phone size={14} className="text-red-700 flex-shrink-0" />
                  <span className="text-[13px] tracking-tighter">{CONTACT_INFO.pragnesh.phone}</span>
                </div>
                <div className="flex gap-3 items-center ml-6.5">
                  <span className="text-[13px] tracking-tighter">{CONTACT_INFO.anish.phone}</span>
                </div>
              </li>
              <li className="flex gap-3 text-stone-400 items-center">
                <Mail size={16} className="text-red-700 flex-shrink-0" />
                <span className="font-bold text-xs">info@shraddhasurvey.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Compact Copyright Div */}
        <div className="pt-6 border-t border-white/5 text-center">
          <p className="text-stone-600 text-[10px] font-black uppercase tracking-[0.3em]">
            © {new Date().getFullYear()} Shraddha Surveying. {t.common.footerTag}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
