import React, { useState } from "react";
import MountFuji from "../../assets/Img/FeatureImage/Mountains/Mount-Fuji.webp";
import KailashMount from "../../assets/Img/FeatureImage/Mountains/himalaya-mountain-4.webp";
// import { MoveLeft, MoveRight } from "lucide-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
// import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";

function MasonaryGallery() {
  const allPages = [
    // Page 1
    [
      {
        id: "01",
        category: "Mountain",
        title: "Mt. Fuji",
        span: "lg:row-span-2",
        height: "h-[520px]",
        delay: "delay-[900ms]",
        img: MountFuji,
      },
      {
        id: "02",
        category: "Mountain",
        title: "Mt. Kailash",
        span: "",
        height: "h-[260px]",
        delay: "delay-[100ms]",
        img: KailashMount,
      },
      {
        id: "03",
        category: "Mountain",
        title: "Mt. Kailash",
        span: "",
        height: "h-[260px]",
        delay: "delay-[100ms]",
        img: KailashMount,
      },
      {
        id: "04",
        category: "Mountain",
        title: "Mt. Fuji",
        span: "lg:row-span-2",
        height: "h-[520px]",
        delay: "delay-[900ms]",
        img: MountFuji,
      },
      {
        id: "05",
        category: "Portrait",
        title: "Caught Light",
        span: "",
        height: "h-[260px]",
        delay: "delay-[100ms]",
        img: KailashMount,
      },
      {
        id: "06",
        category: "Minimal",
        title: "Still Frame",
        span: "",
        height: "h-[260px]",
        delay: "delay-[100ms]",
        img: KailashMount,
      },
      {
        id: "07",
        category: "Mountain",
        title: "Mt. Fuji",
        span: "lg:row-span-2",
        height: "h-[520px]",
        delay: "delay-[900ms]",
        img: MountFuji,
      },
      {
        id: "08",
        category: "Minimal",
        title: "Still Frame",
        span: "",
        height: "h-[260px]",
        delay: "delay-[100ms]",
        img: KailashMount,
      },
      {
        id: "09",
        category: "Minimal",
        title: "Still Frame",
        span: "",
        height: "h-[260px]",
        delay: "delay-[100ms]",
        img: KailashMount,
      },
    ],

    // Page 2
    [
      {
        id: "10",
        category: "Street",
        title: "Rush Hour",
        span: "lg:row-span-2",
        height: "h-[520px]",
        delay: "delay-[900ms]",
        img: MountFuji,
      },
      {
        id: "11",
        category: "Architecture",
        title: "Symmetry",
        span: "",
        height: "h-[260px]",
        delay: "delay-[100ms]",
        img: KailashMount,
      },
      {
        id: "12",
        category: "Ocean",
        title: "Tide Lines",
        span: "",
        height: "h-[260px]",
        delay: "delay-[100ms]",
        img: KailashMount,
      },
      {
        id: "13",
        category: "Forest",
        title: "Into the Woods",
        span: "lg:row-span-2",
        height: "h-[520px]",
        delay: "delay-[900ms]",
        img: MountFuji,
      },
      {
        id: "14",
        category: "Portrait",
        title: "Dusk Glow",
        span: "",
        height: "h-[260px]",
        delay: "delay-[100ms]",
        img: KailashMount,
      },
      {
        id: "15",
        category: "Minimal",
        title: "White Noise",
        span: "",
        height: "h-[260px]",
        delay: "delay-[100ms]",
        img: KailashMount,
      },
      {
        id: "16",
        category: "Mountain",
        title: "Mt. Fuji",
        span: "lg:row-span-2",
        height: "h-[520px]",
        delay: "delay-[900ms]",
        img: MountFuji,
      },
      {
        id: "17",
        category: "Minimal",
        title: "Still Frame",
        span: "",
        height: "h-[260px]",
        delay: "delay-[100ms]",
        img: KailashMount,
      },
      {
        id: "18",
        category: "Minimal",
        title: "Still Frame",
        span: "",
        height: "h-[260px]",
        delay: "delay-[100ms]",
        img: KailashMount,
      },
    ],

    // Page 3
    [
      {
        id: "19",
        category: "Desert",
        title: "Sand Drift",
        span: "lg:row-span-2",
        height: "h-[520px]",
        delay: "delay-[900ms]",
        img: MountFuji,
      },
      {
        id: "20",
        category: "Night",
        title: "City Pulse",
        span: "",
        height: "h-[260px]",
        delay: "delay-[100ms]",
        img: KailashMount,
      },
      {
        id: "21",
        category: "Winter",
        title: "First Snow",
        span: "",
        height: "h-[260px]",
        delay: "delay-[100ms]",
        img: KailashMount,
      },
      {
        id: "22",
        category: "Aerial",
        title: "Overhead",
        span: "lg:row-span-2",
        height: "h-[520px]",
        delay: "delay-[900ms]",
        img: MountFuji,
      },
      {
        id: "23",
        category: "Portrait",
        title: "Midday",
        span: "",
        height: "h-[260px]",
        delay: "delay-[100ms]",
        img: KailashMount,
      },
      {
        id: "24",
        category: "Abstract",
        title: "Formless",
        span: "",
        height: "h-[260px]",
        delay: "delay-[100ms]",
        img: KailashMount,
      },
      {
        id: "25",
        category: "Mountain",
        title: "Mt. Fuji",
        span: "lg:row-span-2",
        height: "h-[520px]",
        delay: "delay-[900ms]",
        img: MountFuji,
      },
      {
        id: "26",
        category: "Minimal",
        title: "Still Frame",
        span: "",
        height: "h-[260px]",
        delay: "delay-[100ms]",
        img: KailashMount,
      },
      {
        id: "27",
        category: "Minimal",
        title: "Still Frame",
        span: "",
        height: "h-[260px]",
        delay: "delay-[100ms]",
        img: KailashMount,
      },
    ],
  ];

  const [page, setPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const cards = allPages[page];
  const totalPages = allPages.length;

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
        <p className="text-[0.8rem] md:text-[1rem] lg:text-[1.12rem] tracking-wide uppercase text-gold font-mono cursor-pointer">
          View all &#x23CE;
        </p>
      </section>

      {/* Masonary Gallery */}
      <section
        className={`pt-0 px-6 md:px-12 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all 
          duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${isAnimating ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"}`}
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`group relative overflow-hidden cursor-pointer row-span-1 ${card.span} ${card.height} animate-[fadeUp_0.6s_ease_forwards]
                          transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${card.delay}`}
            style={{ transitionDelay: `${index * 80}ms` }}
          >
            <img
              src={card.img}
              alt={card.title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover scale-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 will-change-transform"
            />
            <div
              className="absolute inset-0 opacity-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_0%,transparent_50%)] 
                            transition-opacity duration-500 group-hover:opacity-100"
            ></div>
            <div
              className="absolute bottom-0 left-0 right-0 p-6 opacity-0 translate-y-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                            group-hover:opacity-100 group-hover:translate-y-0"
            >
              <p className="tracking-[0.25em] uppercase text-[rgb(200,169,110)] mb-1.5 font-mono transition-all duration-300 group-hover:text-[0.55rem]">
                {card.category}
              </p>
              <p className="tracking-tight font-serif transition-all duration-300 group-hover:text-[1.25rem]">
                {card.title}
              </p>
            </div>
            <p className="absolute top-4 right-4 text-[0.55rem] tracking-wide text-[rgba(200,169,110,0.5)] font-mono">
              {card.id}
            </p>
          </div>
        ))}
      </section>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-6 pb-16">
        <button
          onClick={() => changePage(Math.max(0, page - 1))}
          disabled={page === 0}
          className="w-6 h-6 flex items-center justify-center rounded-full text-[0.65rem] text-[rgb(200,169,110)]
  bg-white/5 hover:bg-white/10 transition
  disabled:opacity-50"
        >
          {/* <ChevronLeft
            size={20}
            strokeWidth={2.5}
            className={`text-[rgb(200,169,110)] ${page === 0 ? "opacity-40" : ""}`}
          /> */}
          &larr;
        </button>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => changePage(i)}
            className={`relative w-6 h-6 flex items-center justify-center font-mono text-[0.65rem] tracking-widest
                        p-0 border-0 bg-transparent rounded-none transition-all duration-300
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
          className="w-6 h-6 flex items-center justify-center text-[0.65rem] text-[rgb(200,169,110)] rounded-full bg-white/5 hover:bg-white/10 transition"
        >
          {/* <ChevronRight
            size={20}
            strokeWidth={2.5}
            className="text-[rgb(200,169,110)]"
          /> */}
          &rarr;
        </button>
      </div>
    </>
  );
}

export default MasonaryGallery;
