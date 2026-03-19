import React, { useRef, useEffect, useState, useCallback } from "react";

/* ─── DATA ─────────────────────────────────────────────── */
const CARDS = [
  { id: 0, title: "Silent Monarch",  category: "Wildlife",  img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85" },
  { id: 1, title: "Golden Hour",     category: "Landscape", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=700&q=85" },
  { id: 2, title: "Apex Predator",   category: "Wild",      img: "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?w=700&q=85" },
  { id: 3, title: "Deep Forest",     category: "Nature",    img: "https://images.unsplash.com/photo-1504025468847-0e438279542c?w=700&q=85" },
  { id: 4, title: "Amber Dusk",      category: "Landscape", img: "https://images.unsplash.com/photo-1484406566174-9da000fda645?w=700&q=85" },
  { id: 5, title: "Primal Grace",    category: "Wildlife",  img: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=700&q=85" },
  { id: 6, title: "Obsidian Peak",   category: "Landscape", img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&q=85" },
  { id: 7, title: "Sacred Light",    category: "Nature",    img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=700&q=85" },
];

const N = CARDS.length;
const ANGLE_STEP = 360 / N;

function GalleryD() {
  const rafRef        = useRef(null);
  const rotRef        = useRef(0);
  const pausedRef     = useRef(false);
  const isDragRef     = useRef(false);
  const dragStartRef  = useRef({ x: 0, rot: 0 });
  const lastFrameRef  = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [metrics, setMetrics]     = useState(() => getMetrics());

  function getMetrics() {
    if (typeof window === "undefined") return { radius: 560, cardW: 360, cardH: 480 };
    const vw = window.innerWidth;
    if (vw < 480)  return { radius: 240, cardW: 190, cardH: 260 };
    if (vw < 768)  return { radius: 320, cardW: 230, cardH: 310 };
    if (vw < 1024) return { radius: 420, cardW: 290, cardH: 390 };
    return               { radius: 540, cardW: 350, cardH: 470 };
  }

  useEffect(() => {
    const onResize = () => setMetrics(getMetrics());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* ── apply transforms directly to DOM (no react re-render per frame) ── */
  const applyTransforms = useCallback((rot) => {
    const { radius } = getMetrics();
    for (let i = 0; i < N; i++) {
      const el = document.getElementById(`cvc-${i}`);
      if (!el) continue;
      // angle of this card relative to "front" (angle 0 = front)
      const angleDeg = ((i * ANGLE_STEP - rot) % 360 + 360) % 360;
      const rad      = (angleDeg * Math.PI) / 180;
      const x        = Math.sin(rad) * radius;
      const z        = Math.cos(rad) * radius; // cos(0)=1 → front
      const depth    = (z + radius) / (radius * 2); // 0..1
      const scale    = 0.65 + depth * 0.35;
      el.style.transform = `translateX(${x}px) translateZ(${z}px) rotateY(${-angleDeg}deg) scale(${scale})`;
      el.style.opacity   = String(0.18 + depth * 0.82);
      el.style.zIndex    = String(Math.round(depth * 100));
    }
  }, []);

  const updateActive = useCallback((rot) => {
    let best = 0, bestDist = Infinity;
    for (let i = 0; i < N; i++) {
      const angle = ((i * ANGLE_STEP - rot) % 360 + 360) % 360;
      const dist  = Math.min(angle, 360 - angle);
      if (dist < bestDist) { bestDist = dist; best = i; }
    }
    setActiveIdx(best);
  }, []);

  /* ── rAF loop ── */
  const SPEED = 0.16;
  const tick  = useCallback((ts) => {
    if (!lastFrameRef.current) lastFrameRef.current = ts;
    const dt = ts - lastFrameRef.current;
    lastFrameRef.current = ts;
    if (!pausedRef.current && !isDragRef.current) {
      rotRef.current = (rotRef.current + SPEED * (dt / 16.67)) % 360;
      applyTransforms(rotRef.current);
      updateActive(rotRef.current);
    }
    rafRef.current = requestAnimationFrame(tick);
  }, [applyTransforms, updateActive]);

  useEffect(() => {
    applyTransforms(0);
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick, applyTransforms]);

  /* ── pointer ── */
  const onPointerDown = (e) => {
    isDragRef.current   = true;
    pausedRef.current   = true;
    dragStartRef.current = { x: e.clientX, rot: rotRef.current };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    if (!isDragRef.current) return;
    const dx = e.clientX - dragStartRef.current.x;
    rotRef.current = (dragStartRef.current.rot - dx * 0.22 + 7200) % 360;
    applyTransforms(rotRef.current);
    updateActive(rotRef.current);
  };
  const onPointerUp = () => {
    isDragRef.current = false;
    pausedRef.current = false;
  };

  /* ── wheel ── */
  const onWheel = (e) => {
    e.preventDefault();
    rotRef.current = (rotRef.current + e.deltaY * 0.06 + 7200) % 360;
    applyTransforms(rotRef.current);
    updateActive(rotRef.current);
  };

  /* ── touch ── */
  const onTouchStart = (e) => {
    isDragRef.current    = true;
    pausedRef.current    = true;
    dragStartRef.current = { x: e.touches[0].clientX, rot: rotRef.current };
  };
  const onTouchMove = (e) => {
    if (!isDragRef.current) return;
    const dx = e.touches[0].clientX - dragStartRef.current.x;
    rotRef.current = (dragStartRef.current.rot - dx * 0.28 + 7200) % 360;
    applyTransforms(rotRef.current);
    updateActive(rotRef.current);
  };
  const onTouchEnd = () => {
    isDragRef.current = false;
    pausedRef.current = false;
  };

  const { cardW, cardH, radius } = metrics;

  return (
    <section style={{
      position:"relative", width:"100%", minHeight:"100vh", overflow:"hidden",
      display:"flex", flexDirection:"column",
      background:"linear-gradient(170deg,#070707 0%,#0e0e0e 30%,#160e02 65%,#090700 100%)",
      fontFamily:"'Palatino Linotype','Palatino','Book Antiqua',serif",
    }}>

      {/* grain */}
      <div style={{
        position:"absolute",inset:0,pointerEvents:"none",zIndex:1,opacity:.15,
        backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize:"160px",mixBlendMode:"overlay",
      }}/>

      {/* warm glow */}
      <div style={{
        position:"absolute",inset:0,pointerEvents:"none",zIndex:0,
        background:"radial-gradient(ellipse 65% 50% at 50% 60%,rgba(180,115,8,.13) 0%,rgba(110,65,0,.06) 45%,transparent 72%)",
      }}/>

      {/* ── HEADER ── */}
      <header style={{
        position:"relative",zIndex:20,
        padding:"clamp(1.8rem,5vw,4rem) clamp(1.2rem,6vw,5rem) 0",
      }}>
        <p style={{
          fontSize:"clamp(.58rem,.75vw,.72rem)",letterSpacing:".35em",
          textTransform:"uppercase",color:"#b8860b",margin:"0 0 clamp(.4rem,.8vw,.7rem)",
        }}>Portfolio</p>

        <h2 style={{
          fontSize:"clamp(2.6rem,7.5vw,7.2rem)",fontWeight:400,
          lineHeight:.88,letterSpacing:"-.02em",margin:0,
          background:"linear-gradient(172deg,#222 0%,#161616 16%,#9a7010 46%,#d4a017 70%,#f0c040 100%)",
          WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",
        }}>
          Crafted<br/>Visions
        </h2>

        <div style={{
          marginTop:"clamp(.8rem,2vw,1.5rem)",height:1,
          background:"linear-gradient(90deg,transparent,rgba(184,134,11,.4) 20%,rgba(240,192,64,.55) 55%,transparent)",
          maxWidth:"clamp(160px,35vw,420px)",
        }}/>
      </header>

      {/* ── 3D STAGE ── */}
      <div
        style={{
          position:"relative",zIndex:10,
          flex:1,display:"flex",alignItems:"center",justifyContent:"center",
          cursor:"grab",userSelect:"none",
          minHeight:`${cardH + 80}px`,
          marginTop:"clamp(.5rem,2vw,1.5rem)",
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onWheel={onWheel}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* perspective container */}
        <div style={{
          position:"relative",
          width:cardW,height:cardH,
          perspective:`${radius * 3.2}px`,
          perspectiveOrigin:"50% 50%",
        }}>
          {/* 3D ring */}
          <div style={{
            position:"absolute",
            width:cardW,height:cardH,
            transformStyle:"preserve-3d",
          }}>
            {CARDS.map((card, i) => (
              <div
                key={card.id}
                id={`cvc-${i}`}
                onMouseEnter={() => { pausedRef.current = true; }}
                onMouseLeave={() => { pausedRef.current = false; }}
                style={{
                  position:"absolute",inset:0,
                  cursor:"pointer",
                  willChange:"transform,opacity",
                  overflow:"hidden",
                  borderRadius:2,
                  border:"1px solid rgba(184,134,11,.3)",
                  background:"#0c0902",
                  boxShadow:"0 24px 70px rgba(0,0,0,.75), 0 0 0 0 transparent",
                }}
              >
                {/* ghost layers behind card (the stacked-frame look) */}
                {[2,1].map(l => (
                  <div key={l} style={{
                    position:"absolute",
                    top:l*10,left:l*10,right:-l*10,bottom:-l*10,
                    border:`1px solid rgba(184,134,11,${.08*l})`,
                    background:`rgba(6,4,0,${.3+l*.12})`,
                    pointerEvents:"none",zIndex:-l,borderRadius:2,
                  }}/>
                ))}

                <img
                  src={card.img} alt={card.title} draggable={false}
                  style={{
                    width:"100%",height:"100%",objectFit:"cover",display:"block",
                    filter:"brightness(.8) contrast(1.1) saturate(.88)",
                    pointerEvents:"none",
                  }}
                />

                {/* vignette */}
                <div style={{
                  position:"absolute",inset:0,
                  background:"linear-gradient(180deg,rgba(6,4,0,0) 42%,rgba(6,4,0,.96) 100%)",
                }}/>

                {/* label */}
                <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"clamp(10px,1.8vw,18px)"}}>
                  <p style={{margin:0,fontSize:"clamp(.5rem,.6vw,.62rem)",letterSpacing:".3em",textTransform:"uppercase",color:"rgba(184,134,11,.82)",marginBottom:3}}>
                    {card.category}
                  </p>
                  <h3 style={{margin:0,fontWeight:400,fontSize:"clamp(.85rem,1.1vw,1.1rem)",color:"#f0c040",textShadow:"0 2px 10px rgba(0,0,0,.9)"}}>
                    {card.title}
                  </h3>
                </div>

                {/* corner marks */}
                <div style={{position:"absolute",top:11,right:11,width:14,height:14,borderTop:"1px solid rgba(184,134,11,.5)",borderRight:"1px solid rgba(184,134,11,.5)"}}/>
                <div style={{position:"absolute",top:11,left:11,width:14,height:14,borderTop:"1px solid rgba(184,134,11,.28)",borderLeft:"1px solid rgba(184,134,11,.28)"}}/>
              </div>
            ))}
          </div>
        </div>

        {/* side vignettes */}
        {["left","right"].map(s => (
          <div key={s} style={{
            position:"absolute",top:0,bottom:0,[s]:0,
            width:"clamp(30px,7vw,100px)",
            background:`linear-gradient(${s==="left"?"90":"270"}deg,#090700 0%,transparent 100%)`,
            pointerEvents:"none",zIndex:5,
          }}/>
        ))}
      </div>

      {/* ── FOOTER ── */}
      <footer style={{
        position:"relative",zIndex:20,
        display:"flex",alignItems:"center",justifyContent:"space-between",
        padding:"clamp(.6rem,1.5vw,1rem) clamp(1.2rem,6vw,5rem) clamp(1rem,2.5vw,1.75rem)",
        borderTop:"1px solid rgba(184,134,11,.1)",
      }}>
        <p style={{margin:0,fontSize:"clamp(.5rem,.65vw,.65rem)",letterSpacing:".28em",textTransform:"uppercase",color:"rgba(184,134,11,.35)"}}>
          Drag · Scroll · Touch
        </p>
        <div style={{display:"flex",gap:7,alignItems:"center"}}>
          {CARDS.map((_,i) => (
            <div key={i} style={{
              width: i===activeIdx?22:5, height:1.5,
              background: i===activeIdx?"rgba(240,192,64,.8)":"rgba(184,134,11,.22)",
              transition:"all .35s ease",borderRadius:2,
            }}/>
          ))}
        </div>
        <p style={{margin:0,fontSize:"clamp(.5rem,.65vw,.65rem)",letterSpacing:".28em",textTransform:"uppercase",color:"rgba(184,134,11,.35)"}}>
          © 2026
        </p>
      </footer>

      <style>{`
        [id^="cvc-"] { transition: box-shadow .3s; }
        [id^="cvc-"]:hover { box-shadow: 0 30px 90px rgba(0,0,0,.85), 0 0 35px rgba(184,134,11,.18) !important; cursor: pointer !important; }
        * { box-sizing: border-box; }
      `}</style>
    </section>
  );
}
export default GalleryD;