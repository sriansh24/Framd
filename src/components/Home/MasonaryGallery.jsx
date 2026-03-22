import React, { useState } from "react";
import { Link } from "react-router-dom";
import { allPages } from "../../javascriptData/masonaryGalleryJs/masonaryGallery";
import { ChevronLeft, ChevronRight } from "lucide-react";

function MasonaryGallery() {
  const [page, setPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const cards = allPages[page];
  const totalPages = allPages.length;
  const [activeCard, setActiveCard] = useState(null);

  const changePage = (newPage) => {
    if (newPage === page || isAnimating) return;

    setIsAnimating(true);

    setTimeout(() => {
      setPage(newPage);
      setIsAnimating(false);
    }, 350);
  };

  return (
    <>
      <section className="pt-16 px-6 md:px-12 pb-8 flex justify-between items-baseline bg-[#080808]">
        <p className="text-[0.8rem] md:text-[1rem] lg:text-[1.12rem] tracking-wide uppercase text-[#c0c0c0] font-mono animate-pulse">
          Selected work &#x2010; 2026
        </p>
        <Link to="/framd/gallery">
          <p className="text-[0.8rem] md:text-[1rem] lg:text-[1.12rem] tracking-wide uppercase text-gold font-mono cursor-pointer">
            View all &#x23CE;
          </p>
        </Link>
      </section>

      {/* Masonary Gallery */}
      <section
        className={`pt-0 px-6 md:px-12 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all 
          duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isAnimating ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"}`}
      >
        {cards.map((card, index) => {
          const isActive = activeCard === card.id;
          return (
            <div
              key={card.id}
              onClick={() =>
                setActiveCard(activeCard === card.id ? null : card.id)
              }
              className={`group relative overflow-hidden cursor-pointer row-span-1 ${card.span} ${card.height} ...`}
            >
              <img
                src={card.src}
                alt={card.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover scale-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 will-change-transform"
              />
              <div
                className={`absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_0%,transparent_50%)] transition-opacity duration-500
                              ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
              ></div>
              <div
                className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                              ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"}`}
              >
                <p className="tracking-[0.25em] uppercase text-gold-dark mb-1.5 font-mono transition-all duration-300 group-hover:text-[0.55rem] lg:text-[0.75rem]">
                  {card.category}
                </p>
                <p className="tracking-tight font-serif transition-all duration-300 group-hover:text-[1.25rem]">
                  {card.title}
                </p>
              </div>
              <p className="absolute top-4 right-4 text-[0.55rem] lg:text-[0.75rem] tracking-wide text-white font-mono">
                {card.id}
              </p>
            </div>
          );
        })}
      </section>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-6 pb-16">
        <button
          onClick={() => changePage(Math.max(0, page - 1))}
          disabled={page === 0}
          className="w-6 h-6 flex items-center justify-center rounded-full text-[0.65rem] text-[rgb(200,169,110)]
                              bg-white/5 hover:bg-white/10 transition disabled:opacity-50 cursor-pointer"
        >
          <ChevronLeft />
        </button>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => changePage(i)}
            className={`relative w-6 h-6 flex items-center justify-center font-mono text-[0.65rem] tracking-widest
                                p-0 border-0 bg-transparent rounded-none transition-all duration-300 cursor-pointer
                                ${
                                  i === page
                                    ? "text-[rgb(200,169,110)]"
                                    : "text-[rgba(200,169,110,0.3)] hover:text-[rgba(200,169,110,0.6)]"
                                }`}
          >
            {String(i + 1).padStart(2, "0")}
            {i === page && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[rgb(200,169,110)]" />
            )}
          </button>
        ))}
        <button
          onClick={() => changePage(Math.min(totalPages - 1, page + 1))}
          disabled={page === totalPages - 1}
          className="w-6 h-6 flex items-center justify-center text-[0.65rem] text-[rgb(200,169,110)]
                             rounded-full bg-white/5 hover:bg-white/10 transition disabled:opacity-50 cursor-pointer"
        >
          <ChevronRight />
        </button>
      </div>
    </>
  );
}

export default MasonaryGallery;
