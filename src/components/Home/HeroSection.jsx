import React from "react";

function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end px-12 pb-16">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.8] bg-linear-[135deg,#0a0500_0%,#1a0f00_30%,#2d1a00_60%,#0a0500_100%]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(at_60%_40%,rgba(139,69,19,0.3)_0%,transparent_60%)]"></div>

      {/* Grid Lines */}
      <div className="absolute top-0 left-[15%] w-px h-full bg-[rgb(200,169,110,0.06)] opacity-100 transition-opacity duration-1500"></div>
      <div className="absolute top-0 left-[35%] w-px h-full bg-[rgba(200,169,110,0.06)] opacity-100 transition-opacity duration-1500 delay-200"></div>
      <div className="absolute top-0 left-[65%] w-px h-full bg-[rgba(200,169,110,0.06)] opacity-100 transition-opacity duration-1500 delay-400"></div>
      <div className="absolute top-0 left-[85%] w-px h-full bg-[rgba(200,169,110,0.06)] opacity-100 transition-opacity duration-1500 delay-600"></div>

      {/* Content */}
      <div className="relative z-2 max-w-175">
        <p
          className="text-xs font-mono tracking-[0.35rem] uppercase mb-6 text-[rgb(200,169,110)] opacity-100
              translate-x-0 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300"
        >
          Photography • Exploration • Stories
        </p>
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-normal leading-[0.9] mb-8 tracking-tight 
              opacity-100 translate-y-0 transition-all duration-1200 ease-[cubic-bezier(0.16,1,0.3,1)] delay-500"
        >
          The world,
          <br />
          <span className="italic text-[#e6b77e]">witnessed.</span>
        </h1>

        <p
          className="text-sm font-serif leading-[1.8] text-[rgb(107,100,96)] max-w-105 tracking-wide opacity-100 translate-y-0
              transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-800"
        >
          From wild landscapes to silent streets, every frame captures a story
          waiting to be told.
        </p>
      </div>

      {/* Scroll Indicator (outside content) */}
      <div className="absolute bottom-10 right-12 flex flex-col items-center gap-3 opacity-100 transition-opacity duration-1200 delay-150">
        <p className="text-[0.55rem] font-serif uppercase tracking-[0.25em] text-[rgb(74,68,64)] [writing-mode:vertical-rl]">
          SCROLL
        </p>
        <div className="w-px h-12.5 bg-linear-to-b from-[rgb(200,169,110)] to-transparent animate-pulse"></div>
      </div>
    </section>
  );
}

export default HeroSection;
