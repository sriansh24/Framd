import { useState, useEffect, useRef } from "react";

const photos = [
  { id: 1, ratio: "tall", category: "Portrait", title: "Golden Hour", bg: "linear-gradient(135deg, #1a0a00 0%, #4a2800 40%, #8b4513 100%)" },
  { id: 2, ratio: "wide", category: "Landscape", title: "Fog & Silence", bg: "linear-gradient(135deg, #0a0f1a 0%, #1a2a3a 50%, #2d4a6b 100%)" },
  { id: 3, ratio: "square", category: "Urban", title: "Concrete Dream", bg: "linear-gradient(135deg, #1a1a1a 0%, #3a3a3a 50%, #5a5a5a 100%)" },
  { id: 4, ratio: "tall", category: "Nature", title: "After Rain", bg: "linear-gradient(135deg, #001a0a 0%, #003a1a 40%, #005a2a 100%)" },
  { id: 5, ratio: "wide", category: "Portrait", title: "Caught Light", bg: "linear-gradient(135deg, #1a0a1a 0%, #3a1a3a 50%, #6b2d6b 100%)" },
  { id: 6, ratio: "square", category: "Minimal", title: "Just Space", bg: "linear-gradient(135deg, #0a0a0f 0%, #1a1a2a 50%, #2a2a4a 100%)" },
];

const navItems = ["Work", "Series", "About", "Contact"];

