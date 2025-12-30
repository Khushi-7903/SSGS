
import React from 'react';
import { WHY_CHOOSE_US } from '../constants';
import { Award, ShieldCheck, Zap, HardHat, TrendingUp, Target, Shield } from 'lucide-react';
import { useLanguage } from '../App';

const WhyChooseUsPage: React.FC = () => {
  const { lang } = useLanguage();

  const stats = [
    { label: 'Accuracy Rate', value: '99.9%' },
    { label: 'Happy Clients', value: '250+' },
    { label: 'Field Staff', value: '25+' },
    { label: 'Project Area', value: '5000+ Ha' },
  ];

  return (
    <div className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 pt-10">
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">Why Choose Shraddha Surveying</h1>
          <p className="text-xl text-stone-600 leading-relaxed">
            Professionalism, Accuracy, and Reliability are the pillars of our surveying practice.
          </p>
          <div className="w-24 h-1 bg-red-700 mx-auto mt-8"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div key={idx} className="flex gap-6 p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-red-100 p-4 rounded-xl h-fit text-red-700">
                {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
              </div>
              <div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{item.title[lang]}</h3>
                <p className="text-stone-600 leading-relaxed">{item.description[lang]}</p>
              </div>
            </div>
          ))}
          
          <div className="flex gap-6 p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-red-100 p-4 rounded-xl h-fit text-red-700">
              <Award size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Government Projects</h3>
              <p className="text-stone-600 leading-relaxed">Verified experience working on public infrastructure, meeting strict government technical specifications.</p>
            </div>
          </div>

          <div className="flex gap-6 p-8 bg-white/50 backdrop-blur-sm rounded-2xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-red-100 p-4 rounded-xl h-fit text-red-700">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-stone-900 mb-2">Competitive Pricing</h3>
              <p className="text-stone-600 leading-relaxed">Premium surveying solutions delivered at market-competitive rates without compromising on detail.</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {stats.map((stat, i) => (
            <div key={i} className="bg-stone-900 p-8 rounded-2xl text-center border border-white/10 shadow-2xl">
              <p className="text-4xl md:text-5xl font-bold text-red-500 mb-2">{stat.value}</p>
              <p className="text-stone-400 text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Process Section with Small 3D Icon Accent */}
        <div className="bg-red-50/50 backdrop-blur-sm border border-red-100 rounded-3xl p-12 relative">
          <div className="absolute -right-6 -bottom-6 opacity-30 pointer-events-none animate-float hidden lg:block">
            <Shield size={150} className="text-red-700" strokeWidth={0.5} />
          </div>

          <h2 className="text-3xl font-bold text-stone-900 text-center mb-16 relative z-10">Our Simple Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { title: 'Inquiry', icon: <Zap />, text: 'Send us your project requirements' },
              { title: 'Planning', icon: <HardHat />, text: 'Field reconnaissance and mobilization' },
              { title: 'Survey', icon: <Target />, text: 'Data acquisition with modern tools' },
              { title: 'Delivery', icon: <TrendingUp />, text: 'Final reports and drawings submission' },
            ].map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="bg-white w-20 h-20 rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6 text-red-700 border border-red-100 shadow-lg shadow-red-700/5">
                  {React.cloneElement(step.icon as React.ReactElement<any>, { size: 32 })}
                </div>
                <h4 className="text-lg font-bold text-stone-900 mb-2">0{idx + 1}. {step.title}</h4>
                <p className="text-stone-500 text-sm">{step.text}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-10 left-[70%] w-full h-[2px] bg-red-100 -z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUsPage;
