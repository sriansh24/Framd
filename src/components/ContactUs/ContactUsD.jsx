import { useState } from "react";

const allPages = [
  // Page 1
  [
    {
      id: "01",
      category: "Portrait",
      title: "Golden Hour",
      span: "lg:row-span-2",
      height: "h-[520px]",
      delay: "delay-[900ms]",
      img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    },
    {
      id: "02",
      category: "Landscape",
      title: "Fog & Silence",
      span: "",
      height: "h-[260px]",
      delay: "delay-[100ms]",
      img: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    },
    {
      id: "03",
      category: "Urban",
      title: "Concrete",
      span: "",
      height: "h-[260px]",
      delay: "delay-[100ms]",
      img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    },
    {
      id: "04",
      category: "Nature",
      title: "After Rain",
      span: "lg:row-span-2",
      height: "h-[520px]",
      delay: "delay-[900ms]",
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
    },
    {
      id: "05",
      category: "Portrait",
      title: "Caught Light",
      span: "",
      height: "h-[260px]",
      delay: "delay-[100ms]",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&q=80",
    },
    {
      id: "06",
      category: "Minimal",
      title: "Still Frame",
      span: "",
      height: "h-[260px]",
      delay: "delay-[100ms]",
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
    },
  ],
  // Page 2
  [
    {
      id: "07",
      category: "Street",
      title: "Rush Hour",
      span: "lg:row-span-2",
      height: "h-[520px]",
      delay: "delay-[900ms]",
      img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    },
    {
      id: "08",
      category: "Architecture",
      title: "Symmetry",
      span: "",
      height: "h-[260px]",
      delay: "delay-[100ms]",
      img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    },
    {
      id: "09",
      category: "Ocean",
      title: "Tide Lines",
      span: "",
      height: "h-[260px]",
      delay: "delay-[100ms]",
      img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80",
    },
    {
      id: "10",
      category: "Forest",
      title: "Into the Woods",
      span: "lg:row-span-2",
      height: "h-[520px]",
      delay: "delay-[900ms]",
      img: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    },
    {
      id: "11",
      category: "Portrait",
      title: "Dusk Glow",
      span: "",
      height: "h-[260px]",
      delay: "delay-[100ms]",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    },
    {
      id: "12",
      category: "Minimal",
      title: "White Noise",
      span: "",
      height: "h-[260px]",
      delay: "delay-[100ms]",
      img: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?w=800&q=80",
    },
  ],
  // Page 3
  [
    {
      id: "13",
      category: "Desert",
      title: "Sand Drift",
      span: "lg:row-span-2",
      height: "h-[520px]",
      delay: "delay-[900ms]",
      img: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800&q=80",
    },
    {
      id: "14",
      category: "Night",
      title: "City Pulse",
      span: "",
      height: "h-[260px]",
      delay: "delay-[100ms]",
      img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&q=80",
    },
    {
      id: "15",
      category: "Winter",
      title: "First Snow",
      span: "",
      height: "h-[260px]",
      delay: "delay-[100ms]",
      img: "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&q=80",
    },
    {
      id: "16",
      category: "Aerial",
      title: "Overhead",
      span: "lg:row-span-2",
      height: "h-[520px]",
      delay: "delay-[900ms]",
      img: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80",
    },
    {
      id: "17",
      category: "Portrait",
      title: "Midday",
      span: "",
      height: "h-[260px]",
      delay: "delay-[100ms]",
      img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    },
    {
      id: "18",
      category: "Abstract",
      title: "Formless",
      span: "",
      height: "h-[260px]",
      delay: "delay-[100ms]",
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
    },
  ],
];

export default function ContactUsD() {
  const [page, setPage] = useState(0);
  const cards = allPages[page];
  const totalPages = allPages.length;

  return (
    <div className="bg-black min-h-screen">
      <section className="pt-0 px-6 md:px-12 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`group relative overflow-hidden cursor-pointer row-span-1 ${card.span} ${card.height} opacity-100 translate-y-0
                        transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${card.delay}`}
          >
            {/* IMAGE replaces the color div */}
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-full object-cover scale-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
            />

            {/* Hover overlay gradient */}
            <div
              className="absolute inset-0 opacity-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.85)_0%,transparent_50%)] 
                          transition-opacity duration-500 group-hover:opacity-100"
            ></div>

            {/* Hover text */}
            <div
              className="absolute bottom-0 left-0 right-0 p-6 opacity-0 translate-y-4 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
                          group-hover:opacity-100 group-hover:translate-y-0"
            >
              <p className="tracking-[0.25em] uppercase text-[rgb(200,169,110)] mb-1.5 font-mono transition-all duration-300 group-hover:text-[0.55rem]">
                {card.category}
              </p>
              <p className="tracking-tight font-serif text-white transition-all duration-300 group-hover:text-[1.25rem]">
                {card.title}
              </p>
            </div>

            {/* Number badge */}
            <p className="absolute top-4 right-4 text-[0.55rem] tracking-wide text-[rgba(200,169,110,0.5)] font-mono">
              {card.id}
            </p>
          </div>
        ))}
      </section>

      {/* Pagination — centered, below the section only */}
      <div className="flex items-center justify-center gap-4 pb-16">
        <button
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
          className="w-8 h-8 flex items-center justify-center text-[rgba(200,169,110,0.5)] hover:text-[rgb(200,169,110)] 
                     disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-300 font-mono text-xs tracking-widest"
        >
          ←
        </button>

        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            className={`relative w-6 h-6 flex items-center justify-center font-mono text-[0.55rem] tracking-widest
                        transition-all duration-300
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
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page === totalPages - 1}
          className="w-8 h-8 flex items-center justify-center text-[rgba(200,169,110,0.5)] hover:text-[rgb(200,169,110)] 
                     disabled:opacity-20 disabled:cursor-not-allowed transition-colors duration-300 font-mono text-xs tracking-widest"
        >
          →
        </button>
      </div>
    </div>
  );
}
