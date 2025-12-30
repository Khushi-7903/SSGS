
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Globe } from 'lucide-react';
import { SERVICES, CONTACT_INFO } from '../constants';
import { useLanguage } from '../App';
import { translations } from '../translations';

const Contact: React.FC = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Page Header */}
      <section className="bg-stone-950 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blueprint opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4 uppercase">{t.nav.contact}</h1>
          <div className="w-20 h-1.5 bg-red-700 mx-auto rounded-full"></div>
        </div>
      </section>

      <div className="py-32">
        <div className="absolute inset-0 bg-blueprint opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mb-20">
            <div className="inline-flex items-center gap-3 bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-full mb-8">
              <Globe size={14} className="text-red-500" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500">Global Connectivity</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1]">
              GET IN <span className="text-red-600">TOUCH.</span>
            </h2>
            <p className="text-xl text-stone-500 font-medium leading-relaxed max-w-2xl border-l-4 border-red-700 pl-8">
              Expert geospatial consultation available for your next infrastructure or private development project in Gujarat.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            <div className="bg-stone-50 p-10 lg:p-14 rounded-[3.5rem] border border-stone-100 shadow-2xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-red-700/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
               <h2 className="text-3xl font-black text-stone-900 mb-10 tracking-tight">Direct Inquiry</h2>
               
               {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                     <div className="w-20 h-20 bg-red-700 text-white rounded-3xl flex items-center justify-center animate-bounce shadow-2xl"><Send size={32} /></div>
                     <h3 className="text-2xl font-black text-stone-900">Message Received.</h3>
                     <p className="text-stone-500 font-medium">Our technical lead will contact you within 4 hours.</p>
                  </div>
               ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                     <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-2">Name</label>
                           <input type="text" name="name" onChange={handleChange} required className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-red-700 outline-none transition-all font-medium" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-2">Phone</label>
                           <input type="tel" name="phone" onChange={handleChange} required className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-red-700 outline-none transition-all font-medium" />
                        </div>
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-2">Service</label>
                        <select name="service" onChange={handleChange} required className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-red-700 outline-none transition-all font-medium">
                           <option value="">Select Category</option>
                           {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title[lang]}</option>)}
                        </select>
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase tracking-widest text-stone-400 ml-2">Description</label>
                        <textarea name="message" onChange={handleChange} rows={5} required className="w-full bg-white border border-stone-200 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-red-700 outline-none transition-all font-medium resize-none"></textarea>
                     </div>
                     <button type="submit" className="w-full bg-red-700 text-white font-black py-5 rounded-2xl shadow-xl hover:bg-stone-900 transition-all uppercase tracking-widest text-sm">
                        Request Site Visit
                     </button>
                  </form>
               )}
            </div>

            <div className="space-y-8">
               <div className="p-10 rounded-[3rem] bg-stone-950 text-white relative overflow-hidden shadow-2xl group">
                  <div className="absolute inset-0 bg-blueprint opacity-10"></div>
                  <h3 className="text-2xl font-black mb-10 tracking-tight">Direct Support</h3>
                  <div className="space-y-8">
                     <div className="flex gap-6 items-start">
                        <div className="w-14 h-14 rounded-2xl bg-red-700/20 border border-red-500/20 flex items-center justify-center text-red-500"><Phone size={24} /></div>
                        <div>
                           <p className="text-[9px] font-black uppercase tracking-widest text-red-500 mb-1">Call Management</p>
                           <p className="text-xl font-black">{CONTACT_INFO.pragnesh.phone}</p>
                           <p className="text-xl font-black">{CONTACT_INFO.anish.phone}</p>
                        </div>
                     </div>
                     <div className="flex gap-6 items-start">
                        <div className="w-14 h-14 rounded-2xl bg-red-700/20 border border-red-500/20 flex items-center justify-center text-red-500"><MapPin size={24} /></div>
                        <div>
                           <p className="text-[9px] font-black uppercase tracking-widest text-red-500 mb-1">HQ Address</p>
                           <p className="text-stone-300 font-medium leading-relaxed">{CONTACT_INFO.address}</p>
                        </div>
                     </div>
                     <div className="flex gap-6 items-start">
                        <div className="w-14 h-14 rounded-2xl bg-red-700/20 border border-red-500/20 flex items-center justify-center text-red-500"><Mail size={24} /></div>
                        <div>
                           <p className="text-[9px] font-black uppercase tracking-widest text-red-500 mb-1">Electronic Mail</p>
                           <p className="text-stone-300 font-medium leading-relaxed">info@shraddhasurvey.com</p>
                        </div>
                     </div>
                  </div>
                  
                  <div className="mt-12 pt-10 border-t border-white/5">
                     <a href={`https://wa.me/91${CONTACT_INFO.pragnesh.phone.replace(/\s/g, '')}`} className="w-full flex items-center justify-center gap-4 bg-white/5 border border-white/10 rounded-2xl py-4 font-black uppercase tracking-widest text-[10px] hover:bg-white/10 transition-all">
                        <MessageSquare size={18} className="text-green-500" /> Start WhatsApp Chat
                     </a>
                  </div>
               </div>

               <div className="h-[400px] rounded-[3rem] overflow-hidden border-[12px] border-stone-50 shadow-2xl relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.45229143784!2d72.72957380000001!3d23.2266229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395dd5002c146cd1%3A0xb57e0bad87d5f5d0!2sShraddha%20Surveying%20and%20Geomatics%20Solution!5e0!3m2!1sen!2sus!4v1766835595233!5m2!1sen!2sus" 
                    width="100%" height="100%" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
