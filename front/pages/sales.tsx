import React from 'react';

export default function Sales() {
  return (
    <div id="sales" className="relative py-16 bg-gradient-to-br from-blue-900 via-black to-gray-900 overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,...')] animate-pulse"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl transition-all duration-500 hover:text-blue-300">
                Premium Paw Care for Exotic Animals
              </h2>
              <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
                Specialized hoof, claw, and pad maintenance services for zoo residents. Veterinary-approved treatments with species-specific approaches.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { icon: 'M19 14l-7 7m0 0l-7-7m7 7V3', text: 'Daily Health Checks' },
                { icon: 'M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h4M4 8h16M4 4h16', text: 'Custom Orthopedic Solutions' },
                { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', text: 'Infection Prevention' },
                { icon: 'M13 10V3L4 14h7v7l9-11h-7z', text: 'Emergency Care' },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-white/10 backdrop-blur-lg rounded-xl hover:bg-blue-900 
                            transition-all duration-300 transform hover:scale-105 
                            animate-card-pop delay-200"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-4 group">
                    <div className="flex-shrink-0 p-3 bg-blue-500/20 rounded-lg transition-all 
                                  duration-300 group-hover:bg-blue-400/40 group-hover:rotate-12">
                      <svg
                        className="w-6 h-6 text-blue-400 group-hover:text-white animate-icon-float"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="2" 
                          d={feature.icon}
                          className="group-hover:stroke-[3px] transition-all"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-white relative 
                                  before:absolute before:-bottom-1 before:left-0 before:w-0 
                                  before:h-0.5 before:bg-blue-400 before:transition-all 
                                  before:duration-300 group-hover:before:w-full">
                      {feature.text}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center bg-gray-900 backdrop-blur-lg rounded-2xl p-8 lg:p-12 
                    shadow-xl border border-blue-900/50 hover:shadow-2xl transition-all 
                    duration-500 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-900/30 to-black/0 pointer-events-none"></div>

              <h3 className="text-2xl font-bold text-white mb-4 hover:text-blue-400 
                            transition-all duration-300 relative z-10">
                <span className="bg-gradient-to-r from-blue-700 to-blue-900 text-transparent bg-clip-text">
                  Specialized Care Packages
                </span>
              </h3>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
                {[
                  { 
                    title: 'Basic Maintenance',
                    price: '$199/month',
                    features: ['Routine claw trimming', 'Pad inspections', 'Basic wound care'],
                    bg: 'bg-blue-950/80 hover:bg-blue-900'
                  },
                  {
                    title: 'Premium Care',
                    price: '$499/month',
                    features: ['Advanced orthopedic care', '24/7 emergency service', 'Custom footwear solutions'],
                    bg: 'bg-gray-800 hover:bg-gray-700'
                  }
                ].map((pkg, index) => (
                  <div
                    key={index}
                    className={`p-6 ${pkg.bg} rounded-xl transition-all duration-300 
                              transform hover:-translate-y-2 hover:shadow-xl relative
                              overflow-hidden group border border-white/10`}
                  >
                    {/* Effet de vague animé revisité */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-30 
                                  transition-opacity duration-500">
                      <div className="absolute -top-10 -left-10 w-32 h-32 bg-blue-600/30 
                                      rounded-full animate-wave"></div>
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-2">{pkg.title}</h4>
                    <p className="text-blue-300 mb-4 font-mono">{pkg.price}</p>
                    <ul className="text-white/80 space-y-2 text-left">
                      {pkg.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 hover:translate-x-2 
                                            transition-transform duration-200">
                          <span className="text-blue-400 text-sm">▸</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 relative z-10">
                <p className="text-lg text-white mb-6 inline-block bg-blue-950/50 px-4 py-2 rounded-full">
                  <span className="text-blue-400">✦</span> 98% Infection Prevention Success Rate <span className="text-blue-400">✦</span>
                </p>
                <button
                  className="bg-gradient-to-br from-blue-900 via-black to-blue-900 text-white 
                          font-bold py-3 px-8 rounded-lg transition-all duration-300 
                          transform hover:scale-[1.02] shadow-lg border-2 border-blue-800/50
                          hover:border-blue-600/50 hover:shadow-blue-900/30 relative
                          overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent 
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative">Schedule Consultation Now</span>
                </button>
              </div>
            </div>
          </div>
      </div>
  );
}
