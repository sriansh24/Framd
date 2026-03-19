import React from "react";

function CardLabel({ category, title }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 p-[clamp(10px,1.8vw,18px)]">
      <p className="m-0 mb-0.75 text-[0.63rem] md:text-xs lg:text-[0.75rem] tracking-[0.35rem] uppercase text-gold-dark font-medium opacity-70">
        {category}
      </p>
      <h3 className="m-0 font-bold text-[0.875rem] md:text-[1rem] lg:text-[1.125rem] xl:text-[1.25rem] tracking-tight font-playfair text-gold [text-shadow:0_2px_10px_rgba(0,0,0,.9)] opacity-100">
        {title}
      </h3>
    </div>
  );
}
export default CardLabel;