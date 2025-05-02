import React from 'react';

const DigitalProductEngineering: React.FC = () => {
  return (
    <section className="pt-0 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-white min-h-screen relative overflow-hidden">
      {/* Banner Section */}
      <div className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden mb-12">
        <img
          src="https://qualminds.com/images/product_engeering_tools/artwork.png"
          alt="Digital Product Engineering Banner"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70 scale-105 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#6610f2]/80 via-[#6610f2]/60 to-transparent" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4 animate-fade-in">Digital Product Engineering</h1>
          <p className="text-lg md:text-2xl text-white/90 font-medium max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Transforming ideas into scalable, user-centric digital products with innovation, agility, and engineering excellence.
          </p>
        </div>
      </div>
      {/* Decorative animated blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl animate-blob z-0" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-100 rounded-full opacity-30 blur-3xl animate-blob animation-delay-2000 z-0" />
      <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10" style={{ maxWidth: '80vw' }}>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-[#6610f2] animate-fade-in">Digital Product Engineering</h1>
        <p className="text-lg text-gray-700 mb-8 text-center animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          Trusted development partner creating value throughout the product life cycle.<br />
          <span className="block mt-4">In today’s digital world, rapid technology evolution, seamless user experience, quick time to market, and customer satisfaction put tremendous pressure on engineering teams. QualMinds addresses these challenges by partnering to innovate products & platforms, bringing true business agility.</span>
        </p>
        <div className="mb-8 flex justify-center animate-slide-in-left" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <img src="https://qualminds.com/images/product_engeering_tools/artwork.png" alt="Product Engineering" className="w-full max-w-md mx-auto mb-6 rounded-xl shadow-lg" />
        </div>
        {/* Our Approach Section - visually rich, animated process */}
        <div className="mb-12">
          <div className="bg-white/90 rounded-2xl shadow-soft p-10 md:p-14 backdrop-blur-xs animate-fade-in-up transition-all duration-700" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <h2 className="text-2xl md:text-3xl font-bold text-[#6610f2] mb-10 flex items-center gap-2 animate-fade-in text-center justify-center">Our Approach</h2>
            {/* Animated process steps */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
                <div className="w-20 h-20 rounded-full bg-[#6610f2]/10 flex items-center justify-center mb-4 shadow-lg border-2 border-[#6610f2]/20">
                  <img src="https://qualminds.com/images/product_engeering_tools/approach.png" alt="Design Thinking" className="w-12 h-12 object-contain animate-bounce-slow" />
                </div>
                <div className="font-bold text-[#6610f2] text-lg mb-2">Innovative Design Thinking</div>
                <div className="text-gray-700 text-base max-w-xs">We work side by side with you to identify the precise needs of your product and the results you hope to achieve.</div>
              </div>
              {/* Arrow */}
              <div className="hidden md:block animate-fade-in-up" style={{ animationDelay: '0.35s', animationFillMode: 'both' }}>
                <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2"><path d="M0 12h54m0 0l-6-6m6 6l-6 6" stroke="#6610f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                <div className="w-20 h-20 rounded-full bg-[#6610f2]/10 flex items-center justify-center mb-4 shadow-lg border-2 border-[#6610f2]/20">
                  <img src="https://qualminds.com/images/product_engeering_tools/agile.png" alt="Lean & Agile" className="w-12 h-12 object-contain animate-bounce-slow" />
                </div>
                <div className="font-bold text-[#6610f2] text-lg mb-2">Lean & Agile</div>
                <div className="text-gray-700 text-base max-w-xs">We follow Agile, DevOps, and Microservices processes, leveraging the latest tools and frameworks for rapid, iterative development.</div>
              </div>
              {/* Arrow */}
              <div className="hidden md:block animate-fade-in-up" style={{ animationDelay: '0.45s', animationFillMode: 'both' }}>
                <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2"><path d="M0 12h54m0 0l-6-6m6 6l-6 6" stroke="#6610f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                <div className="w-20 h-20 rounded-full bg-[#6610f2]/10 flex items-center justify-center mb-4 shadow-lg border-2 border-[#6610f2]/20">
                  <img src="https://qualminds.com/images/product_engeering_tools/poc.png" alt="POC & MVP" className="w-12 h-12 object-contain animate-bounce-slow" />
                </div>
                <div className="font-bold text-[#6610f2] text-lg mb-2">Proof of Concept (POC) & MVP</div>
                <div className="text-gray-700 text-base max-w-xs">We believe in fast starts, using POC/MVP approaches to quickly validate ideas and iterate to the best outcomes.</div>
              </div>
              {/* Arrow */}
              <div className="hidden md:block animate-fade-in-up" style={{ animationDelay: '0.55s', animationFillMode: 'both' }}>
                <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2"><path d="M0 12h54m0 0l-6-6m6 6l-6 6" stroke="#6610f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              {/* Step 4 */}
              <div className="flex flex-col items-center text-center animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                <div className="w-20 h-20 rounded-full bg-[#6610f2]/10 flex items-center justify-center mb-4 shadow-lg border-2 border-[#6610f2]/20">
                  <img src="https://qualminds.com/images/product_engeering_tools/endtoend.png" alt="End-to-End Services" className="w-12 h-12 object-contain animate-bounce-slow" />
                </div>
                <div className="font-bold text-[#6610f2] text-lg mb-2">End-to-End Services</div>
                <div className="text-gray-700 text-base max-w-xs">From product ideation and consulting, UX/UI design, system architecture, and iterative development to digital transformation, re-engineering, DevOps, and test automation.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <div className="bg-white/90 rounded-2xl shadow-soft p-10 md:p-14 backdrop-blur-xs animate-fade-in-up transition-all duration-700" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                <img src="https://qualminds.com/images/product_engeering_tools/deliver.png" alt="What We Deliver" className="w-40 h-40 object-contain drop-shadow-xl animate-bounce-slow" />
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-[#6610f2] mb-4 flex items-center gap-2 animate-fade-in">What We Deliver</h2>
                <ul className="list-none space-y-5 text-gray-700 text-lg">
                  <li className="flex items-start gap-3 animate-slide-in-left" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
                    <span className="inline-block w-8 h-8 bg-[#6610f2]/10 rounded-full flex items-center justify-center mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#6610f2" opacity=".2"/><path d="M8 12l2 2 4-4" stroke="#6610f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    <span>Product Ideation & Consulting</span>
                  </li>
                  <li className="flex items-start gap-3 animate-slide-in-left" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
                    <span className="inline-block w-8 h-8 bg-[#6610f2]/10 rounded-full flex items-center justify-center mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#6610f2" opacity=".2"/><path d="M8 12l2 2 4-4" stroke="#6610f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    <span>Product Design & UX</span>
                  </li>
                  <li className="flex items-start gap-3 animate-slide-in-left" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
                    <span className="inline-block w-8 h-8 bg-[#6610f2]/10 rounded-full flex items-center justify-center mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#6610f2" opacity=".2"/><path d="M8 12l2 2 4-4" stroke="#6610f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    <span>System Architecture & Design</span>
                  </li>
                  <li className="flex items-start gap-3 animate-slide-in-left" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
                    <span className="inline-block w-8 h-8 bg-[#6610f2]/10 rounded-full flex items-center justify-center mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#6610f2" opacity=".2"/><path d="M8 12l2 2 4-4" stroke="#6610f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    <span>Iterative Product Development</span>
                  </li>
                  <li className="flex items-start gap-3 animate-slide-in-left" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
                    <span className="inline-block w-8 h-8 bg-[#6610f2]/10 rounded-full flex items-center justify-center mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#6610f2" opacity=".2"/><path d="M8 12l2 2 4-4" stroke="#6610f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    <span>Digital Transformation & Re-Engineering</span>
                  </li>
                  <li className="flex items-start gap-3 animate-slide-in-left" style={{ animationDelay: '0.9s', animationFillMode: 'both' }}>
                    <span className="inline-block w-8 h-8 bg-[#6610f2]/10 rounded-full flex items-center justify-center mr-2"><svg width="20" height="20" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#6610f2" opacity=".2"/><path d="M8 12l2 2 4-4" stroke="#6610f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
                    <span>DevOps & Test Automation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Excellence Section */}
        <div className="bg-white/90 rounded-2xl shadow-soft p-8 mb-12 backdrop-blur-xs animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
          <h2 className="text-xl font-bold text-[#6610f2] mb-4 flex items-center gap-2"><span>Excellence is in Our DNA</span></h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700 text-base">
            <li>Design Thinking</li>
            <li>Lean & Agile</li>
            <li>Microservices</li>
            <li>Test & DevOps</li>
            <li>Continuous Refactoring</li>
            <li>Data Security</li>
            <li>Cloud Enabled</li>
            <li>Mobility</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div className="mb-8 flex justify-center animate-slide-in-right" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <img src="https://qualminds.com/images/product_approch.png" alt="Development Approach" className="w-full max-w-md mx-auto mb-6 rounded-xl shadow-lg" />
        </div>
        <div className="mt-10 flex justify-center animate-fade-in" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
          <a href="#contact" className="inline-block bg-[#6610f2] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#843dff] transition-colors text-lg">Talk to Our Experts</a>
        </div>
      </div>
    </section>
  );
};

export default DigitalProductEngineering;
