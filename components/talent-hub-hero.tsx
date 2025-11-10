"use client";

import { useEffect, useState } from "react";

export function TalentHubHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Team member data based on the design
  const teamMembers = [
    { name: "Diana", role: "Product Manager", avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face" },
    { name: "Sebastian", role: "Senior UX/UI", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
    { name: "Vera", role: "UX/UI Designer", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face" },
    { name: "Janine", role: "Product Manager", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face" },
    { name: "Richa", role: "Senior UX/UI", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face" },
    { name: "Camila", role: "UX/UI Designer", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face" },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {/* Hero content - text on left, team showcase on right */}
        <div className="flex-1 flex items-start justify-between px-4 sm:px-8 md:px-16 lg:px-24 pt-20 md:pt-32 pb-8 md:pb-16">
          {/* Left side - Hero text */}
          <div className="flex-1 max-w-2xl z-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Your Dream Team
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 md:mb-12 font-light">
              Propel Your Business To Greatness
            </p>
            
            {/* Service Cards */}
            <div className="space-y-4 mb-8 md:mb-12">
              <div className="flex items-start gap-4 p-3 md:p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base md:text-lg mb-1">Professional Teams</h3>
                  <p className="text-gray-300 text-xs md:text-sm">Our specialized teams are well-versed in creating exceptional digital products from start to finish.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-3 md:p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base md:text-lg mb-1">Access To Talent</h3>
                  <p className="text-gray-300 text-xs md:text-sm">A complete selection of the top 3% of global remote tech talent. No recruiter markup fees.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-3 md:p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base md:text-lg mb-1">Highly Experienced</h3>
                  <p className="text-gray-300 text-xs md:text-sm">Every team has at least 3+ years of experience in their specific field of expertise.</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors duration-200 text-base md:text-lg">
                Build your team
              </button>
              <button className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 text-base md:text-lg">
                <div className="w-5 h-5 md:w-6 md:h-6 border-2 border-gray-300 rounded-full hover:border-white flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <span>Book a free discovery call</span>
              </button>
            </div>
          </div>

          {/* Right side - Team members showcase (hidden on mobile) */}
          <div className="flex-1 flex justify-end z-20 lg:block hidden">
            <div className="relative">
              {/* Gradient circles in background */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-r from-pink-500/30 to-red-500/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl" />
              
              {/* Team grid */}
              <div className="relative grid grid-cols-3 gap-6 p-8">
                {teamMembers.map((member, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white/20 mb-3 shadow-lg">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-center">
                      <h4 className="text-white font-semibold text-sm">{member.name}</h4>
                      <p className="text-gray-400 text-xs">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}