export default function Gallery() {
  const [hoveredPhoto, setHoveredPhoto] = useState(null);
  const [activeNav, setActiveNav] = useState("Work");
  const [loaded, setLoaded] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showCursor, setShowCursor] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
    const handleMouse = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div style={{ fontFamily: "'Georgia', 'Times New Roman', serif", background: "#080808", minHeight: "100vh", color: "#e8e0d4", overflow: "hidden", position: "relative" }}>

      {/* Custom cursor dot */}
      {showCursor && (
        <div style={{
          position: "fixed", left: cursorPos.x - 4, top: cursorPos.y - 4,
          width: 8, height: 8, borderRadius: "50%", background: "#c8a96e",
          pointerEvents: "none", zIndex: 9999, transition: "transform 0.1s ease",
          mixBlendMode: "difference"
        }} />
      )}

      {/* Grain overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
        opacity: 0.6
      }} />

      {/* NAV */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "2rem 3rem",
        opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(-20px)",
        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        background: "linear-gradient(to bottom, rgba(8,8,8,0.95) 0%, transparent 100%)",
      }}>
        <div style={{ letterSpacing: "0.25em", fontSize: "0.7rem", textTransform: "uppercase", color: "#c8a96e", fontFamily: "monospace" }}>
          A. MARCELLO
        </div>
        <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {navItems.map(item => (
            <button key={item} onClick={() => setActiveNav(item)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "inherit", fontSize: "0.75rem", letterSpacing: "0.15em",
              textTransform: "uppercase", color: activeNav === item ? "#c8a96e" : "#6b6460",
              transition: "color 0.3s ease", padding: 0,
              borderBottom: activeNav === item ? "1px solid #c8a96e" : "1px solid transparent",
              paddingBottom: "2px"
            }}>{item}</button>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <div ref={heroRef} style={{ position: "relative", height: "100vh", display: "flex", alignItems: "flex-end", padding: "0 3rem 4rem" }}
        onMouseEnter={() => setShowCursor(true)} onMouseLeave={() => setShowCursor(false)}>

        {/* Hero background photo simulation */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, #0a0500 0%, #1a0f00 30%, #2d1a00 60%, #0a0500 100%)",
          opacity: 0.8
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 60% 40%, rgba(139,69,19,0.3) 0%, transparent 60%)"
        }} />

        {/* Animated vertical lines */}
        {[15, 35, 65, 85].map((pos, i) => (
          <div key={i} style={{
            position: "absolute", top: 0, left: `${pos}%`, width: "1px", height: "100%",
            background: "rgba(200,169,110,0.06)",
            opacity: loaded ? 1 : 0,
            transition: `opacity 1.5s ease ${i * 0.2}s`
          }} />
        ))}

        <div style={{ position: "relative", zIndex: 2, maxWidth: "700px" }}>
          <div style={{
            fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase",
            color: "#c8a96e", marginBottom: "1.5rem", fontFamily: "monospace",
            opacity: loaded ? 1 : 0, transform: loaded ? "translateX(0)" : "translateX(-30px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s"
          }}>
            Documentary — Portrait — Landscape
          </div>
          <h1 style={{
            fontSize: "clamp(3.5rem, 8vw, 7rem)", fontWeight: 400, lineHeight: 0.9,
            margin: "0 0 2rem", letterSpacing: "-0.02em",
            opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(40px)",
            transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s"
          }}>
            The world,<br />
            <span style={{ color: "#c8a96e", fontStyle: "italic" }}>witnessed.</span>
          </h1>
          <p style={{
            fontSize: "0.9rem", lineHeight: 1.8, color: "#6b6460", maxWidth: "380px",
            letterSpacing: "0.02em",
            opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s"
          }}>
            Fine art photography exploring light, time, and the quiet drama of everyday existence.
          </p>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "2.5rem", right: "3rem",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem",
          opacity: loaded ? 1 : 0, transition: "opacity 1s ease 1.5s"
        }}>
          <div style={{ fontSize: "0.55rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#4a4440", writingMode: "vertical-rl" }}>scroll</div>
          <div style={{
            width: "1px", height: "50px", background: "linear-gradient(to bottom, #c8a96e, transparent)",
            animation: "pulse 2s ease-in-out infinite"
          }} />
        </div>
      </div>

      {/* SECTION LABEL */}
      <div style={{
        padding: "4rem 3rem 2rem",
        display: "flex", justifyContent: "space-between", alignItems: "baseline"
      }}>
        <div style={{ fontSize: "0.6rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "#3a3430", fontFamily: "monospace" }}>
          Selected Work — 2024
        </div>
        <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#c8a96e", fontFamily: "monospace", cursor: "pointer" }}>
          View All →
        </div>
      </div>

      {/* MASONRY GRID */}
      <div style={{
        padding: "0 3rem 6rem",
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "auto",
        gap: "1.5rem",
      }}
        onMouseEnter={() => setShowCursor(true)} onMouseLeave={() => setShowCursor(false)}>
        {photos.map((photo, i) => (
          <div
            key={photo.id}
            onMouseEnter={() => setHoveredPhoto(photo.id)}
            onMouseLeave={() => setHoveredPhoto(null)}
            style={{
              position: "relative", overflow: "hidden", cursor: "none",
              gridRow: photo.ratio === "tall" ? "span 2" : photo.ratio === "wide" ? "span 1" : "span 1",
              height: photo.ratio === "tall" ? "520px" : photo.ratio === "wide" ? "260px" : "260px",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(40px)",
              transition: `all 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${0.9 + i * 0.1}s`,
            }}>
            {/* Photo placeholder */}
            <div style={{
              width: "100%", height: "100%",
              background: photo.bg,
              transform: hoveredPhoto === photo.id ? "scale(1.04)" : "scale(1)",
              transition: "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)"
            }}>
              {/* Simulated photo content */}
              <div style={{
                position: "absolute", inset: 0,
                background: `radial-gradient(ellipse at ${30 + i * 15}% ${40 + i * 10}%, rgba(255,255,255,0.08) 0%, transparent 50%)`
              }} />
            </div>

            {/* Hover overlay */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%)",
              opacity: hoveredPhoto === photo.id ? 1 : 0,
              transition: "opacity 0.4s ease"
            }} />

            {/* Photo info */}
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem",
              transform: hoveredPhoto === photo.id ? "translateY(0)" : "translateY(10px)",
              opacity: hoveredPhoto === photo.id ? 1 : 0,
              transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
            }}>
              <div style={{ fontSize: "0.55rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#c8a96e", marginBottom: "0.4rem", fontFamily: "monospace" }}>
                {photo.category}
              </div>
              <div style={{ fontSize: "1.1rem", fontWeight: 400, letterSpacing: "-0.01em" }}>
                {photo.title}
              </div>
            </div>

            {/* Corner number */}
            <div style={{
              position: "absolute", top: "1rem", right: "1rem",
              fontSize: "0.55rem", letterSpacing: "0.2em", color: "rgba(200,169,110,0.5)",
              fontFamily: "monospace"
            }}>
              {String(i + 1).padStart(2, "0")}
            </div>
          </div>
        ))}
      </div>

      {/* FOOTER STRIP */}
      <div style={{
        borderTop: "1px solid #1a1714",
        padding: "2rem 3rem",
        display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        <div style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: "#2a2420", fontFamily: "monospace" }}>
          © 2024 A. MARCELLO — ALL RIGHTS RESERVED
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          {["Instagram", "Behance", "500px"].map(s => (
            <span key={s} style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: "#3a3430", textTransform: "uppercase", cursor: "pointer", fontFamily: "monospace" }}>{s}</span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        * { box-sizing: border-box; }
        body { margin: 0; }
        button:hover { opacity: 1 !important; }
      `}</style>
    </div>
  );
}
