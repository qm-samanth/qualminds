import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
      <section
        id="home"
        className="pt-32 pb-20 relative overflow-hidden min-h-[80vh] flex items-center"
        style={{ background: 'none' }}
      >
        {/* Background IT services video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ filter: 'brightness(0.5)' }}
        >
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#6610f299] via-[#6610f244] to-[#6610f200]" />
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-8 drop-shadow-lg">
              We help Startups & Enterprises
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-8 max-w-4xl mx-auto font-medium">
              build <span className="bg-white text-[#6610f2] px-4 py-1 rounded font-bold shadow-sm">modern digital experiences</span> with our expertise in Digital Product Engineering
            </p>
            {/* Removed DevCraft CTA and info as requested */}
          </div>
        </div>
      </section>
      {/* Solutions Section - Our Expertise section with theme-matching gradient, one line, wider container, white cards with icons */}
      <section
        className="w-full relative z-20 bg-transparent flex items-end justify-center pb-8 pt-0"
        style={{ minHeight: 0, maxHeight: 'none' }}
      >
        <div className="w-full max-w-7xl px-2 md:px-8 text-center flex flex-row gap-6 justify-center">
          <a href="/digital-product-engineering" className="flex-1 max-w-sm min-w-[260px] bg-white/90 rounded-3xl shadow-strong overflow-hidden flex flex-col items-center justify-center p-8 group transition-all duration-300 hover:scale-[1.07] hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative z-20 -mt-16 md:-mt-24 border border-[#e0c3fc]/60 backdrop-blur-xs" style={{ background: 'linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%)' }}>
            <div className="flex flex-col items-center justify-center mb-4 animate-fade-in">
              {/* Digital Product Engineering Icon */}
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" className="mb-2"><circle cx="12" cy="12" r="10" fill="#6610f2" fillOpacity="0.12"/><path d="M8 12l2 2 4-4" stroke="#6610f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="text-center">
              <div className="font-bold text-base text-[#232946] mb-1">Digital Product Engineering</div>
              <div className="text-xs text-[#6c6f7b] mb-2">Modern Apps · UX/UI</div>
              <div className="text-xs text-[#232946] mb-2">We design and build scalable, user-centric digital products for startups and enterprises, from concept to launch.</div>
              <span className="inline-block mt-2 px-4 py-2 bg-[#6610f2] text-white rounded-full text-xs font-semibold shadow-md transition-all duration-200 group-hover:bg-[#843dff] group-hover:shadow-lg group-hover:-translate-y-1">Learn More</span>
            </div>
          </a>
          <a href="#contact" className="flex-1 max-w-sm min-w-[260px] bg-white/90 rounded-3xl shadow-strong overflow-hidden flex flex-col items-center justify-center p-8 group transition-all duration-300 hover:scale-[1.07] hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative z-20 -mt-16 md:-mt-24 border border-[#e0c3fc]/60 backdrop-blur-xs" style={{ background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' }}>
            <div className="flex flex-col items-center justify-center mb-4 animate-fade-in">
              {/* Data Engineering Icon */}
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" className="mb-2"><rect x="4" y="4" width="16" height="16" rx="4" fill="#6610f2" fillOpacity="0.12"/><path d="M8 12h8M12 8v8" stroke="#6610f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="text-center">
              <div className="font-bold text-base text-[#232946] mb-1">Data Engineering</div>
              <div className="text-xs text-[#6c6f7b] mb-2">Big Data · Analytics</div>
              <div className="text-xs text-[#232946] mb-2">Unlock the power of your data with robust pipelines, warehousing, and actionable analytics for business growth.</div>
              <span className="inline-block mt-2 px-4 py-2 bg-[#6610f2] text-white rounded-full text-xs font-semibold shadow-md transition-all duration-200 group-hover:bg-[#843dff] group-hover:shadow-lg group-hover:-translate-y-1">Learn More</span>
            </div>
          </a>
          <a href="#contact" className="flex-1 max-w-sm min-w-[260px] bg-white/90 rounded-3xl shadow-strong overflow-hidden flex flex-col items-center justify-center p-8 group transition-all duration-300 hover:scale-[1.07] hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative z-20 -mt-16 md:-mt-24 border border-[#e0c3fc]/60 backdrop-blur-xs" style={{ background: 'linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%)' }}>
            <div className="flex flex-col items-center justify-center mb-4 animate-fade-in">
              {/* Quality Engineering Icon */}
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" className="mb-2"><rect x="3" y="11" width="18" height="7" rx="2" fill="#6610f2" fillOpacity="0.12"/><rect x="7" y="6" width="10" height="5" rx="2" fill="#6610f2" fillOpacity="0.12"/><path d="M7 11V8a2 2 0 012-2h6a2 2 0 012 2v3" stroke="#6610f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="text-center">
              <div className="font-bold text-base text-[#232946] mb-1">Quality Engineering</div>
              <div className="text-xs text-[#6c6f7b] mb-2">Testing · Automation</div>
              <div className="text-xs text-[#232946] mb-2">Ensure reliability and performance with automated testing, QA strategy, and continuous quality improvement.</div>
              <span className="inline-block mt-2 px-4 py-2 bg-[#6610f2] text-white rounded-full text-xs font-semibold shadow-md transition-all duration-200 group-hover:bg-[#843dff] group-hover:shadow-lg group-hover:-translate-y-1">Learn More</span>
            </div>
          </a>
          <a href="#contact" className="flex-1 max-w-sm min-w-[260px] bg-white/90 rounded-3xl shadow-strong overflow-hidden flex flex-col items-center justify-center p-8 group transition-all duration-300 hover:scale-[1.07] hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative z-20 -mt-16 md:-mt-24 border border-[#e0c3fc]/60 backdrop-blur-xs" style={{ background: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)' }}>
            <div className="flex flex-col items-center justify-center mb-4 animate-fade-in">
              {/* DevOps Icon */}
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" className="mb-2"><rect x="4" y="4" width="16" height="16" rx="8" fill="#6610f2" fillOpacity="0.12"/><path d="M12 8v4l3 3" stroke="#6610f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="text-center">
              <div className="font-bold text-base text-[#232946] mb-1">DevOps</div>
              <div className="text-xs text-[#6c6f7b] mb-2">CI/CD · Cloud Infra</div>
              <div className="text-xs text-[#232946] mb-2">Accelerate delivery and improve reliability with CI/CD, cloud automation, and infrastructure as code.</div>
              <span className="inline-block mt-2 px-4 py-2 bg-[#6610f2] text-white rounded-full text-xs font-semibold shadow-md transition-all duration-200 group-hover:bg-[#843dff] group-hover:shadow-lg group-hover:-translate-y-1">Learn More</span>
            </div>
          </a>
          <a href="#contact" className="flex-1 max-w-sm min-w-[260px] bg-white/90 rounded-3xl shadow-strong overflow-hidden flex flex-col items-center justify-center p-8 group transition-all duration-300 hover:scale-[1.07] hover:shadow-2xl hover:-translate-y-2 cursor-pointer relative z-20 -mt-16 md:-mt-24 border border-[#e0c3fc]/60 backdrop-blur-xs" style={{ background: 'linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%)' }}>
            <div className="flex flex-col items-center justify-center mb-4 animate-fade-in">
              {/* Mobility & IoT Icon */}
              <svg width="48" height="48" fill="none" viewBox="0 0 24 24" className="mb-2"><rect x="2" y="7" width="20" height="10" rx="5" fill="#6610f2" fillOpacity="0.12"/><path d="M7 12h10" stroke="#6610f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="text-center">
              <div className="font-bold text-base text-[#232946] mb-1">Mobility & IOT</div>
              <div className="text-xs text-[#6c6f7b] mb-2">Mobile · IoT Devices</div>
              <div className="text-xs text-[#232946] mb-2">Connect people and devices with secure, scalable mobile and IoT solutions for the modern enterprise.</div>
              <span className="inline-block mt-2 px-4 py-2 bg-[#6610f2] text-white rounded-full text-xs font-semibold shadow-md transition-all duration-200 group-hover:bg-[#843dff] group-hover:shadow-lg group-hover:-translate-y-1">Learn More</span>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;