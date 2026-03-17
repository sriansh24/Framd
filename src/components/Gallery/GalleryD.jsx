import React, { useState } from "react";

// ── Shared hover-caption overlay ──────────────
function PhotoCaption({ label }) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 z-10
                 flex items-end justify-center
                 opacity-0 translate-y-2
                 group-hover:opacity-100 group-hover:translate-y-0
                 transition-all duration-500 ease-out
                 pb-3 pt-10 text-center"
      style={{
        background:
          "linear-gradient(to top, rgba(10,5,0,0.92) 0%, transparent 100%)",
      }}
    >
      <span
        className="text-sm italic tracking-widest"
        style={{ fontFamily: "'Playfair Display', serif", color: "#e6b77e" }}
      >
        {label}
      </span>
    </div>
  );
}

// ── Story text block ───────────────────────────
function StoryContent({ label, title, body, byline }) {
  return (
    <div className="flex-1 min-w-0">
      <p
        className="mb-2 text-[0.65rem] uppercase tracking-[0.22em] opacity-70"
        style={{ fontFamily: "'IM Fell English', serif", color: "#8b5e1a" }}
      >
        {label}
      </p>
      <h3
        className="mb-3 font-bold leading-[1.1]"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "#e6b77e",
          fontSize: "clamp(1.25rem, 2.4vw, 2rem)",
        }}
      >
        {title}
      </h3>
      <p
        className="leading-[1.8] opacity-85"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)",
          color: "#e6b77e",
        }}
      >
        {body}
      </p>
      <p
        className="mt-4 text-[0.82rem] italic opacity-70 tracking-[0.04em]"
        style={{ fontFamily: "'IM Fell English', serif", color: "#c9933a" }}
      >
        {byline}
      </p>
    </div>
  );
}

// ── Gold rule divider ──────────────────────────
function GoldRule() {
  return (
    <div
      className="w-full h-px my-10 opacity-40"
      style={{
        background:
          "linear-gradient(to right, transparent, #c9933a, transparent)",
      }}
    />
  );
}

// ══ 1. SQUARE FRAME ═══════════════════════════
function SquareFrame({ src, alt, caption }) {
  return (
    <div
      className="relative group flex-shrink-0 overflow-hidden"
      style={{
        width: "clamp(200px, 28vw, 280px)",
        height: "clamp(200px, 28vw, 280px)",
        border: "2px solid #c9933a",
        boxShadow:
          "0 0 0 4px rgba(201,147,58,0.12), inset 0 0 0 4px rgba(201,147,58,0.06)",
      }}
    >
      {/* Corner ornaments */}
      <span
        className="absolute top-[-4px] left-[-4px] w-[14px] h-[14px] z-10 opacity-70 pointer-events-none"
        style={{ borderTop: "2px solid #e6b77e", borderLeft: "2px solid #e6b77e" }}
      />
      <span
        className="absolute bottom-[-4px] right-[-4px] w-[14px] h-[14px] z-10 opacity-70 pointer-events-none"
        style={{ borderBottom: "2px solid #e6b77e", borderRight: "2px solid #e6b77e" }}
      />

      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out
                   group-hover:scale-[1.06] group-hover:[filter:sepia(0.15)]"
      />
      <PhotoCaption label={caption} />
    </div>
  );
}

