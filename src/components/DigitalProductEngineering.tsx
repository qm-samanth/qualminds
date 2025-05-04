import React from 'react';

const DigitalProductEngineering: React.FC = () => {
  return (
    <main className="bg-gradient-to-br from-blue-50 via-purple-50 to-white min-h-screen relative overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative flex flex-col justify-center py-28 md:py-40 bg-gradient-to-br from-[#18192a] via-[#2a2257] to-[#1a1333] overflow-hidden shadow-2xl">
        {/* Subtle SVG mesh overlay for tech feel + animated particles */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40 animate-pulse-slow" viewBox="0 0 1440 600" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="meshGradient" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
              <stop stopColor="#6610f2" stopOpacity="0.2" />
              <stop offset="1" stopColor="#00c6ff" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <g stroke="url(#meshGradient)" strokeWidth="1">
            <polyline points="0,100 200,200 400,100 600,200 800,100 1000,200 1200,100 1440,200" />
            <polyline points="0,300 200,400 400,300 600,400 800,300 1000,400 1200,300 1440,400" />
            <polyline points="0,500 200,600 400,500 600,600 800,500 1000,600 1200,500 1440,600" />
            <polyline points="0,0 0,600" opacity="0.2" />
            <polyline points="200,0 200,600" opacity="0.2" />
            <polyline points="400,0 400,600" opacity="0.2" />
            <polyline points="600,0 600,600" opacity="0.2" />
            <polyline points="800,0 800,600" opacity="0.2" />
            <polyline points="1000,0 1000,600" opacity="0.2" />
            <polyline points="1200,0 1200,600" opacity="0.2" />
            <polyline points="1440,0 1440,600" opacity="0.2" />
          </g>
        </svg>
        <div className="relative z-10 max-w-5xl mx-auto px-4 flex flex-col items-start">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 animate-fade-in text-left tracking-tight leading-tight drop-shadow-2xl" style={{textShadow:'0 4px 32px #000a'}}>WHAT IS DIGITAL<br className="hidden md:block"/> PRODUCT ENGINEERING?</h1>
          <p className="text-xl md:text-3xl text-[#bdb7ff] font-semibold mb-10 animate-fade-in uppercase tracking-wider text-left" style={{ animationDelay: '0.1s', animationFillMode: 'both', letterSpacing: '0.08em', textShadow:'0 2px 16px #0008' }}>
            Key Principles and Strategies
          </p>
          <a href="#contact" className="inline-block bg-gradient-to-r from-[#6610f2] to-[#00c6ff] text-white font-bold px-10 py-4 rounded-full shadow-xl hover:from-[#843dff] hover:to-[#6610f2] transition-all text-xl animate-fade-in text-left" style={{ animationDelay: '0.2s', animationFillMode: 'both', boxShadow:'0 8px 32px #6610f255' }}>Talk to Our Experts</a>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="container mx-auto px-4 md:px-8 py-20">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6610f2] to-[#00c6ff] mb-14 animate-fade-in drop-shadow-lg">Why Choose QualMinds?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature Card 1 */}
          <div className="bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center hover:scale-105 hover:shadow-[0_8px_32px_#6610f255] transition-transform animate-fade-in-up border border-[#ede9fe]">
            {/* Design Thinking Icon */}
            <svg className="w-16 h-16 mb-4 text-[#6610f2]" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="2">
              <circle cx="24" cy="24" r="20" fill="#ede9fe" />
              <path d="M24 14v10l7 7" stroke="#6610f2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="24" cy="24" r="20" stroke="#6610f2" strokeWidth="2" fill="none"/>
            </svg>
            <h3 className="font-bold text-lg text-[#6610f2] mb-2">Innovative Design Thinking</h3>
            <p className="text-gray-700">We work side by side with you to identify the precise needs of your product and the results you hope to achieve.</p>
          </div>
          {/* Feature Card 2 */}
          <div className="bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center hover:scale-105 hover:shadow-[0_8px_32px_#6610f255] transition-transform animate-fade-in-up border border-[#e0f2fe]" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            {/* Agile Icon */}
            <svg className="w-16 h-16 mb-4 text-[#6610f2]" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="2">
              <circle cx="24" cy="24" r="20" fill="#e0f2fe" />
              <path d="M34 24a10 10 0 1 1-10-10" stroke="#6610f2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <polyline points="24,14 24,24 34,24" stroke="#6610f2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="24" cy="24" r="20" stroke="#6610f2" strokeWidth="2" fill="none"/>
            </svg>
            <h3 className="font-bold text-lg text-[#6610f2] mb-2">Lean & Agile</h3>
            <p className="text-gray-700">We follow Agile, DevOps, and Microservices processes, leveraging the latest tools and frameworks for rapid, iterative development.</p>
          </div>
          {/* Feature Card 3 */}
          <div className="bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center hover:scale-105 hover:shadow-[0_8px_32px_#6610f255] transition-transform animate-fade-in-up border border-[#f0fdf4]" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            {/* POC & MVP Icon */}
            <svg className="w-16 h-16 mb-4 text-[#6610f2]" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="2">
              <rect x="10" y="10" width="28" height="28" rx="6" fill="#f0fdf4" />
              <path d="M16 32l8-8 8 8" stroke="#6610f2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="10" y="10" width="28" height="28" rx="6" stroke="#6610f2" strokeWidth="2" fill="none"/>
            </svg>
            <h3 className="font-bold text-lg text-[#6610f2] mb-2">Proof of Concept (POC) & MVP</h3>
            <p className="text-gray-700">We believe in fast starts, using POC/MVP approaches to quickly validate ideas and iterate to the best outcomes.</p>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="bg-white/95 py-20">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6610f2] to-[#00c6ff] mb-14 animate-fade-in drop-shadow-lg">Our Product Engineering Process</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center animate-fade-in-up">
              <div className="w-16 h-16 rounded-full bg-[#6610f2]/10 flex items-center justify-center mb-4 shadow-lg border-2 border-[#6610f2]/20">
                {/* Design Thinking Icon */}
                <svg className="w-10 h-10 object-contain animate-bounce-slow text-[#6610f2]" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="2">
                  <circle cx="24" cy="24" r="20" fill="#ede9fe" />
                  <path d="M24 14v10l7 7" stroke="#6610f2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="24" cy="24" r="20" stroke="#6610f2" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="font-bold text-[#6610f2] text-base mb-2">Ideation & Consulting</div>
              <div className="text-gray-700 text-sm max-w-xs">Collaborative workshops to define vision, goals, and roadmap.</div>
            </div>
            {/* Arrow */}
            <div className="hidden md:block animate-fade-in-up">
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2"><path d="M0 12h54m0 0l-6-6m6 6l-6 6" stroke="#6610f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <div className="w-16 h-16 rounded-full bg-[#6610f2]/10 flex items-center justify-center mb-4 shadow-lg border-2 border-[#6610f2]/20">
                {/* Agile Icon */}
                <svg className="w-10 h-10 object-contain animate-bounce-slow text-[#6610f2]" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="2">
                  <circle cx="24" cy="24" r="20" fill="#e0f2fe" />
                  <path d="M34 24a10 10 0 1 1-10-10" stroke="#6610f2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <polyline points="24,14 24,24 34,24" stroke="#6610f2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="24" cy="24" r="20" stroke="#6610f2" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="font-bold text-[#6610f2] text-base mb-2">UX/UI & Prototyping</div>
              <div className="text-gray-700 text-sm max-w-xs">Wireframes, clickable prototypes, and user journey mapping.</div>
            </div>
            {/* Arrow */}
            <div className="hidden md:block animate-fade-in-up">
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2"><path d="M0 12h54m0 0l-6-6m6 6l-6 6" stroke="#6610f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <div className="w-16 h-16 rounded-full bg-[#6610f2]/10 flex items-center justify-center mb-4 shadow-lg border-2 border-[#6610f2]/20">
                {/* POC & MVP Icon */}
                <svg className="w-10 h-10 object-contain animate-bounce-slow text-[#6610f2]" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="2">
                  <rect x="10" y="10" width="28" height="28" rx="6" fill="#f0fdf4" />
                  <path d="M16 32l8-8 8 8" stroke="#6610f2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="10" y="10" width="28" height="28" rx="6" stroke="#6610f2" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="font-bold text-[#6610f2] text-base mb-2">Agile Development</div>
              <div className="text-gray-700 text-sm max-w-xs">Iterative sprints, continuous feedback, and rapid releases.</div>
            </div>
            {/* Arrow */}
            <div className="hidden md:block animate-fade-in-up">
              <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2"><path d="M0 12h54m0 0l-6-6m6 6l-6 6" stroke="#6610f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              <div className="w-16 h-16 rounded-full bg-[#6610f2]/10 flex items-center justify-center mb-4 shadow-lg border-2 border-[#6610f2]/20">
                {/* End-to-End Services Icon */}
                <svg className="w-10 h-10 object-contain animate-bounce-slow text-[#6610f2]" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="2">
                  <circle cx="24" cy="24" r="20" fill="#f0f9ff" />
                  <path d="M16 24h16M24 16v16" stroke="#6610f2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="24" cy="24" r="20" stroke="#6610f2" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className="font-bold text-[#6610f2] text-base mb-2">Launch & Scale</div>
              <div className="text-gray-700 text-sm max-w-xs">Go-live, monitoring, support, and continuous improvement.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION SECTION */}
      <section className="py-20 bg-gradient-to-r from-[#6610f2]/95 via-[#843dff]/90 to-[#00c6ff]/90 text-white text-center shadow-2xl">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 animate-fade-in drop-shadow-lg">Ready to Build Your Next Big Thing?</h2>
          <p className="text-xl md:text-2xl mb-10 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Let’s turn your vision into a high-impact digital product. Partner with QualMinds for end-to-end engineering excellence.
          </p>
          <a href="#contact" className="inline-block bg-white text-[#6610f2] font-bold px-10 py-4 rounded-full shadow-xl hover:bg-[#843dff] hover:text-white transition-all text-xl animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both', boxShadow:'0 8px 32px #6610f255' }}>Contact Us</a>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="container mx-auto px-4 md:px-8 py-20">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6610f2] to-[#00c6ff] mb-14 animate-fade-in drop-shadow-lg">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Testimonial 1 */}
          <div className="bg-white/90 rounded-3xl shadow-2xl p-10 animate-fade-in-up border border-[#ede9fe]">
            <p className="text-gray-700 mb-4">“QualMinds delivered our product on time and exceeded our expectations. Their agile approach and technical expertise are unmatched.”</p>
            <div className="flex items-center gap-3">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client" className="w-10 h-10 rounded-full" />
              <div>
                <div className="font-bold text-[#6610f2]">John D.</div>
                <div className="text-sm text-gray-500">Product Owner</div>
              </div>
            </div>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white/90 rounded-3xl shadow-2xl p-10 animate-fade-in-up border border-[#e0f2fe]" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <p className="text-gray-700 mb-4">“The team’s communication and dedication made our digital transformation seamless. Highly recommend QualMinds!”</p>
            <div className="flex items-center gap-3">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client" className="w-10 h-10 rounded-full" />
              <div>
                <div className="font-bold text-[#6610f2]">Priya S.</div>
                <div className="text-sm text-gray-500">CTO, SaaS Startup</div>
              </div>
            </div>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white/90 rounded-3xl shadow-2xl p-10 animate-fade-in-up border border-[#f0fdf4]" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <p className="text-gray-700 mb-4">“From ideation to launch, QualMinds was a true partner. Their process is transparent and results-driven.”</p>
            <div className="flex items-center gap-3">
              <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Client" className="w-10 h-10 rounded-full" />
              <div>
                <div className="font-bold text-[#6610f2]">Alex R.</div>
                <div className="text-sm text-gray-500">Founder, Fintech</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ SECTION */}
      <section className="container mx-auto px-4 md:px-8 py-20">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6610f2] to-[#00c6ff] mb-14 animate-fade-in drop-shadow-lg">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="bg-white/95 rounded-2xl shadow-xl p-8 animate-fade-in-up border border-[#ede9fe]">
            <div className="font-bold text-[#6610f2] mb-2">What is digital product engineering?</div>
            <div className="text-gray-700 text-sm">It’s the end-to-end process of designing, developing, and scaling digital products using modern engineering practices and tools.</div>
          </div>
          <div className="bg-white/95 rounded-2xl shadow-xl p-8 animate-fade-in-up border border-[#e0f2fe]" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <div className="font-bold text-[#6610f2] mb-2">How does QualMinds ensure quality and speed?</div>
            <div className="text-gray-700 text-sm">We use agile methodologies, continuous integration, and automated testing to deliver high-quality products quickly.</div>
          </div>
          <div className="bg-white/95 rounded-2xl shadow-xl p-8 animate-fade-in-up border border-[#f0fdf4]" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <div className="font-bold text-[#6610f2] mb-2">Can you help with legacy modernization?</div>
            <div className="text-gray-700 text-sm">Absolutely! We specialize in digital transformation and re-engineering of legacy systems for the modern era.</div>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW SECTION */}
      {/* BLOG PREVIEW SECTION - Modern Horizontal Cards */}
      <section className="bg-white/95 py-20">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6610f2] to-[#00c6ff] mb-14 animate-fade-in drop-shadow-lg">Latest Insights</h2>
          <div className="flex flex-col gap-10">
            {/* Blog Card 1 */}
            <div className="group flex flex-col md:flex-row bg-gradient-to-br from-[#ede9fe] via-white to-[#e0f2fe] rounded-3xl shadow-2xl overflow-hidden border border-[#ede9fe] hover:shadow-[0_8px_32px_#6610f255] transition-all animate-fade-in-up">
              <div className="relative md:w-2/5 w-full h-56 md:h-auto">
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" alt="Blog 1" className="w-full h-full object-cover object-center md:rounded-l-3xl md:rounded-r-none rounded-t-3xl md:rounded-t-none transition-transform group-hover:scale-105 duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6610f2cc] via-transparent to-transparent opacity-80 md:opacity-60"></div>
              </div>
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="font-extrabold text-2xl md:text-3xl text-[#6610f2] mb-2 group-hover:underline transition-all">5 Trends in Digital Product Engineering</div>
                <div className="text-gray-700 text-base md:text-lg mb-6">Stay ahead with the latest trends shaping the future of digital products.</div>
                <a href="/blog" className="inline-block w-max bg-gradient-to-r from-[#6610f2] to-[#00c6ff] text-white font-bold px-6 py-2 rounded-full shadow-lg hover:from-[#843dff] hover:to-[#6610f2] transition-all text-base">Read More</a>
              </div>
            </div>
            {/* Blog Card 2 */}
            <div className="group flex flex-col md:flex-row bg-gradient-to-br from-[#e0f2fe] via-white to-[#f0fdf4] rounded-3xl shadow-2xl overflow-hidden border border-[#e0f2fe] hover:shadow-[0_8px_32px_#00c6ff55] transition-all animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <div className="relative md:w-2/5 w-full h-56 md:h-auto">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" alt="Blog 2" className="w-full h-full object-cover object-center md:rounded-l-3xl md:rounded-r-none rounded-t-3xl md:rounded-t-none transition-transform group-hover:scale-105 duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00c6ffcc] via-transparent to-transparent opacity-80 md:opacity-60"></div>
              </div>
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="font-extrabold text-2xl md:text-3xl text-[#00c6ff] mb-2 group-hover:underline transition-all">Agile vs. Waterfall: What Works?</div>
                <div className="text-gray-700 text-base md:text-lg mb-6">A practical guide to choosing the right development methodology for your product.</div>
                <a href="/blog" className="inline-block w-max bg-gradient-to-r from-[#00c6ff] to-[#6610f2] text-white font-bold px-6 py-2 rounded-full shadow-lg hover:from-[#6610f2] hover:to-[#843dff] transition-all text-base">Read More</a>
              </div>
            </div>
            {/* Blog Card 3 */}
            <div className="group flex flex-col md:flex-row bg-gradient-to-br from-[#f0fdf4] via-white to-[#ede9fe] rounded-3xl shadow-2xl overflow-hidden border border-[#f0fdf4] hover:shadow-[0_8px_32px_#00c6ff55] transition-all animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <div className="relative md:w-2/5 w-full h-56 md:h-auto">
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" alt="Blog 3" className="w-full h-full object-cover object-center md:rounded-l-3xl md:rounded-r-none rounded-t-3xl md:rounded-t-none transition-transform group-hover:scale-105 duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00c6ffcc] via-transparent to-transparent opacity-80 md:opacity-60"></div>
              </div>
              <div className="flex-1 p-8 flex flex-col justify-center">
                <div className="font-extrabold text-2xl md:text-3xl text-[#00c6ff] mb-2 group-hover:underline transition-all">Building Scalable SaaS Platforms</div>
                <div className="text-gray-700 text-base md:text-lg mb-6">Key considerations for architecting and launching SaaS products.</div>
                <a href="/blog" className="inline-block w-max bg-gradient-to-r from-[#00c6ff] to-[#6610f2] text-white font-bold px-6 py-2 rounded-full shadow-lg hover:from-[#6610f2] hover:to-[#843dff] transition-all text-base">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION (anchor only, actual form is in Contact.tsx) */}
      <span id="contact"></span>
    </main>
  );
};

export default DigitalProductEngineering;
