import React, { useState } from "react";
import Frame from "../PremiumWorkSubComponent/Frame";
import CardLabel from "../PremiumWorkSubComponent/CardLabel";
import CornerMarks from "../PremiumWorkSubComponent/CornerMarks";

function PremiumCard({ card, cardW, cardH, onMouseEnter, onMouseLeave }) {
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    if (onMouseEnter) onMouseEnter();
  };

  const handleLeave = () => {
    setHovered(false);
    if (onMouseLeave) onMouseLeave();
  };

  return (
    <div
      id={`cvc-${card.id}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onTouchStart={handleEnter}
      onTouchEnd={handleLeave}
      className="absolute inset-0 cursor-pointer will-change:[transform,opacity] overflow-visible rounded-sm"
    >
      {/* Glow layer — sits behind the card */}
      <div
        className={`absolute inset-0 rounded-sm transition-opacity duration-700 ease-in-out pointer-events-none z-[-1]
          ${hovered
            ? "opacity-50"
            : "opacity-0"
          }`}
        style={{
          boxShadow: "0 0 40px 10px rgba(184,134,11,0.35), 0 0 80px 20px rgba(184,134,11,0.15)",
        }}
      />

      {/* Card itself */}
      <div className="absolute inset-0 overflow-hidden rounded-sm border border-[rgba(184,134,11,0.3)] bg-[#0c0902] shadow-[0_24px_70px_rgba(0,0,0,0.75)] transition-[border-color] duration-700">

        {/* Border brightens on hover */}
        <div
          className={`absolute inset-0 rounded-sm border pointer-events-none z-10 transition-opacity duration-700
            ${hovered
              ? "opacity-100 border-[rgba(184,134,11,0.75)]"
              : "opacity-0 border-[rgba(184,134,11,0.3)]"
            }`}
        />

        <Frame />

        <img
          src={card.img}
          alt={card.title}
          draggable={false}
          loading="lazy"
          decoding="async"
          className={`w-full h-full object-cover block pointer-events-none transition-[filter] duration-700
            ${hovered
              ? "brightness-[.95] contrast-[1.1] saturate-[1.0]"
              : "brightness-[.8] contrast-[1.1] saturate-[.88]"
            }`}
        />

        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,4,0,0)_42%,rgba(6,4,0,0.96)_100%)]" />

        <CardLabel category={card.category} title={card.title} />
        <CornerMarks />
      </div>
    </div>
  );
}
export default PremiumCard;