// ══ 2. CIRCLE FRAME ═══════════════════════════
function CircleFrame({ src, alt, caption }) {
  return (
    <div
      className="relative group flex-shrink-0 overflow-hidden rounded-full"
      style={{
        width: "clamp(200px, 28vw, 280px)",
        height: "clamp(200px, 28vw, 280px)",
        border: "2px solid #c9933a",
        boxShadow:
          "0 0 0 6px rgba(201,147,58,0.08), 0 0 30px rgba(201,147,58,0.1)",
      }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 ease-out
                   group-hover:scale-[1.06] group-hover:[filter:sepia(0.15)]"
      />
      {/* Circle caption — clipped to bottom arc */}
      <div
        className="absolute bottom-0 left-0 right-0 z-10
                   flex items-end justify-center
                   opacity-0 translate-y-2
                   group-hover:opacity-100 group-hover:translate-y-0
                   transition-all duration-500 ease-out
                   pb-5 pt-10 text-center"
        style={{
          background:
            "linear-gradient(to top, rgba(10,5,0,0.92) 0%, transparent 100%)",
          borderRadius: "0 0 50% 50%",
        }}
      >
        <span
          className="text-sm italic tracking-widest"
          style={{ fontFamily: "'Playfair Display', serif", color: "#e6b77e" }}
        >
          {caption}
        </span>
      </div>
    </div>
  );
}

// ══ 3. HEXAGON FRAME ══════════════════════════
function HexFrame({ src, alt, caption }) {
  const size = "clamp(200px, 28vw, 270px)";
  const heightSize = "clamp(224px, 31.5vw, 302px)";

  return (
    <div
      className="relative group flex-shrink-0"
      style={{ width: size, height: heightSize }}
    >
      {/* SVG hex border */}
      <svg
        viewBox="0 0 260 290"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full z-20 pointer-events-none"
      >
        <polygon
          points="130,4 254,69 254,221 130,286 6,221 6,69"
          stroke="#c9933a"
          strokeWidth="2"
          fill="none"
          opacity="0.85"
        />
        <polygon
          points="130,10 248,73 248,217 130,280 12,217 12,73"
          stroke="#c9933a"
          strokeWidth="0.5"
          fill="none"
          opacity="0.25"
        />
      </svg>

      {/* Clipped image */}
      <div
        className="absolute inset-[6px] overflow-hidden z-10"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out
                     group-hover:scale-[1.06] group-hover:[filter:sepia(0.15)]"
        />

        {/* Hex caption — inside clip */}
        <div
          className="absolute bottom-0 left-0 right-0 z-10
                     flex items-end justify-center
                     opacity-0 translate-y-2
                     group-hover:opacity-100 group-hover:translate-y-0
                     transition-all duration-500 ease-out
                     pb-8 pt-10 text-center"
          style={{
            background:
              "linear-gradient(to top, rgba(10,5,0,0.92) 0%, transparent 100%)",
          }}
        >
          <span
            className="text-sm italic tracking-widest"
            style={{ fontFamily: "'Playfair Display', serif", color: "#e6b77e" }}
          >
            {caption}
          </span>
        </div>
      </div>
    </div>
  );
}

// ══ MAIN COMPONENT ════════════════════════════
function GalleryD() {
  const stories = [
    {
      id: 1,
      frame: "square",
      layout: "photo-left", // photo left, content right
      photo: {
        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
        alt: "Mountain Dawn",
        caption: "Mountain Dawn",
      },
      content: {
        label: "Chronicle I — The Summit",
        title: "Where Silence Speaks in Gold",
        body: "High above the treeline, where the air thins to a whisper and morning paints every ridge in molten copper, a single moment crystallises into memory. The mountain doesn't yield its story easily — it demands patience, a willingness to wait in cold darkness until the first light breaks.",
        byline: "— Correspondent, High Altitude Desk · March 2026",
      },
    },
    {
      id: 2,
      frame: "circle",
      layout: "photo-right", // content left, photo right
      photo: {
        src: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&q=80",
        alt: "Ocean Tide",
        caption: "Ocean Tide",
      },
      content: {
        label: "Chronicle II — The Sea",
        title: "Tides That Remember Every Shore",
        body: "The ocean holds the oldest archive known to earth. Each wave that curls onto ancient stone carries within it the memory of ten thousand storms, of ships that passed without names, of fishermen who read the water like a sacred text. To stand at its edge is to stand at the margin of all human story.",
        byline: "— Maritime Features · March 2026",
      },
    },
    {
      id: 3,
      frame: "hex",
      layout: "photo-left", // photo left, content right
      photo: {
        src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
        alt: "Ancient Forest",
        caption: "Ancient Forest",
      },
      content: {
        label: "Chronicle III — The Forest",
        title: "A Cathedral Built Without Hands",
        body: "Deep in the old forest, where roots cross and light arrives in cathedral shafts through canopies centuries old, time moves differently. The trees do not measure years — they measure silences. Between storms, between seasons, between the footsteps of creatures that pass without knowing they walk through something sacred.",
        byline: "— Natural World Desk · March 2026",
      },
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden pt-14 px-6 md:px-12 pb-14 isolate"
      style={{ background: "rgba(139,69,19,0.12)" }}
    >
      {/* Dark background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #080808 0%, #080808 80%, #0a0500 100%)",
          zIndex: 0,
        }}
      />

      {/* ── Warm gold gradient from top (continuation) ── */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{
          height: "200px",
          background:
            "linear-gradient(to bottom, rgba(201,147,58,0.18) 0%, rgba(201,147,58,0.06) 60%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative" style={{ zIndex: 2 }}>

        {/* Section heading */}
        <h2
          className="mb-16 font-normal leading-[0.9] tracking-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 6vw, 6rem)",
            color: "#e6b77e",
          }}
        >
          Where Moments
          <br />
          <span className="italic ml-7 pl-7" style={{ color: "#e6b77e" }}>
            Become Stories...
          </span>
        </h2>

        {/* Sub-sections */}
        {stories.map((story, index) => (
          <div key={story.id}>
            {/* ── Sub-section row ── */}
            <div
              className={`
                flex flex-col md:flex-row items-center gap-10 py-8
                ${story.layout === "photo-right" ? "md:flex-row-reverse" : ""}
              `}
            >
              {/* Photo */}
              {story.frame === "square" && (
                <SquareFrame
                  src={story.photo.src}
                  alt={story.photo.alt}
                  caption={story.photo.caption}
                />
              )}
              {story.frame === "circle" && (
                <CircleFrame
                  src={story.photo.src}
                  alt={story.photo.alt}
                  caption={story.photo.caption}
                />
              )}
              {story.frame === "hex" && (
                <HexFrame
                  src={story.photo.src}
                  alt={story.photo.alt}
                  caption={story.photo.caption}
                />
              )}

              {/* Content */}
              <StoryContent
                label={story.content.label}
                title={story.content.title}
                body={story.content.body}
                byline={story.content.byline}
              />
            </div>

            {/* Gold rule between sections (not after last) */}
            {index < stories.length - 1 && <GoldRule />}
          </div>
        ))}
      </div>
    </section>
  );
}

export default GalleryD;
